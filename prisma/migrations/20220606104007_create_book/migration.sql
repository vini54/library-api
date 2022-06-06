-- CreateTable
CREATE TABLE "book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "authors" JSONB NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("id")
);
