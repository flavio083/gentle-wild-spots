DROP POLICY IF EXISTS "Authenticated users can manage attractions" ON public.attractions;
DROP POLICY IF EXISTS "Anyone can view attractions" ON public.attractions;

CREATE POLICY "Anyone can view attractions"
  ON public.attractions FOR SELECT TO anon, authenticated
  USING (true);

CREATE POLICY "Admins can insert attractions"
  ON public.attractions FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can update attractions"
  ON public.attractions FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can delete attractions"
  ON public.attractions FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role));

REVOKE INSERT, UPDATE, DELETE ON public.attractions FROM anon;