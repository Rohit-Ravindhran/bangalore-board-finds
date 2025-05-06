export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      applications: {
        Row: {
          applied_at: string
          id: string
          message: string | null
          project_id: string
          status: string | null
          user_id: string
        }
        Insert: {
          applied_at?: string
          id?: string
          message?: string | null
          project_id: string
          status?: string | null
          user_id: string
        }
        Update: {
          applied_at?: string
          id?: string
          message?: string | null
          project_id?: string
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "applications_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cities: {
        Row: {
          country: string
          created_at: string
          id: number
          name: string
          state: string
        }
        Insert: {
          country?: string
          created_at?: string
          id?: number
          name: string
          state: string
        }
        Update: {
          country?: string
          created_at?: string
          id?: number
          name?: string
          state?: string
        }
        Relationships: []
      }
      conversations: {
        Row: {
          id: string
          last_message: string | null
          last_message_id: string | null
          updated_at: string
          user1_id: string
          user2_id: string
        }
        Insert: {
          id?: string
          last_message?: string | null
          last_message_id?: string | null
          updated_at?: string
          user1_id: string
          user2_id: string
        }
        Update: {
          id?: string
          last_message?: string | null
          last_message_id?: string | null
          updated_at?: string
          user1_id?: string
          user2_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversations_last_message_id_fkey"
            columns: ["last_message_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
        ]
      }
      creator_profiles: {
        Row: {
          bio: string | null
          company_name: string | null
          created_at: string
          id: string
          profile_score: number | null
          projects_count: number | null
          user_id: string
          website_url: string | null
        }
        Insert: {
          bio?: string | null
          company_name?: string | null
          created_at?: string
          id?: string
          profile_score?: number | null
          projects_count?: number | null
          user_id: string
          website_url?: string | null
        }
        Update: {
          bio?: string | null
          company_name?: string | null
          created_at?: string
          id?: string
          profile_score?: number | null
          projects_count?: number | null
          user_id?: string
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "creator_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_profiles: {
        Row: {
          availability_status: string | null
          available_from: string | null
          bio: string | null
          created_at: string
          day_rate_visible: boolean | null
          expected_rate: string | null
          experience_level: string | null
          experience_years: number | null
          expertise: string[] | null
          id: string
          languages: string[] | null
          open_to_remote: boolean | null
          portfolio_link: string | null
          primary_role: string | null
          profile_score: number | null
          projects_count: number | null
          public_profile: string | null
          secondary_roles: string[] | null
          tags: string[] | null
          tools_known: string[] | null
          user_id: string
          willing_to_travel: boolean | null
        }
        Insert: {
          availability_status?: string | null
          available_from?: string | null
          bio?: string | null
          created_at?: string
          day_rate_visible?: boolean | null
          expected_rate?: string | null
          experience_level?: string | null
          experience_years?: number | null
          expertise?: string[] | null
          id?: string
          languages?: string[] | null
          open_to_remote?: boolean | null
          portfolio_link?: string | null
          primary_role?: string | null
          profile_score?: number | null
          projects_count?: number | null
          public_profile?: string | null
          secondary_roles?: string[] | null
          tags?: string[] | null
          tools_known?: string[] | null
          user_id: string
          willing_to_travel?: boolean | null
        }
        Update: {
          availability_status?: string | null
          available_from?: string | null
          bio?: string | null
          created_at?: string
          day_rate_visible?: boolean | null
          expected_rate?: string | null
          experience_level?: string | null
          experience_years?: number | null
          expertise?: string[] | null
          id?: string
          languages?: string[] | null
          open_to_remote?: boolean | null
          portfolio_link?: string | null
          primary_role?: string | null
          profile_score?: number | null
          projects_count?: number | null
          public_profile?: string | null
          secondary_roles?: string[] | null
          tags?: string[] | null
          tools_known?: string[] | null
          user_id?: string
          willing_to_travel?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "crew_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      follows: {
        Row: {
          created_at: string
          follower_id: string
          following_id: string
          id: string
        }
        Insert: {
          created_at?: string
          follower_id: string
          following_id: string
          id?: string
        }
        Update: {
          created_at?: string
          follower_id?: string
          following_id?: string
          id?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          id: string
          project_id: string | null
          read: boolean
          receiver_id: string
          sender_id: string
          sent_at: string
        }
        Insert: {
          content: string
          id?: string
          project_id?: string | null
          read?: boolean
          receiver_id: string
          sender_id: string
          sent_at?: string
        }
        Update: {
          content?: string
          id?: string
          project_id?: string | null
          read?: boolean
          receiver_id?: string
          sender_id?: string
          sent_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      portfolios: {
        Row: {
          created_at: string
          id: string
          thumbnail_url: string | null
          title: string
          type: string
          url: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          thumbnail_url?: string | null
          title: string
          type: string
          url: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          thumbnail_url?: string | null
          title?: string
          type?: string
          url?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "portfolios_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          bio: string | null
          city: string | null
          created_at: string
          email: string | null
          experience_years: number | null
          full_name: string | null
          id: string
          languages_spoken: string[] | null
          phone_number: string | null
          profile_picture_url: string | null
          profile_score: number | null
          profile_type: string | null
          projects_count: number | null
          user_type: Database["public"]["Enums"]["role"] | null
        }
        Insert: {
          bio?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          experience_years?: number | null
          full_name?: string | null
          id: string
          languages_spoken?: string[] | null
          phone_number?: string | null
          profile_picture_url?: string | null
          profile_score?: number | null
          profile_type?: string | null
          projects_count?: number | null
          user_type?: Database["public"]["Enums"]["role"] | null
        }
        Update: {
          bio?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          experience_years?: number | null
          full_name?: string | null
          id?: string
          languages_spoken?: string[] | null
          phone_number?: string | null
          profile_picture_url?: string | null
          profile_score?: number | null
          profile_type?: string | null
          projects_count?: number | null
          user_type?: Database["public"]["Enums"]["role"] | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          application_method: string
          budget_range: string
          city: string
          created_at: string
          description: string
          external_application_url: string | null
          id: string
          portfolio_link: string | null
          project_end_date: string | null
          project_start_date: string | null
          roles_needed: string[]
          title: string
          user_id: string
        }
        Insert: {
          application_method?: string
          budget_range: string
          city: string
          created_at?: string
          description: string
          external_application_url?: string | null
          id?: string
          portfolio_link?: string | null
          project_end_date?: string | null
          project_start_date?: string | null
          roles_needed: string[]
          title: string
          user_id: string
        }
        Update: {
          application_method?: string
          budget_range?: string
          city?: string
          created_at?: string
          description?: string
          external_application_url?: string | null
          id?: string
          portfolio_link?: string | null
          project_end_date?: string | null
          project_start_date?: string | null
          roles_needed?: string[]
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      ratings: {
        Row: {
          created_at: string
          given_by_user_id: string
          id: string
          project_id: string | null
          review_text: string | null
          score: number
          user_id: string
        }
        Insert: {
          created_at?: string
          given_by_user_id: string
          id?: string
          project_id?: string | null
          review_text?: string | null
          score: number
          user_id: string
        }
        Update: {
          created_at?: string
          given_by_user_id?: string
          id?: string
          project_id?: string | null
          review_text?: string | null
          score?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ratings_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_if_following: {
        Args: { follower: string; following: string }
        Returns: boolean
      }
      follow_user: {
        Args: { follower: string; following: string }
        Returns: undefined
      }
      unfollow_user: {
        Args: { follower: string; following: string }
        Returns: undefined
      }
    }
    Enums: {
      role: "crew" | "filmmaker"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      role: ["crew", "filmmaker"],
    },
  },
} as const
