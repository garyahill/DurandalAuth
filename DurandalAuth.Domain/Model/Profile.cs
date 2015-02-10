using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace DurandalAuth.Domain.Model {
    
    public class Profile {

        //by convention entity framework or breeze should know this is the key (matches "profile")
        [DataMember]
        public int ProfileId { get; set; }

        [DataMember]
        public string UserId { get; set; }

        [DataMember] //lets breeze know to be aware of this property
        [StringLength(20, MinimumLength=2)]
        public string FirstName { get; set; }
       
        [DataMember]
        [StringLength(20, MinimumLength = 2)]
        public string LastName { get; set; }

        [DataMember]
        [StringLength(100)]
        public string Bio { get; set; }
    }
}
