toc.dat                                                                                             0000600 0004000 0002000 00000016237 14665336672 0014472 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP           
            |            adman_db    12.20    16.4     +           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         ,           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         -           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         .           1262    16402    adman_db    DATABASE     {   CREATE DATABASE adman_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE adman_db;
                postgres    false         �            1259    16406    BD_COMANDAS    TABLE     �  CREATE TABLE public."BD_COMANDAS" (
    id integer NOT NULL,
    "MAQ" text,
    "Supervisor" text,
    "COD" numeric(10,0) DEFAULT 0,
    "Fecha" timestamp with time zone,
    "Aprobado" text,
    "Tech1" text,
    "Tipo_de_mantenimiento" text,
    "Motivo" text,
    "TR" text,
    "Fecha_de_alta" timestamp with time zone,
    "Estado" text,
    "FechaCierre" timestamp with time zone,
    "Sector" text,
    "Hinicio" timestamp with time zone,
    "Hfin" timestamp with time zone,
    "Nsup" text,
    "Criticidad" text,
    "Fecha_aprobacion" timestamp with time zone,
    "SH1" boolean,
    "SH2" boolean,
    "SH3" boolean,
    "SH4" boolean,
    "SH5" boolean,
    "SH6" boolean,
    "SH7" boolean
);
 !   DROP TABLE public."BD_COMANDAS";
       public         heap    postgres    false         �            1259    16431 
   BD_MAQUINA    TABLE     ~   CREATE TABLE public."BD_MAQUINA" (
    "Id" integer NOT NULL,
    "CODMAQUINA" text,
    "MAQUINA" text,
    "Sector" text
);
     DROP TABLE public."BD_MAQUINA";
       public         heap    postgres    false         �            1259    16415    BD_PREVENTIVO    TABLE     r   CREATE TABLE public."BD_PREVENTIVO" (
    "Id" integer NOT NULL,
    "Maq" text,
    "Trabajo_preventivo" text
);
 #   DROP TABLE public."BD_PREVENTIVO";
       public         heap    postgres    false         �            1259    16423 	   BD_SECTOR    TABLE     b   CREATE TABLE public."BD_SECTOR" (
    "Id" integer NOT NULL,
    "Sector" text,
    "COD" text
);
    DROP TABLE public."BD_SECTOR";
       public         heap    postgres    false         �            1259    16439    BD_SUPERVISOR    TABLE     i   CREATE TABLE public."BD_SUPERVISOR" (
    "Id" integer NOT NULL,
    "NyAsup" text,
    "SECsup" text
);
 #   DROP TABLE public."BD_SUPERVISOR";
       public         heap    postgres    false         �            1259    16447    BD_TECNICOS    TABLE     j   CREATE TABLE public."BD_TECNICOS" (
    "Id" integer NOT NULL,
    "Tecnico" text,
    "Sector_1" text
);
 !   DROP TABLE public."BD_TECNICOS";
       public         heap    postgres    false         �            1259    16455    BD_TIPOS    TABLE     O   CREATE TABLE public."BD_TIPOS" (
    "Id" integer NOT NULL,
    "TIPO" text
);
    DROP TABLE public."BD_TIPOS";
       public         heap    postgres    false         "          0    16406    BD_COMANDAS 
   TABLE DATA           0  COPY public."BD_COMANDAS" (id, "MAQ", "Supervisor", "COD", "Fecha", "Aprobado", "Tech1", "Tipo_de_mantenimiento", "Motivo", "TR", "Fecha_de_alta", "Estado", "FechaCierre", "Sector", "Hinicio", "Hfin", "Nsup", "Criticidad", "Fecha_aprobacion", "SH1", "SH2", "SH3", "SH4", "SH5", "SH6", "SH7") FROM stdin;
    public          postgres    false    202       2850.dat %          0    16431 
   BD_MAQUINA 
   TABLE DATA           O   COPY public."BD_MAQUINA" ("Id", "CODMAQUINA", "MAQUINA", "Sector") FROM stdin;
    public          postgres    false    205       2853.dat #          0    16415    BD_PREVENTIVO 
   TABLE DATA           L   COPY public."BD_PREVENTIVO" ("Id", "Maq", "Trabajo_preventivo") FROM stdin;
    public          postgres    false    203       2851.dat $          0    16423 	   BD_SECTOR 
   TABLE DATA           <   COPY public."BD_SECTOR" ("Id", "Sector", "COD") FROM stdin;
    public          postgres    false    204       2852.dat &          0    16439    BD_SUPERVISOR 
   TABLE DATA           C   COPY public."BD_SUPERVISOR" ("Id", "NyAsup", "SECsup") FROM stdin;
    public          postgres    false    206       2854.dat '          0    16447    BD_TECNICOS 
   TABLE DATA           D   COPY public."BD_TECNICOS" ("Id", "Tecnico", "Sector_1") FROM stdin;
    public          postgres    false    207       2855.dat (          0    16455    BD_TIPOS 
   TABLE DATA           2   COPY public."BD_TIPOS" ("Id", "TIPO") FROM stdin;
    public          postgres    false    208       2856.dat �
           2606    16414    BD_COMANDAS BD_COMANDAS_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."BD_COMANDAS"
    ADD CONSTRAINT "BD_COMANDAS_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."BD_COMANDAS" DROP CONSTRAINT "BD_COMANDAS_pkey";
       public            postgres    false    202         �
           2606    16438    BD_MAQUINA BD_MAQUINA_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."BD_MAQUINA"
    ADD CONSTRAINT "BD_MAQUINA_pkey" PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public."BD_MAQUINA" DROP CONSTRAINT "BD_MAQUINA_pkey";
       public            postgres    false    205         �
           2606    16422     BD_PREVENTIVO BD_PREVENTIVO_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."BD_PREVENTIVO"
    ADD CONSTRAINT "BD_PREVENTIVO_pkey" PRIMARY KEY ("Id");
 N   ALTER TABLE ONLY public."BD_PREVENTIVO" DROP CONSTRAINT "BD_PREVENTIVO_pkey";
       public            postgres    false    203         �
           2606    16430    BD_SECTOR BD_SECTOR_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."BD_SECTOR"
    ADD CONSTRAINT "BD_SECTOR_pkey" PRIMARY KEY ("Id");
 F   ALTER TABLE ONLY public."BD_SECTOR" DROP CONSTRAINT "BD_SECTOR_pkey";
       public            postgres    false    204         �
           2606    16446     BD_SUPERVISOR BD_SUPERVISOR_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."BD_SUPERVISOR"
    ADD CONSTRAINT "BD_SUPERVISOR_pkey" PRIMARY KEY ("Id");
 N   ALTER TABLE ONLY public."BD_SUPERVISOR" DROP CONSTRAINT "BD_SUPERVISOR_pkey";
       public            postgres    false    206         �
           2606    16454    BD_TECNICOS BD_TECNICOS_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."BD_TECNICOS"
    ADD CONSTRAINT "BD_TECNICOS_pkey" PRIMARY KEY ("Id");
 J   ALTER TABLE ONLY public."BD_TECNICOS" DROP CONSTRAINT "BD_TECNICOS_pkey";
       public            postgres    false    207         �
           2606    16462    BD_TIPOS BD_TIPOS_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."BD_TIPOS"
    ADD CONSTRAINT "BD_TIPOS_pkey" PRIMARY KEY ("Id");
 D   ALTER TABLE ONLY public."BD_TIPOS" DROP CONSTRAINT "BD_TIPOS_pkey";
       public            postgres    false    208                                                                                                                                                                                                                                                                                                                                                                         2850.dat                                                                                            0000600 0004000 0002000 00000000005 14665336672 0014265 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           2853.dat                                                                                            0000600 0004000 0002000 00000000005 14665336672 0014270 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           2851.dat                                                                                            0000600 0004000 0002000 00000000005 14665336672 0014266 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           2852.dat                                                                                            0000600 0004000 0002000 00000000005 14665336672 0014267 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           2854.dat                                                                                            0000600 0004000 0002000 00000000005 14665336672 0014271 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           2855.dat                                                                                            0000600 0004000 0002000 00000000005 14665336672 0014272 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           2856.dat                                                                                            0000600 0004000 0002000 00000000005 14665336672 0014273 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           restore.sql                                                                                         0000600 0004000 0002000 00000015640 14665336672 0015414 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 12.20
-- Dumped by pg_dump version 16.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE adman_db;
--
-- Name: adman_db; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE adman_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';


ALTER DATABASE adman_db OWNER TO postgres;

\connect adman_db

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: BD_COMANDAS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BD_COMANDAS" (
    id integer NOT NULL,
    "MAQ" text,
    "Supervisor" text,
    "COD" numeric(10,0) DEFAULT 0,
    "Fecha" timestamp with time zone,
    "Aprobado" text,
    "Tech1" text,
    "Tipo_de_mantenimiento" text,
    "Motivo" text,
    "TR" text,
    "Fecha_de_alta" timestamp with time zone,
    "Estado" text,
    "FechaCierre" timestamp with time zone,
    "Sector" text,
    "Hinicio" timestamp with time zone,
    "Hfin" timestamp with time zone,
    "Nsup" text,
    "Criticidad" text,
    "Fecha_aprobacion" timestamp with time zone,
    "SH1" boolean,
    "SH2" boolean,
    "SH3" boolean,
    "SH4" boolean,
    "SH5" boolean,
    "SH6" boolean,
    "SH7" boolean
);


ALTER TABLE public."BD_COMANDAS" OWNER TO postgres;

--
-- Name: BD_MAQUINA; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BD_MAQUINA" (
    "Id" integer NOT NULL,
    "CODMAQUINA" text,
    "MAQUINA" text,
    "Sector" text
);


ALTER TABLE public."BD_MAQUINA" OWNER TO postgres;

--
-- Name: BD_PREVENTIVO; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BD_PREVENTIVO" (
    "Id" integer NOT NULL,
    "Maq" text,
    "Trabajo_preventivo" text
);


ALTER TABLE public."BD_PREVENTIVO" OWNER TO postgres;

--
-- Name: BD_SECTOR; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BD_SECTOR" (
    "Id" integer NOT NULL,
    "Sector" text,
    "COD" text
);


ALTER TABLE public."BD_SECTOR" OWNER TO postgres;

--
-- Name: BD_SUPERVISOR; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BD_SUPERVISOR" (
    "Id" integer NOT NULL,
    "NyAsup" text,
    "SECsup" text
);


ALTER TABLE public."BD_SUPERVISOR" OWNER TO postgres;

--
-- Name: BD_TECNICOS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BD_TECNICOS" (
    "Id" integer NOT NULL,
    "Tecnico" text,
    "Sector_1" text
);


ALTER TABLE public."BD_TECNICOS" OWNER TO postgres;

--
-- Name: BD_TIPOS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BD_TIPOS" (
    "Id" integer NOT NULL,
    "TIPO" text
);


ALTER TABLE public."BD_TIPOS" OWNER TO postgres;

--
-- Data for Name: BD_COMANDAS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BD_COMANDAS" (id, "MAQ", "Supervisor", "COD", "Fecha", "Aprobado", "Tech1", "Tipo_de_mantenimiento", "Motivo", "TR", "Fecha_de_alta", "Estado", "FechaCierre", "Sector", "Hinicio", "Hfin", "Nsup", "Criticidad", "Fecha_aprobacion", "SH1", "SH2", "SH3", "SH4", "SH5", "SH6", "SH7") FROM stdin;
\.
COPY public."BD_COMANDAS" (id, "MAQ", "Supervisor", "COD", "Fecha", "Aprobado", "Tech1", "Tipo_de_mantenimiento", "Motivo", "TR", "Fecha_de_alta", "Estado", "FechaCierre", "Sector", "Hinicio", "Hfin", "Nsup", "Criticidad", "Fecha_aprobacion", "SH1", "SH2", "SH3", "SH4", "SH5", "SH6", "SH7") FROM '$$PATH$$/2850.dat';

--
-- Data for Name: BD_MAQUINA; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BD_MAQUINA" ("Id", "CODMAQUINA", "MAQUINA", "Sector") FROM stdin;
\.
COPY public."BD_MAQUINA" ("Id", "CODMAQUINA", "MAQUINA", "Sector") FROM '$$PATH$$/2853.dat';

--
-- Data for Name: BD_PREVENTIVO; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BD_PREVENTIVO" ("Id", "Maq", "Trabajo_preventivo") FROM stdin;
\.
COPY public."BD_PREVENTIVO" ("Id", "Maq", "Trabajo_preventivo") FROM '$$PATH$$/2851.dat';

--
-- Data for Name: BD_SECTOR; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BD_SECTOR" ("Id", "Sector", "COD") FROM stdin;
\.
COPY public."BD_SECTOR" ("Id", "Sector", "COD") FROM '$$PATH$$/2852.dat';

--
-- Data for Name: BD_SUPERVISOR; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BD_SUPERVISOR" ("Id", "NyAsup", "SECsup") FROM stdin;
\.
COPY public."BD_SUPERVISOR" ("Id", "NyAsup", "SECsup") FROM '$$PATH$$/2854.dat';

--
-- Data for Name: BD_TECNICOS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BD_TECNICOS" ("Id", "Tecnico", "Sector_1") FROM stdin;
\.
COPY public."BD_TECNICOS" ("Id", "Tecnico", "Sector_1") FROM '$$PATH$$/2855.dat';

--
-- Data for Name: BD_TIPOS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BD_TIPOS" ("Id", "TIPO") FROM stdin;
\.
COPY public."BD_TIPOS" ("Id", "TIPO") FROM '$$PATH$$/2856.dat';

--
-- Name: BD_COMANDAS BD_COMANDAS_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BD_COMANDAS"
    ADD CONSTRAINT "BD_COMANDAS_pkey" PRIMARY KEY (id);


--
-- Name: BD_MAQUINA BD_MAQUINA_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BD_MAQUINA"
    ADD CONSTRAINT "BD_MAQUINA_pkey" PRIMARY KEY ("Id");


--
-- Name: BD_PREVENTIVO BD_PREVENTIVO_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BD_PREVENTIVO"
    ADD CONSTRAINT "BD_PREVENTIVO_pkey" PRIMARY KEY ("Id");


--
-- Name: BD_SECTOR BD_SECTOR_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BD_SECTOR"
    ADD CONSTRAINT "BD_SECTOR_pkey" PRIMARY KEY ("Id");


--
-- Name: BD_SUPERVISOR BD_SUPERVISOR_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BD_SUPERVISOR"
    ADD CONSTRAINT "BD_SUPERVISOR_pkey" PRIMARY KEY ("Id");


--
-- Name: BD_TECNICOS BD_TECNICOS_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BD_TECNICOS"
    ADD CONSTRAINT "BD_TECNICOS_pkey" PRIMARY KEY ("Id");


--
-- Name: BD_TIPOS BD_TIPOS_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BD_TIPOS"
    ADD CONSTRAINT "BD_TIPOS_pkey" PRIMARY KEY ("Id");


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                