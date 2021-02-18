using System;
using System.Collections.Generic;

#nullable disable

namespace WebAPI.Models
{
    public partial class Beverage
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public int Type { get; set; }
        public string Description { get; set; }
        public DateTime Dateadded { get; set; }
        public string Imagefilename { get; set; }

        public virtual BeverageType TypeNavigation { get; set; }
    }
}
