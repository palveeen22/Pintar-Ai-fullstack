-- CreateTable
CREATE TABLE "Researcher" (
    "id" SERIAL NOT NULL,
    "isPremium" BOOLEAN,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "jabatan_akademik" TEXT NOT NULL,
    "portofolio" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Researcher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investor" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "industry_type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Investor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "researcherId" INTEGER,
    "investorId" INTEGER,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "project_name" TEXT NOT NULL,
    "description_project" TEXT NOT NULL,
    "project_image" TEXT NOT NULL,
    "project_status" BOOLEAN NOT NULL,
    "starting_date" TIMESTAMP(3) NOT NULL,
    "expected_finish_date" TIMESTAMP(3) NOT NULL,
    "project_budget" INTEGER NOT NULL,
    "keywords" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "researcherId" INTEGER,
    "investorId" INTEGER,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "investorId" INTEGER,
    "status" BOOLEAN NOT NULL,
    "invoice" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jurnal" (
    "id" SERIAL NOT NULL,
    "abstract" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "keywords" TEXT NOT NULL,
    "journal_file" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "portofolio_id" INTEGER,
    "researcherId" INTEGER,

    CONSTRAINT "Jurnal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat_Room" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "researcherId" INTEGER,
    "investorId" INTEGER,

    CONSTRAINT "Chat_Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_JurnalToResearcher" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Researcher_email_key" ON "Researcher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Investor_email_key" ON "Investor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_JurnalToResearcher_AB_unique" ON "_JurnalToResearcher"("A", "B");

-- CreateIndex
CREATE INDEX "_JurnalToResearcher_B_index" ON "_JurnalToResearcher"("B");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_researcherId_fkey" FOREIGN KEY ("researcherId") REFERENCES "Researcher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_investorId_fkey" FOREIGN KEY ("investorId") REFERENCES "Investor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- -- AddForeignKey
-- ALTER TABLE "Project" ADD CONSTRAINT "Project_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;



-- AddForeignKey
-- ALTER TABLE "Project" ADD CONSTRAINT "Project_researcherId_fkey" FOREIGN KEY ("researcherId") REFERENCES "Researcher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_investorId_fkey" FOREIGN KEY ("investorId") REFERENCES "Investor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_investorId_fkey" FOREIGN KEY ("investorId") REFERENCES "Investor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat_Room" ADD CONSTRAINT "Chat_Room_researcherId_fkey" FOREIGN KEY ("researcherId") REFERENCES "Researcher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat_Room" ADD CONSTRAINT "Chat_Room_investorId_fkey" FOREIGN KEY ("investorId") REFERENCES "Investor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JurnalToResearcher" ADD CONSTRAINT "_JurnalToResearcher_A_fkey" FOREIGN KEY ("A") REFERENCES "Jurnal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JurnalToResearcher" ADD CONSTRAINT "_JurnalToResearcher_B_fkey" FOREIGN KEY ("B") REFERENCES "Researcher"("id") ON DELETE CASCADE ON UPDATE CASCADE;
