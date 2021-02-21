using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.DTO
{
    public class BeverageDTO
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public int TypeId { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public string Dateadded { get; set; }
        public string Imagefilename { get; set; }

    }
}
