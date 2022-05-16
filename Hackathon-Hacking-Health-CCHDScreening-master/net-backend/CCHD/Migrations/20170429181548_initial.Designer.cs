using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using CCHD.Models;

namespace CCHD.Migrations
{
    [DbContext(typeof(CCHDContext))]
    [Migration("20170429181548_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CCHD.Models.CareFacility", b =>
                {
                    b.Property<int>("CareFacilityId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AddressOne")
                        .IsRequired();

                    b.Property<string>("AddressTwo");

                    b.Property<string>("City")
                        .IsRequired();

                    b.Property<int>("PhoneNumber");

                    b.Property<string>("PostalCode")
                        .IsRequired();

                    b.HasKey("CareFacilityId");

                    b.ToTable("CareFacilities");
                });

            modelBuilder.Entity("CCHD.Models.Patient", b =>
                {
                    b.Property<int>("PatientId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("BirthDateTime");

                    b.Property<string>("FirstName");

                    b.Property<int?>("HealthCard");

                    b.Property<string>("LastName");

                    b.Property<DateTime?>("ScreeningDateTime");

                    b.HasKey("PatientId");

                    b.ToTable("Patients");
                });

            modelBuilder.Entity("CCHD.Models.Screening", b =>
                {
                    b.Property<int>("ScreeningId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Iteration");

                    b.Property<DateTime>("ScreeningDateTime");

                    b.Property<int>("SpFoot");

                    b.Property<int>("SpHand");

                    b.HasKey("ScreeningId");

                    b.ToTable("Screenings");
                });
        }
    }
}
