// const getUiSchema = () => {
//
//   let order = [
//     {
//       first: { md: 5 },
//       mi: { md: 2 },
//       last: { md: 5 }
//     },
//     {
//       suffix: { md: 2 },
//       ssn: { md: 5 },
//       dob: { md: 5 }
//     }
//   ]
//
//   return  {
//     personal: {
//       "ui:field": "grid",
//       "ui:options": {
//         "order": order
//       }
//     }
//   }
// }

const uiSchema = {
  "Sending Application": {
    "ui:widget": "showWidget"
  },
  Provider: {
    "ui:options":  {
      addable: false,
      removable: false,
      orderable: false
    },
    items: {
      "ui:field": "grid",
      "ui:options": {
        "order": [
          {
            ID: { md: 3 },
            Name: { md: 3 },
            Phone: { md: 3 },
            Fax: { md: 3 },
          },
          {
            Email: { md: 3 },
            Facility: { md: 3 },
            Address: { md: 3 },
            Country: { md: 3 },
          }
        ]
      },
      ID: {
        "ui:field": "grid",
        "ui:options": {
          "order": [
            {
              value: { md: 6 },
              type: { md: 6 }
            }
          ]
        },
        value: {
          "ui:widget": "showWidget"
        },
        type: {
          "ui:widget": "showWidget"
        }
      },
      Name: {
        "ui:widget": "showWidget"
      },
      Phone: {
        "ui:widget": "showWidget"
      },
      Fax: {
        "ui:widget": "showWidget"
      },
      Email: {
        "ui:widget": "showWidget"
      },
      Facility: {
        "ui:widget": "showWidget"
      },
      Address: {
        "ui:widget": "showWidget"
      },
      Country: {
        "ui:widget": "showWidget"
      }
    }
  },
  Patient: {
    "ui:field": "grid",
    "ui:options": {
      "order": [
        {
          ID: { md: 3 },
          Name: { md: 3 },
          Parents_Guardians: { md: 3 },
          Street_Address: { md: 3 }
        }, {
          Birth_Date: { md: 3 },
          Sex: { md: 3 },
          PatientClass: { md: 3 },
          Race: { md: 3 }
        }, {
          Ethnicity: { md: 3 },
          Preferred_Language: { md: 3 },
          Occupation: { md: 3 },
          Pregnant: { md: 3 },
        }, {
          Travel_History: { md: 3 },
          Insurance_Type: { md: 3 },
          Immunization_History: { md: 3 },
          Visit_DateTime: { md: 3 }
        }, {
          Admission_DateTime: { md: 3 },
          Date_of_Onset: { md: 3 },
          Symptoms: { md: 3 },
          Lab_Order_Code: { md: 3 }
        }
        // { TODO ask Michael to put underscores on these two properties
        //   "Place Order Code": { md: 3 },
        //   Diagnosis: { md: 3 },
        //   "Medication Provided": { md: 3 },
        //   Death_Date: { md: 3 }
        // }, {
        //   Date_Discharged: { md: 3 },
        //   Trigger_Code: { md: 3 },
        //   Lab_Tests_Performed: { md: 3 }
        // }
      ]
    },
    ID: {
      "ui:options":  {
        addable: false,
        removable: false,
        orderable: false
      },
      items: {
        value: {
          "ui:widget": "showWidget"
        },
        type: {
          "ui:widget": "showWidget"
        }
      }
    },
    Name: {
      given: {
        "ui:widget": "showWidget"
      },
      family: {
        "ui:widget": "showWidget"
      }
    },
    Parents_Guardians: {
      "ui:options":  {
        addable: false,
        removable: false,
        orderable: false
      },
      items: {
        Name: {
          given: {
            "ui:widget": "showWidget"
          },
          family: {
            "ui:widget": "showWidget"
          }
        },
        Phone: {
          "ui:widget": "showWidget"
        },
        Email: {
          "ui:widget": "showWidget"
        }
      }
    },
    Street_Address: {
      "ui:widget": "showWidget"
    },
    Birth_Date: {
      "ui:widget": "showWidget"
    },
    Sex: {
      "ui:widget": "showWidget"
    },
    PatientClass: {
      "ui:widget": "showWidget"
    },
    Race: {
      Code: {
        "ui:widget": "showWidget"
      },
      System: {
        "ui:widget": "showWidget"
      },
      Display: {
        "ui:widget": "showWidget"
      }
    },
    Ethnicity: {
      Code: {
        "ui:widget": "showWidget"
      },
      System: {
        "ui:widget": "showWidget"
      },
      Display: {
        "ui:widget": "showWidget"
      }
    },
    Preferred_Language: {
      Code: {
        "ui:widget": "showWidget"
      },
      System: {
        "ui:widget": "showWidget"
      },
      Display: {
        "ui:widget": "showWidget"
      }
    },
    Occupation: {
      "ui:widget": "showWidget"
    },
    Pregnant: {

    },
    Travel_History: {
      "ui:options":  {
        addable: false,
        removable: false,
        orderable: false
      },
      items: {

      }
    },
    Insurance_Type: {
      Code: {
        "ui:widget": "showWidget"
      },
      System: {
        "ui:widget": "showWidget"
      },
      Display: {
        "ui:widget": "showWidget"
      }
    },
    Immunization_History: {
      "ui:options":  {
        addable: false,
        removable: false,
        orderable: false
      },
      items: {
        Code: {
          "ui:widget": "showWidget"
        },
        System: {
          "ui:widget": "showWidget"
        },
        Date: {
          "ui:widget": "showWidget"
        }
      }
    },
    Visit_DateTime: {
      "ui:widget": "showWidget"
    },
    Admission_DateTime: {
      "ui:widget": "showWidget"
    },
    Date_of_Onset: {
      "ui:widget": "showWidget"
    },
    Symptoms: {
      "ui:options":  {
        addable: false,
        removable: false,
        orderable: false
      },
      items: {
        Code: {
          "ui:widget": "showWidget"
        },
        System: {
          "ui:widget": "showWidget"
        },
        Display: {
          "ui:widget": "showWidget"
        }
      }
    },
    Lab_Order_Code: {
      "ui:options":  {
        addable: false,
        removable: false,
        orderable: false
      },
      items: {
        Code: {
          "ui:widget": "showWidget"
        },
        System: {
          "ui:widget": "showWidget"
        },
        Display: {
          "ui:widget": "showWidget"
        },
        Laboratory_Results: {
          "ui:options":  {
            addable: false,
            removable: false,
            orderable: false
          },
          items: {
            Value: {
              "ui:widget": "showWidget"
            },
            Unit: {
              Code: {
                "ui:widget": "showWidget"
              },
              System: {
                "ui:widget": "showWidget"
              },
              Display: {
                "ui:widget": "showWidget"
              }
            },
            Code: {
              "ui:widget": "showWidget"
            },
            System: {
              "ui:widget": "showWidget"
            },
            Display: {
              "ui:widget": "showWidget"
            }
          }
        }
      }
    },
    "Placer Order Code": {
      "ui:widget": "showWidget"
    },
    Diagnosis: {
      Code: {
        "ui:widget": "showWidget"
      },
      System: {
        "ui:widget": "showWidget"
      },
      Display: {
        "ui:widget": "showWidget"
      },
      Date: {
        "ui:widget": "showWidget"
      }
    },
    "Medication Provided": {
      "ui:options":  {
        addable: false,
        removable: false,
        orderable: false
      },
      items: {
        Code: {
          "ui:widget": "showWidget"
        },
        System: {
          "ui:widget": "showWidget"
        },
        Display: {
          "ui:widget": "showWidget"
        },
        Dosage: {
          Value: {
            "ui:widget": "showWidget"
          },
          Unit: {
            Code: {
              "ui:widget": "showWidget"
            },
            System: {
              "ui:widget": "showWidget"
            },
            Display: {
              "ui:widget": "showWidget"
            }
          }
        },
        Date: {
          "ui:widget": "showWidget"
        },
        Frequency: {
          "ui:widget": "showWidget"
        }
      }
    },
    Death_Date: {
      "ui:widget": "showWidget"
    },
    Date_Discharged: {
      "ui:widget": "showWidget"
    },
    Trigger_Code: {
      "ui:options":  {
        addable: false,
        removable: false,
        orderable: false
      },
      items: {
        Code: {
          "ui:widget": "showWidget"
        },
        System: {
          "ui:widget": "showWidget"
        },
        Display: {
          "ui:widget": "showWidget"
        }
      }
    },
    Lab_Tests_Performed: {
      "ui:options":  {
        addable: false,
        removable: false,
        orderable: false
      },
      items: {
        Value: {
          "ui:widget": "showWidget"
        },
        ResultStatus: {

        }
      }
    }
  },
  Facility: {
    "ui:field": "grid",
    "ui:options": {
      "order": [
        {
          ID: { md: 3 },
          Name: { md: 3 },
          Phone: { md: 3 },
          Address: { md: 3 }
        },
        {
          Fax: { md: 3 },
          Hospital_Unit: { md: 3 }
        }
      ]
    },
    ID: {
      "ui:widget": "showWidget"
    },
    Name: {
      "ui:widget": "showWidget"
    },
    Phone: {
      "ui:widget": "showWidget"
    },
    Address: {
      "ui:widget": "showWidget"
    },
    Fax: {
      "ui:widget": "showWidget"
    },
    Hospital_Unit: {
      "ui:widget": "showWidget"
    }
  }

}

export { uiSchema };
