import { v4 as uuidv4 } from 'uuid';

export default class CompositionFactory {

  getMADRS() {
    return `
    {
      "_type": "COMPOSITION",
      "archetype_node_id": "openEHR-EHR-COMPOSITION.encounter.v1",
      "name": {
        "value": "MADRS"
      },
      "uid": {
        "_type": "OBJECT_VERSION_ID",
        "value": "${uuidv4()}::ehr_craft::1"
      },
      "archetype_details": {
        "archetype_id": {
          "value": "openEHR-EHR-COMPOSITION.encounter.v1"
        },
        "template_id": {
          "value": "MADRS_2_0_0"
        },
        "rm_version": "1.0.4"
      },
      "language": {
        "terminology_id": {
          "value": "openehr"
        },
        "code_string": "nb"
      },
      "territory": {
        "terminology_id": {
          "value": "openehr"
        },
        "code_string": "NO"
      },
      "category": {
        "defining_code": {
          "terminology_id": {
            "value": "openehr"
          },
          "code_string": "433"
        }
      },
      "composer": {
        "_type": "PARTY_IDENTIFIED",
        "name": "default"
      },
      "context": {
        "start_time": {
          "value": "${new Date().toISOString()}"
        },
        "setting": {
          "value": "secondary medical care",
          "defining_code": {
            "terminology_id": {
              "value": "openehr"
            },
            "code_string": "232"
          }
        },
        "other_context": {
          "_type": "ITEM_TREE",
          "archetype_node_id": "at0001",
          "name": {
            "value": "Tree"
          },
          "items": [
            {
              "_type": "CLUSTER",
              "archetype_node_id": "openEHR-EHR-CLUSTER.document_information_dips.v1",
              "name": {
                "value": "Dokumentopplysninger"
              },
              "archetype_details": {
                "archetype_id": {
                  "value": "openEHR-EHR-CLUSTER.document_information_dips.v1"
                },
                "template_id": {
                  "value": "MADRS_2_0_0"
                },
                "rm_version": "1.0.4"
              },
              "items": [
                {
                  "_type": "ELEMENT",
                  "archetype_node_id": "at0002",
                  "name": {
                    "value": "Behandlende avdeling"
                  },
                  "value": {
                    "_type": "DV_TEXT",
                    "value": "Sample data (AVDELING)"
                  }
                }
              ]
            }
          ]
        }
      },
      "content": [
        {
          "_type": "OBSERVATION",
          "archetype_node_id": "openEHR-EHR-OBSERVATION.madrs_no.v1",
          "name": {
            "value": "MADRS"
          },
          "archetype_details": {
            "archetype_id": {
              "value": "openEHR-EHR-OBSERVATION.madrs_no.v1"
            },
            "template_id": {
              "value": "MADRS_2_0_0"
            },
            "rm_version": "1.0.4"
          },
          "language": {
            "terminology_id": {
              "value": "ISO_639-1"
            },
            "code_string": "nb"
          },
          "encoding": {
            "terminology_id": {
              "value": "IANA"
            },
            "code_string": "UTF-8"
          },
          "subject": {
            "_type": "PARTY_SELF"
          },
          "data": {
            "archetype_node_id": "at0001",
            "name": {
              "value": "Event Series"
            },
            "origin": {
              "value": "2022-02-20T00:55:27Z"
            },
            "events": [
              {
                "_type": "POINT_EVENT",
                "archetype_node_id": "at0002",
                "name": {
                  "value": "Uspesifisert hendelse"
                },
                "time": {
                  "value": "2022-02-20T00:55:27Z"
                },
                "data": {
                  "_type": "ITEM_TREE",
                  "archetype_node_id": "at0003",
                  "name": {
                    "value": "Tree"
                  },
                  "items": [
                    {
                      "_type": "ELEMENT",
                      "archetype_node_id": "at0084",
                      "name": {
                        "value": "MADRS skår"
                      },
                      "value": {
                        "_type": "DV_COUNT",
                        "magnitude": 0
                      }
                    },
                    {
                      "_type": "ELEMENT",
                      "archetype_node_id": "at0085",
                      "name": {
                        "value": "Kommentar"
                      },
                      "value": {
                        "_type": "DV_TEXT",
                        "value": "Ikke deprimert"
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
    `;
  }
  
  
  getComposition() {
      return `
      {
        "_type": "COMPOSITION",
        "archetype_node_id": "openEHR-EHR-COMPOSITION.encounter.v1",
        "name": {
          "value": "Encounter"
        },
        "uid": {
          "_type": "OBJECT_VERSION_ID",
          "value": "${uuidv4()}::ehr_craft::1"
        },
        "archetype_details": {
          "archetype_id": {
            "value": "openEHR-EHR-COMPOSITION.encounter.v1"
          },
          "template_id": {
            "value": "Vekt"
          },
          "rm_version": "1.0.4"
        },
        "language": {
          "terminology_id": {
            "value": "openehr"
          },
          "code_string": "nb"
        },
        "territory": {
          "terminology_id": {
            "value": "openehr"
          },
          "code_string": "NO"
        },
        "category": {
          "defining_code": {
            "terminology_id": {
              "value": "openehr"
            },
            "code_string": "433"
          }
        },
        "composer": {
          "_type": "PARTY_IDENTIFIED",
          "name": "default"
        },
        "context": {
          "start_time": {
            "value": "${new Date().toISOString()}"
          },
          "setting": {
            "value": "secondary medical care",
            "defining_code": {
              "terminology_id": {
                "value": "openehr"
              },
              "code_string": "232"
            }
          },
          "other_context": {
            "_type": "ITEM_TREE",
            "archetype_node_id": "at0001",
            "name": {
              "value": "Tree"
            }
          }
        },
        "content": [
          {
            "_type": "OBSERVATION",
            "archetype_node_id": "openEHR-EHR-OBSERVATION.body_weight.v1",
            "name": {
              "value": "Kroppsvekt#1"
            },
            "archetype_details": {
              "archetype_id": {
                "value": "openEHR-EHR-OBSERVATION.body_weight.v1"
              },
              "template_id": {
                "value": "Vekt"
              },
              "rm_version": "1.0.4"
            },
            "language": {
              "terminology_id": {
                "value": "ISO_639-1"
              },
              "code_string": "nb"
            },
            "encoding": {
              "terminology_id": {
                "value": "IANA"
              },
              "code_string": "UTF-8"
            },
            "subject": {
              "_type": "PARTY_SELF"
            },
            "data": {
              "archetype_node_id": "at0002",
              "name": {
                "value": "history"
              },
              "origin": {
                "value": "${new Date().toISOString()}"
              },
              "events": [
                {
                  "_type": "POINT_EVENT",
                  "archetype_node_id": "at0003",
                  "name": {
                    "value": "Uspesifisert hendelse"
                  },
                  "time": {
                    "value": "${new Date().toISOString()}"
                  }
                }
              ]
            }
          }
        ]
      }`;
  }
}