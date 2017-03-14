namespace Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddSomeFieldsForHeroTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Heroes", "Email", c => c.String());
            AddColumn("dbo.Heroes", "Password", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Heroes", "Password");
            DropColumn("dbo.Heroes", "Email");
        }
    }
}
