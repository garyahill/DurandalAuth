using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace DurandalAuth.Domain.Model {
    
    public class Profile {

        //by convention entioty framework or breeze should know this is the key (matches "profile")
        [DataMember]
        public int ProfileId { get; set; }  

        [DataMember] //lets breeze know to be aware of this property
        public string FirstName { get; set; }
        [DataMember]
        public string LastName { get; set; }
    }
}
