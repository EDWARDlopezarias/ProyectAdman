--
-- PostgreSQL database cluster dump
--

-- Started on 2024-09-02 10:45:09

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md5903faecf0cb0dd35e5acdfd9856599f1';

--
-- User Configurations
--






--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.20
-- Dumped by pg_dump version 16.4

-- Started on 2024-09-02 10:45:09

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

--
-- TOC entry 6 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 2812 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2024-09-02 10:45:09

--
-- PostgreSQL database dump complete
--

--
-- Database "adman_db" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.20
-- Dumped by pg_dump version 16.4

-- Started on 2024-09-02 10:45:09

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

--
-- TOC entry 2869 (class 1262 OID 16402)
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

--
-- TOC entry 6 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16406)
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
-- TOC entry 205 (class 1259 OID 16431)
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
-- TOC entry 203 (class 1259 OID 16415)
-- Name: BD_PREVENTIVO; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BD_PREVENTIVO" (
    "Id" integer NOT NULL,
    "Maq" text,
    "Trabajo_preventivo" text
);


ALTER TABLE public."BD_PREVENTIVO" OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16423)
-- Name: BD_SECTOR; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BD_SECTOR" (
    "Id" integer NOT NULL,
    "Sector" text,
    "COD" text
);


ALTER TABLE public."BD_SECTOR" OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16439)
-- Name: BD_SUPERVISOR; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BD_SUPERVISOR" (
    "Id" integer NOT NULL,
    "NyAsup" text,
    "SECsup" text
);


ALTER TABLE public."BD_SUPERVISOR" OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16447)
-- Name: BD_TECNICOS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BD_TECNICOS" (
    "Id" integer NOT NULL,
    "Tecnico" text,
    "Sector_1" text
);


ALTER TABLE public."BD_TECNICOS" OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16455)
-- Name: BD_TIPOS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BD_TIPOS" (
    "Id" integer NOT NULL,
    "TIPO" text
);


ALTER TABLE public."BD_TIPOS" OWNER TO postgres;

--
-- TOC entry 2857 (class 0 OID 16406)
-- Dependencies: 202
-- Data for Name: BD_COMANDAS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BD_COMANDAS" (id, "MAQ", "Supervisor", "COD", "Fecha", "Aprobado", "Tech1", "Tipo_de_mantenimiento", "Motivo", "TR", "Fecha_de_alta", "Estado", "FechaCierre", "Sector", "Hinicio", "Hfin", "Nsup", "Criticidad", "Fecha_aprobacion", "SH1", "SH2", "SH3", "SH4", "SH5", "SH6", "SH7") FROM stdin;
\.


--
-- TOC entry 2860 (class 0 OID 16431)
-- Dependencies: 205
-- Data for Name: BD_MAQUINA; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BD_MAQUINA" ("Id", "CODMAQUINA", "MAQUINA", "Sector") FROM stdin;
\.


--
-- TOC entry 2858 (class 0 OID 16415)
-- Dependencies: 203
-- Data for Name: BD_PREVENTIVO; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BD_PREVENTIVO" ("Id", "Maq", "Trabajo_preventivo") FROM stdin;
\.


--
-- TOC entry 2859 (class 0 OID 16423)
-- Dependencies: 204
-- Data for Name: BD_SECTOR; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BD_SECTOR" ("Id", "Sector", "COD") FROM stdin;
\.


--
-- TOC entry 2861 (class 0 OID 16439)
-- Dependencies: 206
-- Data for Name: BD_SUPERVISOR; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BD_SUPERVISOR" ("Id", "NyAsup", "SECsup") FROM stdin;
\.


--
-- TOC entry 2862 (class 0 OID 16447)
-- Dependencies: 207
-- Data for Name: BD_TECNICOS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BD_TECNICOS" ("Id", "Tecnico", "Sector_1") FROM stdin;
\.


--
-- TOC entry 2863 (class 0 OID 16455)
-- Dependencies: 208
-- Data for Name: BD_TIPOS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BD_TIPOS" ("Id", "TIPO") FROM stdin;
\.


--
-- TOC entry 2718 (class 2606 OID 16414)
-- Name: BD_COMANDAS BD_COMANDAS_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BD_COMANDAS"
    ADD CONSTRAINT "BD_COMANDAS_pkey" PRIMARY KEY (id);


--
-- TOC entry 2724 (class 2606 OID 16438)
-- Name: BD_MAQUINA BD_MAQUINA_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BD_MAQUINA"
    ADD CONSTRAINT "BD_MAQUINA_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 2720 (class 2606 OID 16422)
-- Name: BD_PREVENTIVO BD_PREVENTIVO_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BD_PREVENTIVO"
    ADD CONSTRAINT "BD_PREVENTIVO_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 2722 (class 2606 OID 16430)
-- Name: BD_SECTOR BD_SECTOR_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BD_SECTOR"
    ADD CONSTRAINT "BD_SECTOR_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 2726 (class 2606 OID 16446)
-- Name: BD_SUPERVISOR BD_SUPERVISOR_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BD_SUPERVISOR"
    ADD CONSTRAINT "BD_SUPERVISOR_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 2728 (class 2606 OID 16454)
-- Name: BD_TECNICOS BD_TECNICOS_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BD_TECNICOS"
    ADD CONSTRAINT "BD_TECNICOS_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 2730 (class 2606 OID 16462)
-- Name: BD_TIPOS BD_TIPOS_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BD_TIPOS"
    ADD CONSTRAINT "BD_TIPOS_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 2870 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2024-09-02 10:45:09

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.20
-- Dumped by pg_dump version 16.4

-- Started on 2024-09-02 10:45:09

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

--
-- TOC entry 7 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 1 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 2823 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 16393)
-- Name: BD_COMANDAS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BD_COMANDAS" (
    id integer NOT NULL,
    "MAQ" text,
    "Supervisor" text,
    "COD" numeric(10,0) DEFAULT 0,
    "Fecha" timestamp with time zone NOT NULL,
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
-- TOC entry 2816 (class 0 OID 16393)
-- Dependencies: 203
-- Data for Name: BD_COMANDAS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BD_COMANDAS" (id, "MAQ", "Supervisor", "COD", "Fecha", "Aprobado", "Tech1", "Tipo_de_mantenimiento", "Motivo", "TR", "Fecha_de_alta", "Estado", "FechaCierre", "Sector", "Hinicio", "Hfin", "Nsup", "Criticidad", "Fecha_aprobacion", "SH1", "SH2", "SH3", "SH4", "SH5", "SH6", "SH7") FROM stdin;
\.


--
-- TOC entry 2689 (class 2606 OID 16401)
-- Name: BD_COMANDAS BD_COMANDAS_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BD_COMANDAS"
    ADD CONSTRAINT "BD_COMANDAS_pkey" PRIMARY KEY (id);


--
-- TOC entry 2822 (class 0 OID 0)
-- Dependencies: 7
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2024-09-02 10:45:09

--
-- PostgreSQL database dump complete
--

-- Completed on 2024-09-02 10:45:09

--
-- PostgreSQL database cluster dump complete
--

