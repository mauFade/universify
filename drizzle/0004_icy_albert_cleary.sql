CREATE TABLE "unvsfy_sync_logs" (
	"id" varchar(32) PRIMARY KEY NOT NULL,
	"last_sync" timestamp NOT NULL DEFAULT NOW()
);
