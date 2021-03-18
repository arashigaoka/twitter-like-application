CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.posts (
    content text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id text NOT NULL,
    deleted boolean DEFAULT false NOT NULL,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    updated_at timestamp with time zone DEFAULT now()
);
CREATE TABLE public.replys (
    comment text NOT NULL,
    user_id text NOT NULL,
    replied_user_id text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    post_id uuid DEFAULT public.gen_random_uuid() NOT NULL
);
CREATE TABLE public.users (
    id text NOT NULL,
    name text NOT NULL
);
ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.replys
    ADD CONSTRAINT replys_id_key UNIQUE (id);
ALTER TABLE ONLY public.replys
    ADD CONSTRAINT replys_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_posts_updated_at BEFORE UPDATE ON public.posts FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_posts_updated_at ON public.posts IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_replys_updated_at BEFORE UPDATE ON public.replys FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_replys_updated_at ON public.replys IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.replys
    ADD CONSTRAINT replys_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.replys
    ADD CONSTRAINT replys_replied_user_id_fkey FOREIGN KEY (replied_user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.replys
    ADD CONSTRAINT replys_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
