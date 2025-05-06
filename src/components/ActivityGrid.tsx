
import React from 'react';
import { Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Activity } from '@/components/ActivityCard';
import { useNavigate } from 'react-router-dom';
import { Beer, Sandwich } from 'lucide-react';

interface ActivityGridProps {
  activities: Activity[];
  onLike: (id: string) => void;
  likedActivities: Set<string>;
  onShare?: (id: string) => void;
}

const ActivityGrid: React.FC<ActivityGridProps> = ({ activities, onLike, likedActivities, onShare }) => {
  const navigate = useNavigate();

  const handleCardClick = (activityId: string) => {
    navigate(`/activity/${activityId}`);
  };

  const handleLike = (e: React.MouseEvent, activityId: string) => {
    e.stopPropagation();
    onLike(activityId);
  };

  const handleShare = (e: React.MouseEvent, activityId: string) => {
    e.stopPropagation();
    if (onShare) {
      onShare(activityId);
    }
  };

  const renderTagIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'beer':
        return <Beer className="h-4 w-4 inline-block mr-1" />;
      case 'food':
        return <Sandwich className="h-4 w-4 inline-block mr-1" />;
      case 'creative':
        return <span className="mr-1">🎨</span>;
      case 'mindful':
        return <span className="mr-1">🧘</span>;
      case 'live':
        return <span className="mr-1">🎭</span>;
      case 'funny':
        return <span className="mr-1">😂</span>;
      case 'fashion':
        return <span className="mr-1">👗</span>;
      case 'traditional':
        return <span className="mr-1">👘</span>;
      case 'active':
        return <span className="mr-1">🏃‍♂️</span>;
      case 'nature':
        return <span className="mr-1">🌳</span>;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {activities.map((activity) => (
        <div 
          key={activity.id}
          className="bg-white rounded-lg overflow-hidden shadow-sm"
          onClick={() => handleCardClick(activity.id)}
        >
          <div className="relative">
            <img 
              src={activity.image} 
              alt={activity.title} 
              className="w-full h-32 object-cover"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/90 rounded-full backdrop-blur-sm w-8 h-8 hover:bg-white"
                onClick={(e) => handleLike(e, activity.id)}
              >
                <Heart className={`h-5 w-5 ${likedActivities.has(activity.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
              </Button>
              
              {onShare && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-white/90 rounded-full backdrop-blur-sm w-8 h-8 hover:bg-white"
                  onClick={(e) => handleShare(e, activity.id)}
                >
                  <Share2 className="h-5 w-5 text-gray-600" />
                </Button>
              )}
            </div>
            
            {activity.lastUpdated.includes("today") && (
              <div className="absolute top-2 left-2">
                <Badge variant="secondary" className="bg-green-500 text-white text-xs rounded-md px-2 py-0.5">
                  <span className="font-bold">NEW</span> New
                </Badge>
              </div>
            )}
          </div>
          
          <div className="p-3">
            <h3 className="font-bold text-base mb-1 text-primary">{activity.title}</h3>
            
            <div className="flex flex-wrap gap-1 mb-2">
              {activity.tags.slice(0, 2).map((tag, idx) => (
                <span 
                  key={idx} 
                  className="inline-flex items-center text-sm bg-w2d-blue bg-opacity-10 rounded-md px-2 py-0.5 text-primary"
                >
                  {renderTagIcon(tag)}
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
              <span>{activity.priceRange}</span>
              <span>{activity.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityGrid;
