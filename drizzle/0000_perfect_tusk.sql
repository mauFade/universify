CREATE TABLE "unvsfy_users" (
	"id" varchar(32) PRIMARY KEY NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"clerk_user_id" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"avatar" varchar(255),
	"created_at" timestamp DEFAULT NOW(),
	"updated_at" timestamp,
	CONSTRAINT "unvsfy_users_email_unique" UNIQUE("email")
);
