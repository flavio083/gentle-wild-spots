import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export type AppRole = "admin" | "moderator" | "user";

/**
 * Lê os papéis do usuário autenticado.
 * A autorização real é garantida pelo banco (RLS + has_role);
 * este hook serve apenas para adaptar a interface.
 */
export const useUserRole = () => {
  const { user, loading: authLoading } = useAuth();
  const [roles, setRoles] = useState<AppRole[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setRoles([]);
      setLoading(false);
      return;
    }

    let active = true;
    setLoading(true);

    supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .then(({ data }) => {
        if (!active) return;
        setRoles((data ?? []).map((row) => row.role as AppRole));
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [user, authLoading]);

  return {
    roles,
    isAdmin: roles.includes("admin"),
    loading: authLoading || loading,
  };
};