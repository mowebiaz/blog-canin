import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "media_sizes_xs_sizes_xs_filename_idx";
  DROP INDEX "media_sizes_sm_sizes_sm_filename_idx";
  DROP INDEX "media_sizes_md_sizes_md_filename_idx";
  DROP INDEX "media_sizes_lg_sizes_lg_filename_idx";
  DROP INDEX "media_sizes_xl_sizes_xl_filename_idx";
  ALTER TABLE "media" DROP COLUMN "sizes_xs_url";
  ALTER TABLE "media" DROP COLUMN "sizes_xs_width";
  ALTER TABLE "media" DROP COLUMN "sizes_xs_height";
  ALTER TABLE "media" DROP COLUMN "sizes_xs_mime_type";
  ALTER TABLE "media" DROP COLUMN "sizes_xs_filesize";
  ALTER TABLE "media" DROP COLUMN "sizes_xs_filename";
  ALTER TABLE "media" DROP COLUMN "sizes_sm_url";
  ALTER TABLE "media" DROP COLUMN "sizes_sm_width";
  ALTER TABLE "media" DROP COLUMN "sizes_sm_height";
  ALTER TABLE "media" DROP COLUMN "sizes_sm_mime_type";
  ALTER TABLE "media" DROP COLUMN "sizes_sm_filesize";
  ALTER TABLE "media" DROP COLUMN "sizes_sm_filename";
  ALTER TABLE "media" DROP COLUMN "sizes_md_url";
  ALTER TABLE "media" DROP COLUMN "sizes_md_width";
  ALTER TABLE "media" DROP COLUMN "sizes_md_height";
  ALTER TABLE "media" DROP COLUMN "sizes_md_mime_type";
  ALTER TABLE "media" DROP COLUMN "sizes_md_filesize";
  ALTER TABLE "media" DROP COLUMN "sizes_md_filename";
  ALTER TABLE "media" DROP COLUMN "sizes_lg_url";
  ALTER TABLE "media" DROP COLUMN "sizes_lg_width";
  ALTER TABLE "media" DROP COLUMN "sizes_lg_height";
  ALTER TABLE "media" DROP COLUMN "sizes_lg_mime_type";
  ALTER TABLE "media" DROP COLUMN "sizes_lg_filesize";
  ALTER TABLE "media" DROP COLUMN "sizes_lg_filename";
  ALTER TABLE "media" DROP COLUMN "sizes_xl_url";
  ALTER TABLE "media" DROP COLUMN "sizes_xl_width";
  ALTER TABLE "media" DROP COLUMN "sizes_xl_height";
  ALTER TABLE "media" DROP COLUMN "sizes_xl_mime_type";
  ALTER TABLE "media" DROP COLUMN "sizes_xl_filesize";
  ALTER TABLE "media" DROP COLUMN "sizes_xl_filename";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "media" ADD COLUMN "sizes_xs_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_xs_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_xs_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_xs_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_xs_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_xs_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_sm_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_sm_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_sm_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_sm_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_sm_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_sm_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_md_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_md_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_md_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_md_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_md_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_md_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_lg_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_lg_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_lg_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_lg_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_lg_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_lg_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_xl_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_xl_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_xl_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_xl_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_xl_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_xl_filename" varchar;
  CREATE INDEX "media_sizes_xs_sizes_xs_filename_idx" ON "media" USING btree ("sizes_xs_filename");
  CREATE INDEX "media_sizes_sm_sizes_sm_filename_idx" ON "media" USING btree ("sizes_sm_filename");
  CREATE INDEX "media_sizes_md_sizes_md_filename_idx" ON "media" USING btree ("sizes_md_filename");
  CREATE INDEX "media_sizes_lg_sizes_lg_filename_idx" ON "media" USING btree ("sizes_lg_filename");
  CREATE INDEX "media_sizes_xl_sizes_xl_filename_idx" ON "media" USING btree ("sizes_xl_filename");`)
}
