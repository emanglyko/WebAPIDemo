using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

#nullable disable

namespace WebAPI.Models
{
    public partial class NeptuneContext : DbContext
    {
        public NeptuneContext()
        {
        }

        public NeptuneContext(DbContextOptions<NeptuneContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Beverage> Beverages { get; set; }
        public virtual DbSet<BeverageType> BeverageTypes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Beverage>(entity =>
            {
                entity.ToTable("beverage");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Dateadded)
                    .HasColumnType("datetime")
                    .HasColumnName("dateadded");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.Imagefilename)
                    .HasMaxLength(500)
                    .IsUnicode(false)
                    .HasColumnName("imagefilename");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Type).HasColumnName("type");

                entity.HasOne(d => d.TypeNavigation)
                    .WithMany(p => p.Beverages)
                    .HasForeignKey(d => d.Type)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_beverage_beveragetype");
            });

            modelBuilder.Entity<BeverageType>(entity =>
            {
                entity.ToTable("beverage_type");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("type");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
