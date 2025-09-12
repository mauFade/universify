CREATE TABLE "unvsfy_crypto_prices" (
	"id" varchar(32) PRIMARY KEY NOT NULL,
	"symbol" varchar(10) NOT NULL,
	"price_usd" numeric(18, 8) NOT NULL,
	"created_at" timestamp DEFAULT NOW(),
	"timestamp" timestamp NOT NULL,
	CONSTRAINT "symbol_timestamp_unique" UNIQUE("symbol","timestamp")
);
