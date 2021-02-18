using System;
using System.Collections.Generic;

#nullable disable

namespace WebAPI.Models
{
    public partial class BeverageType
    {
        public BeverageType()
        {
            Beverages = new HashSet<Beverage>();
        }

        public int Id { get; set; }
        public string Type { get; set; }

        public virtual ICollection<Beverage> Beverages { get; set; }
    }
}
