window.lunrData = {
  "index": {
    "version": "1.0.0",
    "fields": [
      {
        "name": "longname",
        "boost": 1000
      },
      {
        "name": "name",
        "boost": 500
      },
      {
        "name": "tags",
        "boost": 300
      },
      {
        "name": "kind",
        "boost": 110
      },
      {
        "name": "title",
        "boost": 100
      },
      {
        "name": "summary",
        "boost": 70
      },
      {
        "name": "description",
        "boost": 50
      },
      {
        "name": "body",
        "boost": 1
      }
    ],
    "ref": "id",
    "tokenizer": "default",
    "documentStore": {
      "store": {
        "index.html": [
          "codic",
          "fiscal",
          "handl",
          "index",
          "italian",
          "js",
          "readm",
          "util"
        ],
        "global.html": [
          "document",
          "global"
        ],
        "list_class.html": [
          "class",
          "document",
          "list",
          "list:class"
        ],
        "list_module.html": [
          "document",
          "list",
          "list:modul",
          "modul"
        ],
        "list_namespace.html": [
          "document",
          "list",
          "list:namespac",
          "namespac"
        ],
        "CheckDigitizer.html": [
          "checkdigit",
          "namespac"
        ],
        "CheckDigitizer.html#.evaluateChar": [
          "checkdigitizer.evaluatechar",
          "evalu",
          "evaluatechar",
          "fiscalcod",
          "function",
          "lt;gener",
          "number",
          "partial",
          "partialcf",
          "static&gt"
        ],
        "CheckDigitizer.html#.checkDigit": [
          "cf",
          "charact",
          "char|nul",
          "check",
          "checkdigit",
          "checkdigitizer.checkdigit",
          "codicefiscal",
          "digit",
          "evalu",
          "function",
          "given",
          "last",
          "lt;static&gt",
          "partial",
          "produc"
        ],
        "Errors.html": [
          "class",
          "error"
        ],
        "module-CodiceFiscaleUtils.html": [
          "codicefiscaleutil",
          "modul",
          "module:codicefiscaleutil"
        ],
        "Belfiore.html": [
          "belfior",
          "citi",
          "countri",
          "dataset",
          "handler",
          "namespac"
        ],
        "BirthMonth.html": [
          "birthmonth",
          "namespac"
        ],
        "DATE_VALIDATOR.html": [
          "date",
          "date_valid",
          "namespac",
          "properti",
          "valid"
        ],
        "Gender.html": [
          "gender",
          "namespac"
        ],
        "Gender.html#.toArray": [
          "array",
          "array.&lt;string&gt",
          "constant",
          "function",
          "gender",
          "gender.toarray",
          "lt;static&gt",
          "return",
          "toarray"
        ],
        "Omocode.html": [
          "namespac",
          "omocod"
        ],
        "Parser.html": [
          "namespac",
          "parser"
        ],
        "Parser.html#.OMOCODE_BITMAP": [
          "bitmap",
          "default",
          "lt;static",
          "member",
          "omocod",
          "omocode_bitmap",
          "parser.omocode_bitmap",
          "readonly&gt"
        ],
        "Parser.html#.cfDeomocode": [
          "cfdeomocod",
          "codicefiscal",
          "function",
          "inform",
          "lt;static&gt",
          "pars",
          "parser.cfdeomocod",
          "string|nul",
          "surnam"
        ],
        "Parser.html#.cfToSurname": [
          "cftosurnam",
          "codicefiscal",
          "function",
          "inform",
          "lt;static&gt",
          "pars",
          "parser.cftosurnam",
          "string|nul",
          "surnam"
        ],
        "Parser.html#.cfToName": [
          "cftonam",
          "codicefiscal",
          "function",
          "inform",
          "lt;static&gt",
          "name",
          "pars",
          "parser.cftonam",
          "string|nul"
        ],
        "Parser.html#.cfToGender": [
          "cftogend",
          "codicefiscal",
          "function",
          "gender",
          "inform",
          "lt;static&gt",
          "m'|'f'|null",
          "pars",
          "parser.cftogend"
        ],
        "Parser.html#.cfToBirthYear": [
          "birth",
          "cftobirthyear",
          "codicefiscal",
          "function",
          "inform",
          "lt;static&gt",
          "number|nul",
          "pars",
          "parser.cftobirthyear",
          "year"
        ],
        "Parser.html#.cfToBirthMonth": [
          "birth",
          "cftobirthmonth",
          "codicefiscal",
          "function",
          "inform",
          "lt;static&gt",
          "month",
          "number|nul",
          "pars",
          "parser.cftobirthmonth"
        ],
        "Parser.html#.cfToBirthDay": [
          "birth",
          "cftobirthday",
          "codicefiscal",
          "day",
          "function",
          "inform",
          "lt;static&gt",
          "number|nul",
          "pars",
          "parser.cftobirthday"
        ],
        "Parser.html#.cfToBirthDate": [
          "birth",
          "cftobirthd",
          "codicefiscal",
          "date",
          "date|nul",
          "function",
          "inform",
          "lt;static&gt",
          "pars",
          "parser.cftobirthd"
        ],
        "Parser.html#.cfToBirthPlace": [
          "birth",
          "cftobirthplac",
          "codicefiscal",
          "function",
          "inform",
          "lt;static&gt",
          "object",
          "pars",
          "parser.cftobirthplac",
          "place"
        ],
        "Parser.html#.cfDecode": [
          "cfdecod",
          "fiscalcod",
          "function",
          "lt;static&gt",
          "object",
          "parser.cfdecod"
        ],
        "Parser.html#.surnameToCf": [
          "cf",
          "function",
          "lt;static&gt",
          "pars",
          "parser.surnametocf",
          "part",
          "string|nul",
          "surnam",
          "surnametocf"
        ],
        "Parser.html#.nameToCf": [
          "cf",
          "function",
          "lt;static&gt",
          "name",
          "nametocf",
          "pars",
          "parser.nametocf",
          "part",
          "string|nul"
        ],
        "Parser.html#.yearToCf": [
          "cf",
          "function",
          "lt;static&gt",
          "pars",
          "parser.yeartocf",
          "part",
          "string|nul",
          "year",
          "yeartocf"
        ],
        "Parser.html#.monthToCf": [
          "function",
          "inform",
          "lt;static&gt",
          "month",
          "monthtocf",
          "pars",
          "parser.monthtocf",
          "string|nul"
        ],
        "Parser.html#.yearMonthDayToDate": [
          "date",
          "date|nul",
          "day",
          "function",
          "lt;static&gt",
          "month",
          "pars",
          "parser.yearmonthdaytod",
          "year",
          "yearmonthdaytod"
        ],
        "Parser.html#.parseDate": [
          "cf",
          "creat",
          "date",
          "date/gend",
          "date|nul",
          "function",
          "gender",
          "inform",
          "lt;static&gt",
          "pars",
          "parsed",
          "parser.parsed",
          "part"
        ],
        "Parser.html#.dateGenderToCf": [
          "cf",
          "creat",
          "date",
          "date/gend",
          "dategendertocf",
          "function",
          "gender",
          "inform",
          "lt;static&gt",
          "pars",
          "parser.dategendertocf",
          "part",
          "string|nul"
        ],
        "Parser.html#.placeToCf": [
          "belfior",
          "code",
          "function",
          "lt;static&gt",
          "name",
          "pars",
          "parser.placetocf",
          "place",
          "placetocf",
          "provinc",
          "string|nul"
        ],
        "Parser.html#.encodeCf": [
          "cf",
          "encodecf",
          "full",
          "function",
          "gener",
          "input",
          "lt;static&gt",
          "parser.encodecf",
          "string|nul"
        ],
        "Parser.html#.dayGenderToCf": [
          "day",
          "daygendertocf",
          "function",
          "gender",
          "inform",
          "lt;static&gt",
          "pars",
          "parser.daygendertocf",
          "string|nul"
        ],
        "VALIDATOR.html": [
          "constant",
          "namespac",
          "valid"
        ],
        "Validator_.html": [
          "namespac",
          "valid"
        ],
        "Validator_.html#.cfSurname": [
          "cfsurnam",
          "function",
          "gener",
          "given",
          "lt;static&gt",
          "regexp",
          "surnam",
          "valid",
          "validator.cfsurnam"
        ],
        "Validator_.html#.cfName": [
          "cfname",
          "function",
          "gener",
          "given",
          "lt;static&gt",
          "name",
          "regexp",
          "valid",
          "validator.cfnam"
        ],
        "Validator_.html#.cfYear": [
          "cfyear",
          "function",
          "gener",
          "given",
          "lt;static&gt",
          "regexp",
          "valid",
          "validator.cfyear",
          "year"
        ],
        "Validator_.html#.cfMonth": [
          "cfmonth",
          "function",
          "gener",
          "given",
          "lt;static&gt",
          "month",
          "regexp",
          "valid",
          "validator.cfmonth"
        ],
        "Validator_.html#.cfDay": [
          "cfday",
          "day",
          "function",
          "gener",
          "given",
          "lt;static&gt",
          "regexp",
          "valid",
          "validator.cfday",
          "year"
        ],
        "Validator_.html#.cfDayGender": [
          "cfdaygend",
          "day",
          "function",
          "gender",
          "gener",
          "given",
          "lt;static&gt",
          "regexp",
          "valid",
          "validator.cfdaygend",
          "year"
        ],
        "Validator_.html#.cfDateGender": [
          "cfdategend",
          "date",
          "function",
          "gender",
          "gener",
          "given",
          "lt;static&gt",
          "regexp",
          "valid",
          "validator.cfdategend",
          "year"
        ],
        "Validator_.html#.cfPlace": [
          "cfplace",
          "date",
          "function",
          "lt;static&gt",
          "placenam",
          "regexp",
          "validator.cfplac"
        ],
        "Validator_.html#.codiceFiscale": [
          "base",
          "cf",
          "codicefiscal",
          "full",
          "function",
          "gener",
          "given",
          "input",
          "lt;static&gt",
          "option",
          "regexp",
          "valid",
          "validator.codicefiscal"
        ],
        "Validator_.html#.surname": [
          "base",
          "cf",
          "codicefiscal",
          "function",
          "gener",
          "given",
          "lt;static&gt",
          "regexp",
          "return",
          "surnam",
          "valid",
          "validator.surnam"
        ],
        "Validator_.html#.name": [
          "base",
          "cf",
          "codicefiscal",
          "function",
          "gener",
          "given",
          "lt;static&gt",
          "name",
          "regexp",
          "return",
          "valid",
          "validator.nam"
        ],
        "Validator_.html#.date": [
          "base",
          "cf",
          "codicefiscal",
          "date",
          "function",
          "gener",
          "given",
          "iso8601",
          "lt;static&gt",
          "regexp",
          "return",
          "valid",
          "validator.d"
        ],
        "Validator_.html#.gender": [
          "base",
          "cf",
          "codicefiscal",
          "function",
          "gender",
          "gener",
          "given",
          "lt;static&gt",
          "regexp",
          "return",
          "valid",
          "validator.gend"
        ],
        "Validator_.html#.place": [
          "base",
          "cf",
          "codicefiscal",
          "function",
          "gener",
          "given",
          "lt;static&gt",
          "place",
          "regexp",
          "return",
          "valid",
          "validator.plac"
        ],
        "Validator_.html#.isValid": [
          "birth",
          "boolean",
          "cf",
          "check",
          "code",
          "codicefiscal",
          "date/plac",
          "digit",
          "form",
          "function",
          "given",
          "isvalid",
          "lt;static&gt",
          "valid",
          "validator.isvalid"
        ]
      },
      "length": 55
    },
    "tokenStore": {
      "root": {
        "1": {
          "6": {
            "docs": {},
            "t": {
              "docs": {},
              "h": {
                "docs": {
                  "CheckDigitizer.html": {
                    "ref": "CheckDigitizer.html",
                    "tf": 8.333333333333332
                  }
                }
              }
            }
          },
          "docs": {}
        },
        "docs": {},
        "c": {
          "docs": {},
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "i": {
                "docs": {},
                "c": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 211.66666666666666
                    }
                  },
                  "e": {
                    "docs": {},
                    "f": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "c": {
                            "docs": {
                              "CheckDigitizer.html": {
                                "ref": "CheckDigitizer.html",
                                "tf": 8.333333333333332
                              }
                            },
                            "a": {
                              "docs": {},
                              "l": {
                                "docs": {
                                  "CheckDigitizer.html#.checkDigit": {
                                    "ref": "CheckDigitizer.html#.checkDigit",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfDeomocode": {
                                    "ref": "Parser.html#.cfDeomocode",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToSurname": {
                                    "ref": "Parser.html#.cfToSurname",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToName": {
                                    "ref": "Parser.html#.cfToName",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToGender": {
                                    "ref": "Parser.html#.cfToGender",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToBirthYear": {
                                    "ref": "Parser.html#.cfToBirthYear",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToBirthMonth": {
                                    "ref": "Parser.html#.cfToBirthMonth",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToBirthDay": {
                                    "ref": "Parser.html#.cfToBirthDay",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToBirthDate": {
                                    "ref": "Parser.html#.cfToBirthDate",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToBirthPlace": {
                                    "ref": "Parser.html#.cfToBirthPlace",
                                    "tf": 25
                                  },
                                  "Validator_.html#.codiceFiscale": {
                                    "ref": "Validator_.html#.codiceFiscale",
                                    "tf": 675
                                  },
                                  "Validator_.html#.surname": {
                                    "ref": "Validator_.html#.surname",
                                    "tf": 25
                                  },
                                  "Validator_.html#.name": {
                                    "ref": "Validator_.html#.name",
                                    "tf": 25
                                  },
                                  "Validator_.html#.date": {
                                    "ref": "Validator_.html#.date",
                                    "tf": 25
                                  },
                                  "Validator_.html#.gender": {
                                    "ref": "Validator_.html#.gender",
                                    "tf": 25
                                  },
                                  "Validator_.html#.place": {
                                    "ref": "Validator_.html#.place",
                                    "tf": 25
                                  },
                                  "Validator_.html#.isValid": {
                                    "ref": "Validator_.html#.isValid",
                                    "tf": 25
                                  }
                                },
                                "e": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "l": {
                                          "docs": {
                                            "module-CodiceFiscaleUtils.html": {
                                              "ref": "module-CodiceFiscaleUtils.html",
                                              "tf": 600
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {
                  "Parser.html#.placeToCf": {
                    "ref": "Parser.html#.placeToCf",
                    "tf": 8.333333333333332
                  },
                  "Validator_.html#.isValid": {
                    "ref": "Validator_.html#.isValid",
                    "tf": 5.555555555555555
                  }
                }
              }
            },
            "u": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "Belfiore.html": {
                          "ref": "Belfiore.html",
                          "tf": 12.5
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "Gender.html#.toArray": {
                            "ref": "Gender.html#.toArray",
                            "tf": 12.5
                          },
                          "VALIDATOR.html": {
                            "ref": "VALIDATOR.html",
                            "tf": 25
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {
                    "list_class.html": {
                      "ref": "list_class.html",
                      "tf": 635
                    },
                    "CheckDigitizer.html": {
                      "ref": "CheckDigitizer.html",
                      "tf": 110
                    },
                    "Errors.html": {
                      "ref": "Errors.html",
                      "tf": 110
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "c": {
                "docs": {},
                "u": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "CheckDigitizer.html": {
                        "ref": "CheckDigitizer.html",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "a": {
              "docs": {},
              "r": {
                "docs": {
                  "CheckDigitizer.html": {
                    "ref": "CheckDigitizer.html",
                    "tf": 8.333333333333332
                  }
                },
                "a": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "CheckDigitizer.html#.checkDigit": {
                          "ref": "CheckDigitizer.html#.checkDigit",
                          "tf": 5.555555555555555
                        }
                      }
                    }
                  }
                },
                "|": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "l": {
                        "docs": {
                          "CheckDigitizer.html#.checkDigit": {
                            "ref": "CheckDigitizer.html#.checkDigit",
                            "tf": 25
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "k": {
                  "docs": {
                    "CheckDigitizer.html": {
                      "ref": "CheckDigitizer.html",
                      "tf": 8.333333333333332
                    },
                    "CheckDigitizer.html#.checkDigit": {
                      "ref": "CheckDigitizer.html#.checkDigit",
                      "tf": 5.555555555555555
                    },
                    "Validator_.html#.isValid": {
                      "ref": "Validator_.html#.isValid",
                      "tf": 5.555555555555555
                    }
                  },
                  "d": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "g": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "CheckDigitizer.html": {
                                "ref": "CheckDigitizer.html",
                                "tf": 1900
                              },
                              "CheckDigitizer.html#.checkDigit": {
                                "ref": "CheckDigitizer.html#.checkDigit",
                                "tf": 675
                              }
                            },
                            "i": {
                              "docs": {},
                              "z": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    ".": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "v": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "u": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "c": {
                                                        "docs": {},
                                                        "h": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {
                                                                "CheckDigitizer.html#.evaluateChar": {
                                                                  "ref": "CheckDigitizer.html#.evaluateChar",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "c": {
                                        "docs": {},
                                        "h": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "c": {
                                              "docs": {},
                                              "k": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {
                                                            "CheckDigitizer.html#.checkDigit": {
                                                              "ref": "CheckDigitizer.html#.checkDigit",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "f": {
            "docs": {
              "CheckDigitizer.html#.checkDigit": {
                "ref": "CheckDigitizer.html#.checkDigit",
                "tf": 5.555555555555555
              },
              "Parser.html#.surnameToCf": {
                "ref": "Parser.html#.surnameToCf",
                "tf": 12.5
              },
              "Parser.html#.nameToCf": {
                "ref": "Parser.html#.nameToCf",
                "tf": 12.5
              },
              "Parser.html#.yearToCf": {
                "ref": "Parser.html#.yearToCf",
                "tf": 12.5
              },
              "Parser.html#.parseDate": {
                "ref": "Parser.html#.parseDate",
                "tf": 6.25
              },
              "Parser.html#.dateGenderToCf": {
                "ref": "Parser.html#.dateGenderToCf",
                "tf": 6.25
              },
              "Parser.html#.placeToCf": {
                "ref": "Parser.html#.placeToCf",
                "tf": 6.25
              },
              "Parser.html#.encodeCf": {
                "ref": "Parser.html#.encodeCf",
                "tf": 16.666666666666664
              },
              "Validator_.html#.codiceFiscale": {
                "ref": "Validator_.html#.codiceFiscale",
                "tf": 5.555555555555555
              },
              "Validator_.html#.surname": {
                "ref": "Validator_.html#.surname",
                "tf": 7.142857142857142
              },
              "Validator_.html#.name": {
                "ref": "Validator_.html#.name",
                "tf": 7.142857142857142
              },
              "Validator_.html#.date": {
                "ref": "Validator_.html#.date",
                "tf": 6.25
              },
              "Validator_.html#.gender": {
                "ref": "Validator_.html#.gender",
                "tf": 7.142857142857142
              },
              "Validator_.html#.place": {
                "ref": "Validator_.html#.place",
                "tf": 7.142857142857142
              },
              "Validator_.html#.isValid": {
                "ref": "Validator_.html#.isValid",
                "tf": 5.555555555555555
              }
            },
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "o": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "Parser.html#.cfDeomocode": {
                                "ref": "Parser.html#.cfDeomocode",
                                "tf": 675
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "c": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "Parser.html#.cfDecode": {
                          "ref": "Parser.html#.cfDecode",
                          "tf": 675
                        }
                      }
                    }
                  }
                }
              },
              "a": {
                "docs": {},
                "y": {
                  "docs": {
                    "Validator_.html#.cfDay": {
                      "ref": "Validator_.html#.cfDay",
                      "tf": 675
                    }
                  },
                  "g": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "d": {
                          "docs": {
                            "Validator_.html#.cfDayGender": {
                              "ref": "Validator_.html#.cfDayGender",
                              "tf": 670
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "t": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "Validator_.html#.cfDateGender": {
                                "ref": "Validator_.html#.cfDateGender",
                                "tf": 670
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "o": {
                "docs": {},
                "s": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "m": {
                            "docs": {
                              "Parser.html#.cfToSurname": {
                                "ref": "Parser.html#.cfToSurname",
                                "tf": 675
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "n": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "m": {
                      "docs": {
                        "Parser.html#.cfToName": {
                          "ref": "Parser.html#.cfToName",
                          "tf": 675
                        }
                      }
                    }
                  }
                },
                "g": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "d": {
                        "docs": {
                          "Parser.html#.cfToGender": {
                            "ref": "Parser.html#.cfToGender",
                            "tf": 675
                          }
                        }
                      }
                    }
                  }
                },
                "b": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "h": {
                          "docs": {},
                          "y": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "r": {
                                  "docs": {
                                    "Parser.html#.cfToBirthYear": {
                                      "ref": "Parser.html#.cfToBirthYear",
                                      "tf": 675
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "m": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "h": {
                                    "docs": {
                                      "Parser.html#.cfToBirthMonth": {
                                        "ref": "Parser.html#.cfToBirthMonth",
                                        "tf": 675
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "d": {
                            "docs": {
                              "Parser.html#.cfToBirthDate": {
                                "ref": "Parser.html#.cfToBirthDate",
                                "tf": 675
                              }
                            },
                            "a": {
                              "docs": {},
                              "y": {
                                "docs": {
                                  "Parser.html#.cfToBirthDay": {
                                    "ref": "Parser.html#.cfToBirthDay",
                                    "tf": 675
                                  }
                                }
                              }
                            }
                          },
                          "p": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "c": {
                                  "docs": {
                                    "Parser.html#.cfToBirthPlace": {
                                      "ref": "Parser.html#.cfToBirthPlace",
                                      "tf": 675
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "m": {
                        "docs": {
                          "Validator_.html#.cfSurname": {
                            "ref": "Validator_.html#.cfSurname",
                            "tf": 675
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "a": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {
                      "Validator_.html#.cfName": {
                        "ref": "Validator_.html#.cfName",
                        "tf": 675
                      }
                    }
                  }
                }
              }
            },
            "y": {
              "docs": {},
              "e": {
                "docs": {},
                "a": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Validator_.html#.cfYear": {
                        "ref": "Validator_.html#.cfYear",
                        "tf": 675
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "o": {
                "docs": {},
                "n": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "h": {
                      "docs": {
                        "Validator_.html#.cfMonth": {
                          "ref": "Validator_.html#.cfMonth",
                          "tf": 675
                        }
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "l": {
                "docs": {},
                "a": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "e": {
                      "docs": {
                        "Validator_.html#.cfPlace": {
                          "ref": "Validator_.html#.cfPlace",
                          "tf": 670
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "t": {
              "docs": {},
              "i": {
                "docs": {
                  "Belfiore.html": {
                    "ref": "Belfiore.html",
                    "tf": 12.5
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "e": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "Parser.html#.parseDate": {
                      "ref": "Parser.html#.parseDate",
                      "tf": 6.25
                    },
                    "Parser.html#.dateGenderToCf": {
                      "ref": "Parser.html#.dateGenderToCf",
                      "tf": 6.25
                    },
                    "Parser.html#.placeToCf": {
                      "ref": "Parser.html#.placeToCf",
                      "tf": 6.25
                    }
                  }
                }
              }
            }
          }
        },
        "f": {
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "c": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 211.66666666666666
                      }
                    },
                    "c": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "d": {
                          "docs": {
                            "CheckDigitizer.html#.evaluateChar": {
                              "ref": "CheckDigitizer.html#.evaluateChar",
                              "tf": 16.666666666666664
                            },
                            "Parser.html#.cfDecode": {
                              "ref": "Parser.html#.cfDecode",
                              "tf": 25
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "CheckDigitizer.html#.evaluateChar": {
                            "ref": "CheckDigitizer.html#.evaluateChar",
                            "tf": 110
                          },
                          "CheckDigitizer.html#.checkDigit": {
                            "ref": "CheckDigitizer.html#.checkDigit",
                            "tf": 110
                          },
                          "Gender.html#.toArray": {
                            "ref": "Gender.html#.toArray",
                            "tf": 110
                          },
                          "Parser.html#.cfDeomocode": {
                            "ref": "Parser.html#.cfDeomocode",
                            "tf": 110
                          },
                          "Parser.html#.cfToSurname": {
                            "ref": "Parser.html#.cfToSurname",
                            "tf": 110
                          },
                          "Parser.html#.cfToName": {
                            "ref": "Parser.html#.cfToName",
                            "tf": 110
                          },
                          "Parser.html#.cfToGender": {
                            "ref": "Parser.html#.cfToGender",
                            "tf": 110
                          },
                          "Parser.html#.cfToBirthYear": {
                            "ref": "Parser.html#.cfToBirthYear",
                            "tf": 110
                          },
                          "Parser.html#.cfToBirthMonth": {
                            "ref": "Parser.html#.cfToBirthMonth",
                            "tf": 110
                          },
                          "Parser.html#.cfToBirthDay": {
                            "ref": "Parser.html#.cfToBirthDay",
                            "tf": 110
                          },
                          "Parser.html#.cfToBirthDate": {
                            "ref": "Parser.html#.cfToBirthDate",
                            "tf": 110
                          },
                          "Parser.html#.cfToBirthPlace": {
                            "ref": "Parser.html#.cfToBirthPlace",
                            "tf": 110
                          },
                          "Parser.html#.cfDecode": {
                            "ref": "Parser.html#.cfDecode",
                            "tf": 110
                          },
                          "Parser.html#.surnameToCf": {
                            "ref": "Parser.html#.surnameToCf",
                            "tf": 110
                          },
                          "Parser.html#.nameToCf": {
                            "ref": "Parser.html#.nameToCf",
                            "tf": 110
                          },
                          "Parser.html#.yearToCf": {
                            "ref": "Parser.html#.yearToCf",
                            "tf": 110
                          },
                          "Parser.html#.monthToCf": {
                            "ref": "Parser.html#.monthToCf",
                            "tf": 110
                          },
                          "Parser.html#.yearMonthDayToDate": {
                            "ref": "Parser.html#.yearMonthDayToDate",
                            "tf": 110
                          },
                          "Parser.html#.parseDate": {
                            "ref": "Parser.html#.parseDate",
                            "tf": 110
                          },
                          "Parser.html#.dateGenderToCf": {
                            "ref": "Parser.html#.dateGenderToCf",
                            "tf": 110
                          },
                          "Parser.html#.placeToCf": {
                            "ref": "Parser.html#.placeToCf",
                            "tf": 110
                          },
                          "Parser.html#.encodeCf": {
                            "ref": "Parser.html#.encodeCf",
                            "tf": 110
                          },
                          "Parser.html#.dayGenderToCf": {
                            "ref": "Parser.html#.dayGenderToCf",
                            "tf": 110
                          },
                          "Validator_.html#.cfSurname": {
                            "ref": "Validator_.html#.cfSurname",
                            "tf": 110
                          },
                          "Validator_.html#.cfName": {
                            "ref": "Validator_.html#.cfName",
                            "tf": 110
                          },
                          "Validator_.html#.cfYear": {
                            "ref": "Validator_.html#.cfYear",
                            "tf": 110
                          },
                          "Validator_.html#.cfMonth": {
                            "ref": "Validator_.html#.cfMonth",
                            "tf": 110
                          },
                          "Validator_.html#.cfDay": {
                            "ref": "Validator_.html#.cfDay",
                            "tf": 110
                          },
                          "Validator_.html#.cfDayGender": {
                            "ref": "Validator_.html#.cfDayGender",
                            "tf": 110
                          },
                          "Validator_.html#.cfDateGender": {
                            "ref": "Validator_.html#.cfDateGender",
                            "tf": 110
                          },
                          "Validator_.html#.cfPlace": {
                            "ref": "Validator_.html#.cfPlace",
                            "tf": 110
                          },
                          "Validator_.html#.codiceFiscale": {
                            "ref": "Validator_.html#.codiceFiscale",
                            "tf": 110
                          },
                          "Validator_.html#.surname": {
                            "ref": "Validator_.html#.surname",
                            "tf": 110
                          },
                          "Validator_.html#.name": {
                            "ref": "Validator_.html#.name",
                            "tf": 110
                          },
                          "Validator_.html#.date": {
                            "ref": "Validator_.html#.date",
                            "tf": 110
                          },
                          "Validator_.html#.gender": {
                            "ref": "Validator_.html#.gender",
                            "tf": 110
                          },
                          "Validator_.html#.place": {
                            "ref": "Validator_.html#.place",
                            "tf": 110
                          },
                          "Validator_.html#.isValid": {
                            "ref": "Validator_.html#.isValid",
                            "tf": 110
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "l": {
                "docs": {
                  "Parser.html#.encodeCf": {
                    "ref": "Parser.html#.encodeCf",
                    "tf": 16.666666666666664
                  },
                  "Validator_.html#.codiceFiscale": {
                    "ref": "Validator_.html#.codiceFiscale",
                    "tf": 5.555555555555555
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "r": {
              "docs": {},
              "m": {
                "docs": {
                  "Validator_.html#.isValid": {
                    "ref": "Validator_.html#.isValid",
                    "tf": 5.555555555555555
                  }
                }
              }
            }
          }
        },
        "h": {
          "docs": {},
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "l": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 11.666666666666666
                    }
                  },
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "Belfiore.html": {
                          "ref": "Belfiore.html",
                          "tf": 12.5
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "i": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 1300
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "Parser.html#.cfDeomocode": {
                        "ref": "Parser.html#.cfDeomocode",
                        "tf": 16.666666666666664
                      },
                      "Parser.html#.cfToSurname": {
                        "ref": "Parser.html#.cfToSurname",
                        "tf": 16.666666666666664
                      },
                      "Parser.html#.cfToName": {
                        "ref": "Parser.html#.cfToName",
                        "tf": 16.666666666666664
                      },
                      "Parser.html#.cfToGender": {
                        "ref": "Parser.html#.cfToGender",
                        "tf": 16.666666666666664
                      },
                      "Parser.html#.cfToBirthYear": {
                        "ref": "Parser.html#.cfToBirthYear",
                        "tf": 12.5
                      },
                      "Parser.html#.cfToBirthMonth": {
                        "ref": "Parser.html#.cfToBirthMonth",
                        "tf": 12.5
                      },
                      "Parser.html#.cfToBirthDay": {
                        "ref": "Parser.html#.cfToBirthDay",
                        "tf": 12.5
                      },
                      "Parser.html#.cfToBirthDate": {
                        "ref": "Parser.html#.cfToBirthDate",
                        "tf": 12.5
                      },
                      "Parser.html#.cfToBirthPlace": {
                        "ref": "Parser.html#.cfToBirthPlace",
                        "tf": 12.5
                      },
                      "Parser.html#.monthToCf": {
                        "ref": "Parser.html#.monthToCf",
                        "tf": 16.666666666666664
                      },
                      "Parser.html#.parseDate": {
                        "ref": "Parser.html#.parseDate",
                        "tf": 6.25
                      },
                      "Parser.html#.dateGenderToCf": {
                        "ref": "Parser.html#.dateGenderToCf",
                        "tf": 6.25
                      },
                      "Parser.html#.placeToCf": {
                        "ref": "Parser.html#.placeToCf",
                        "tf": 6.25
                      },
                      "Parser.html#.dayGenderToCf": {
                        "ref": "Parser.html#.dayGenderToCf",
                        "tf": 16.666666666666664
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "u": {
                "docs": {},
                "t": {
                  "docs": {
                    "Parser.html#.encodeCf": {
                      "ref": "Parser.html#.encodeCf",
                      "tf": 25
                    },
                    "Validator_.html#.codiceFiscale": {
                      "ref": "Validator_.html#.codiceFiscale",
                      "tf": 30.555555555555557
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "a": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "index.html": {
                          "ref": "index.html",
                          "tf": 11.666666666666666
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {},
            "o": {
              "8": {
                "6": {
                  "0": {
                    "1": {
                      "docs": {
                        "Validator_.html#.date": {
                          "ref": "Validator_.html#.date",
                          "tf": 6.25
                        }
                      }
                    },
                    "docs": {}
                  },
                  "docs": {}
                },
                "docs": {}
              },
              "docs": {}
            },
            "v": {
              "docs": {},
              "a": {
                "docs": {},
                "l": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "Validator_.html#.isValid": {
                          "ref": "Validator_.html#.isValid",
                          "tf": 675
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "j": {
          "docs": {},
          "s": {
            "docs": {
              "index.html": {
                "ref": "index.html",
                "tf": 11.666666666666666
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {},
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 110
                    }
                  }
                },
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "y": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "Parser.html#.OMOCODE_BITMAP": {
                                  "ref": "Parser.html#.OMOCODE_BITMAP",
                                  "tf": 33.33333333333333
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Gender.html#.toArray": {
                        "ref": "Gender.html#.toArray",
                        "tf": 12.5
                      },
                      "Validator_.html#.surname": {
                        "ref": "Validator_.html#.surname",
                        "tf": 7.142857142857142
                      },
                      "Validator_.html#.name": {
                        "ref": "Validator_.html#.name",
                        "tf": 7.142857142857142
                      },
                      "Validator_.html#.date": {
                        "ref": "Validator_.html#.date",
                        "tf": 6.25
                      },
                      "Validator_.html#.gender": {
                        "ref": "Validator_.html#.gender",
                        "tf": 7.142857142857142
                      },
                      "Validator_.html#.place": {
                        "ref": "Validator_.html#.place",
                        "tf": 7.142857142857142
                      }
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {},
                  "p": {
                    "docs": {
                      "Validator_.html#.cfSurname": {
                        "ref": "Validator_.html#.cfSurname",
                        "tf": 35
                      },
                      "Validator_.html#.cfName": {
                        "ref": "Validator_.html#.cfName",
                        "tf": 35
                      },
                      "Validator_.html#.cfYear": {
                        "ref": "Validator_.html#.cfYear",
                        "tf": 35
                      },
                      "Validator_.html#.cfMonth": {
                        "ref": "Validator_.html#.cfMonth",
                        "tf": 35
                      },
                      "Validator_.html#.cfDay": {
                        "ref": "Validator_.html#.cfDay",
                        "tf": 35
                      },
                      "Validator_.html#.cfDayGender": {
                        "ref": "Validator_.html#.cfDayGender",
                        "tf": 30
                      },
                      "Validator_.html#.cfDateGender": {
                        "ref": "Validator_.html#.cfDateGender",
                        "tf": 30
                      },
                      "Validator_.html#.cfPlace": {
                        "ref": "Validator_.html#.cfPlace",
                        "tf": 20
                      },
                      "Validator_.html#.codiceFiscale": {
                        "ref": "Validator_.html#.codiceFiscale",
                        "tf": 25
                      },
                      "Validator_.html#.surname": {
                        "ref": "Validator_.html#.surname",
                        "tf": 25
                      },
                      "Validator_.html#.name": {
                        "ref": "Validator_.html#.name",
                        "tf": 25
                      },
                      "Validator_.html#.date": {
                        "ref": "Validator_.html#.date",
                        "tf": 25
                      },
                      "Validator_.html#.gender": {
                        "ref": "Validator_.html#.gender",
                        "tf": 25
                      },
                      "Validator_.html#.place": {
                        "ref": "Validator_.html#.place",
                        "tf": 25
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "u": {
          "docs": {},
          "t": {
            "docs": {},
            "i": {
              "docs": {},
              "l": {
                "docs": {
                  "index.html": {
                    "ref": "index.html",
                    "tf": 211.66666666666666
                  }
                }
              }
            }
          }
        },
        "d": {
          "docs": {},
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "global.html": {
                            "ref": "global.html",
                            "tf": 35
                          },
                          "list_class.html": {
                            "ref": "list_class.html",
                            "tf": 35
                          },
                          "list_module.html": {
                            "ref": "list_module.html",
                            "tf": 35
                          },
                          "list_namespace.html": {
                            "ref": "list_namespace.html",
                            "tf": 35
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "g": {
              "docs": {},
              "i": {
                "docs": {},
                "t": {
                  "docs": {
                    "CheckDigitizer.html": {
                      "ref": "CheckDigitizer.html",
                      "tf": 8.333333333333332
                    },
                    "CheckDigitizer.html#.checkDigit": {
                      "ref": "CheckDigitizer.html#.checkDigit",
                      "tf": 5.555555555555555
                    },
                    "Validator_.html#.isValid": {
                      "ref": "Validator_.html#.isValid",
                      "tf": 5.555555555555555
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {},
                "s": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Belfiore.html": {
                          "ref": "Belfiore.html",
                          "tf": 12.5
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {
                  "DATE_VALIDATOR.html": {
                    "ref": "DATE_VALIDATOR.html",
                    "tf": 16.666666666666664
                  },
                  "Parser.html#.cfToBirthDate": {
                    "ref": "Parser.html#.cfToBirthDate",
                    "tf": 12.5
                  },
                  "Parser.html#.yearMonthDayToDate": {
                    "ref": "Parser.html#.yearMonthDayToDate",
                    "tf": 10
                  },
                  "Parser.html#.parseDate": {
                    "ref": "Parser.html#.parseDate",
                    "tf": 31.25
                  },
                  "Parser.html#.dateGenderToCf": {
                    "ref": "Parser.html#.dateGenderToCf",
                    "tf": 26.25
                  },
                  "Parser.html#.placeToCf": {
                    "ref": "Parser.html#.placeToCf",
                    "tf": 22.916666666666664
                  },
                  "Validator_.html#.cfDateGender": {
                    "ref": "Validator_.html#.cfDateGender",
                    "tf": 20
                  },
                  "Validator_.html#.cfPlace": {
                    "ref": "Validator_.html#.cfPlace",
                    "tf": 20
                  },
                  "Validator_.html#.date": {
                    "ref": "Validator_.html#.date",
                    "tf": 681.25
                  }
                },
                "_": {
                  "docs": {},
                  "v": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "DATE_VALIDATOR.html": {
                                "ref": "DATE_VALIDATOR.html",
                                "tf": 1900
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "|": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "l": {
                        "docs": {
                          "Parser.html#.cfToBirthDate": {
                            "ref": "Parser.html#.cfToBirthDate",
                            "tf": 25
                          },
                          "Parser.html#.yearMonthDayToDate": {
                            "ref": "Parser.html#.yearMonthDayToDate",
                            "tf": 16.666666666666664
                          },
                          "Parser.html#.parseDate": {
                            "ref": "Parser.html#.parseDate",
                            "tf": 25
                          }
                        }
                      }
                    }
                  }
                },
                "/": {
                  "docs": {},
                  "g": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "d": {
                          "docs": {
                            "Parser.html#.parseDate": {
                              "ref": "Parser.html#.parseDate",
                              "tf": 6.25
                            },
                            "Parser.html#.dateGenderToCf": {
                              "ref": "Parser.html#.dateGenderToCf",
                              "tf": 6.25
                            },
                            "Parser.html#.placeToCf": {
                              "ref": "Parser.html#.placeToCf",
                              "tf": 6.25
                            }
                          }
                        }
                      }
                    }
                  },
                  "p": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "c": {
                          "docs": {
                            "Validator_.html#.isValid": {
                              "ref": "Validator_.html#.isValid",
                              "tf": 5.555555555555555
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "g": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "f": {
                                    "docs": {
                                      "Parser.html#.dateGenderToCf": {
                                        "ref": "Parser.html#.dateGenderToCf",
                                        "tf": 670
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "y": {
              "docs": {
                "Parser.html#.cfToBirthDay": {
                  "ref": "Parser.html#.cfToBirthDay",
                  "tf": 12.5
                },
                "Parser.html#.yearMonthDayToDate": {
                  "ref": "Parser.html#.yearMonthDayToDate",
                  "tf": 26.666666666666664
                },
                "Parser.html#.dayGenderToCf": {
                  "ref": "Parser.html#.dayGenderToCf",
                  "tf": 36.666666666666664
                },
                "Validator_.html#.cfDay": {
                  "ref": "Validator_.html#.cfDay",
                  "tf": 25
                },
                "Validator_.html#.cfDayGender": {
                  "ref": "Validator_.html#.cfDayGender",
                  "tf": 20
                }
              },
              "g": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "f": {
                                  "docs": {
                                    "Parser.html#.dayGenderToCf": {
                                      "ref": "Parser.html#.dayGenderToCf",
                                      "tf": 670
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "f": {
              "docs": {},
              "a": {
                "docs": {},
                "u": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Parser.html#.OMOCODE_BITMAP": {
                          "ref": "Parser.html#.OMOCODE_BITMAP",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "g": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "b": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "global.html": {
                        "ref": "global.html",
                        "tf": 2045
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {
                    "CheckDigitizer.html#.checkDigit": {
                      "ref": "CheckDigitizer.html#.checkDigit",
                      "tf": 5.555555555555555
                    },
                    "Validator_.html#.cfSurname": {
                      "ref": "Validator_.html#.cfSurname",
                      "tf": 10
                    },
                    "Validator_.html#.cfName": {
                      "ref": "Validator_.html#.cfName",
                      "tf": 10
                    },
                    "Validator_.html#.cfYear": {
                      "ref": "Validator_.html#.cfYear",
                      "tf": 10
                    },
                    "Validator_.html#.cfMonth": {
                      "ref": "Validator_.html#.cfMonth",
                      "tf": 10
                    },
                    "Validator_.html#.cfDay": {
                      "ref": "Validator_.html#.cfDay",
                      "tf": 10
                    },
                    "Validator_.html#.cfDayGender": {
                      "ref": "Validator_.html#.cfDayGender",
                      "tf": 10
                    },
                    "Validator_.html#.cfDateGender": {
                      "ref": "Validator_.html#.cfDateGender",
                      "tf": 10
                    },
                    "Validator_.html#.codiceFiscale": {
                      "ref": "Validator_.html#.codiceFiscale",
                      "tf": 5.555555555555555
                    },
                    "Validator_.html#.surname": {
                      "ref": "Validator_.html#.surname",
                      "tf": 7.142857142857142
                    },
                    "Validator_.html#.name": {
                      "ref": "Validator_.html#.name",
                      "tf": 7.142857142857142
                    },
                    "Validator_.html#.date": {
                      "ref": "Validator_.html#.date",
                      "tf": 6.25
                    },
                    "Validator_.html#.gender": {
                      "ref": "Validator_.html#.gender",
                      "tf": 7.142857142857142
                    },
                    "Validator_.html#.place": {
                      "ref": "Validator_.html#.place",
                      "tf": 7.142857142857142
                    },
                    "Validator_.html#.isValid": {
                      "ref": "Validator_.html#.isValid",
                      "tf": 5.555555555555555
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Gender.html": {
                        "ref": "Gender.html",
                        "tf": 1900
                      },
                      "Gender.html#.toArray": {
                        "ref": "Gender.html#.toArray",
                        "tf": 12.5
                      },
                      "Parser.html#.cfToGender": {
                        "ref": "Parser.html#.cfToGender",
                        "tf": 16.666666666666664
                      },
                      "Parser.html#.parseDate": {
                        "ref": "Parser.html#.parseDate",
                        "tf": 6.25
                      },
                      "Parser.html#.dateGenderToCf": {
                        "ref": "Parser.html#.dateGenderToCf",
                        "tf": 26.25
                      },
                      "Parser.html#.placeToCf": {
                        "ref": "Parser.html#.placeToCf",
                        "tf": 6.25
                      },
                      "Parser.html#.dayGenderToCf": {
                        "ref": "Parser.html#.dayGenderToCf",
                        "tf": 20
                      },
                      "Validator_.html#.cfDayGender": {
                        "ref": "Validator_.html#.cfDayGender",
                        "tf": 20
                      },
                      "Validator_.html#.cfDateGender": {
                        "ref": "Validator_.html#.cfDateGender",
                        "tf": 20
                      },
                      "Validator_.html#.gender": {
                        "ref": "Validator_.html#.gender",
                        "tf": 682.1428571428571
                      }
                    },
                    ".": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "y": {
                                    "docs": {
                                      "Gender.html#.toArray": {
                                        "ref": "Gender.html#.toArray",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "Parser.html#.encodeCf": {
                      "ref": "Parser.html#.encodeCf",
                      "tf": 16.666666666666664
                    },
                    "Validator_.html#.cfSurname": {
                      "ref": "Validator_.html#.cfSurname",
                      "tf": 10
                    },
                    "Validator_.html#.cfName": {
                      "ref": "Validator_.html#.cfName",
                      "tf": 10
                    },
                    "Validator_.html#.cfYear": {
                      "ref": "Validator_.html#.cfYear",
                      "tf": 10
                    },
                    "Validator_.html#.cfMonth": {
                      "ref": "Validator_.html#.cfMonth",
                      "tf": 10
                    },
                    "Validator_.html#.cfDay": {
                      "ref": "Validator_.html#.cfDay",
                      "tf": 10
                    },
                    "Validator_.html#.cfDayGender": {
                      "ref": "Validator_.html#.cfDayGender",
                      "tf": 10
                    },
                    "Validator_.html#.cfDateGender": {
                      "ref": "Validator_.html#.cfDateGender",
                      "tf": 10
                    },
                    "Validator_.html#.codiceFiscale": {
                      "ref": "Validator_.html#.codiceFiscale",
                      "tf": 11.11111111111111
                    },
                    "Validator_.html#.surname": {
                      "ref": "Validator_.html#.surname",
                      "tf": 7.142857142857142
                    },
                    "Validator_.html#.name": {
                      "ref": "Validator_.html#.name",
                      "tf": 7.142857142857142
                    },
                    "Validator_.html#.date": {
                      "ref": "Validator_.html#.date",
                      "tf": 6.25
                    },
                    "Validator_.html#.gender": {
                      "ref": "Validator_.html#.gender",
                      "tf": 7.142857142857142
                    },
                    "Validator_.html#.place": {
                      "ref": "Validator_.html#.place",
                      "tf": 7.142857142857142
                    }
                  }
                }
              }
            }
          }
        },
        "l": {
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "list_class.html": {
                    "ref": "list_class.html",
                    "tf": 110
                  },
                  "list_module.html": {
                    "ref": "list_module.html",
                    "tf": 110
                  },
                  "list_namespace.html": {
                    "ref": "list_namespace.html",
                    "tf": 110
                  }
                },
                ":": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "list_class.html": {
                                "ref": "list_class.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "m": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "list_module.html": {
                                "ref": "list_module.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "n": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "m": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "c": {
                                  "docs": {
                                    "list_namespace.html": {
                                      "ref": "list_namespace.html",
                                      "tf": 1300
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            ";": {
              "docs": {},
              "g": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "CheckDigitizer.html#.evaluateChar": {
                            "ref": "CheckDigitizer.html#.evaluateChar",
                            "tf": 20
                          }
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "t": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "c": {
                          "docs": {
                            "Parser.html#.OMOCODE_BITMAP": {
                              "ref": "Parser.html#.OMOCODE_BITMAP",
                              "tf": 33.33333333333333
                            }
                          },
                          "&": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "CheckDigitizer.html#.checkDigit": {
                                    "ref": "CheckDigitizer.html#.checkDigit",
                                    "tf": 25
                                  },
                                  "Gender.html#.toArray": {
                                    "ref": "Gender.html#.toArray",
                                    "tf": 33.33333333333333
                                  },
                                  "Parser.html#.cfDeomocode": {
                                    "ref": "Parser.html#.cfDeomocode",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToSurname": {
                                    "ref": "Parser.html#.cfToSurname",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToName": {
                                    "ref": "Parser.html#.cfToName",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToGender": {
                                    "ref": "Parser.html#.cfToGender",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToBirthYear": {
                                    "ref": "Parser.html#.cfToBirthYear",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToBirthMonth": {
                                    "ref": "Parser.html#.cfToBirthMonth",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToBirthDay": {
                                    "ref": "Parser.html#.cfToBirthDay",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToBirthDate": {
                                    "ref": "Parser.html#.cfToBirthDate",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfToBirthPlace": {
                                    "ref": "Parser.html#.cfToBirthPlace",
                                    "tf": 25
                                  },
                                  "Parser.html#.cfDecode": {
                                    "ref": "Parser.html#.cfDecode",
                                    "tf": 25
                                  },
                                  "Parser.html#.surnameToCf": {
                                    "ref": "Parser.html#.surnameToCf",
                                    "tf": 25
                                  },
                                  "Parser.html#.nameToCf": {
                                    "ref": "Parser.html#.nameToCf",
                                    "tf": 25
                                  },
                                  "Parser.html#.yearToCf": {
                                    "ref": "Parser.html#.yearToCf",
                                    "tf": 25
                                  },
                                  "Parser.html#.monthToCf": {
                                    "ref": "Parser.html#.monthToCf",
                                    "tf": 25
                                  },
                                  "Parser.html#.yearMonthDayToDate": {
                                    "ref": "Parser.html#.yearMonthDayToDate",
                                    "tf": 16.666666666666664
                                  },
                                  "Parser.html#.parseDate": {
                                    "ref": "Parser.html#.parseDate",
                                    "tf": 25
                                  },
                                  "Parser.html#.dateGenderToCf": {
                                    "ref": "Parser.html#.dateGenderToCf",
                                    "tf": 20
                                  },
                                  "Parser.html#.placeToCf": {
                                    "ref": "Parser.html#.placeToCf",
                                    "tf": 20
                                  },
                                  "Parser.html#.encodeCf": {
                                    "ref": "Parser.html#.encodeCf",
                                    "tf": 25
                                  },
                                  "Parser.html#.dayGenderToCf": {
                                    "ref": "Parser.html#.dayGenderToCf",
                                    "tf": 20
                                  },
                                  "Validator_.html#.cfSurname": {
                                    "ref": "Validator_.html#.cfSurname",
                                    "tf": 25
                                  },
                                  "Validator_.html#.cfName": {
                                    "ref": "Validator_.html#.cfName",
                                    "tf": 25
                                  },
                                  "Validator_.html#.cfYear": {
                                    "ref": "Validator_.html#.cfYear",
                                    "tf": 25
                                  },
                                  "Validator_.html#.cfMonth": {
                                    "ref": "Validator_.html#.cfMonth",
                                    "tf": 25
                                  },
                                  "Validator_.html#.cfDay": {
                                    "ref": "Validator_.html#.cfDay",
                                    "tf": 25
                                  },
                                  "Validator_.html#.cfDayGender": {
                                    "ref": "Validator_.html#.cfDayGender",
                                    "tf": 20
                                  },
                                  "Validator_.html#.cfDateGender": {
                                    "ref": "Validator_.html#.cfDateGender",
                                    "tf": 20
                                  },
                                  "Validator_.html#.cfPlace": {
                                    "ref": "Validator_.html#.cfPlace",
                                    "tf": 20
                                  },
                                  "Validator_.html#.codiceFiscale": {
                                    "ref": "Validator_.html#.codiceFiscale",
                                    "tf": 25
                                  },
                                  "Validator_.html#.surname": {
                                    "ref": "Validator_.html#.surname",
                                    "tf": 25
                                  },
                                  "Validator_.html#.name": {
                                    "ref": "Validator_.html#.name",
                                    "tf": 25
                                  },
                                  "Validator_.html#.date": {
                                    "ref": "Validator_.html#.date",
                                    "tf": 25
                                  },
                                  "Validator_.html#.gender": {
                                    "ref": "Validator_.html#.gender",
                                    "tf": 25
                                  },
                                  "Validator_.html#.place": {
                                    "ref": "Validator_.html#.place",
                                    "tf": 25
                                  },
                                  "Validator_.html#.isValid": {
                                    "ref": "Validator_.html#.isValid",
                                    "tf": 25
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "CheckDigitizer.html#.checkDigit": {
                    "ref": "CheckDigitizer.html#.checkDigit",
                    "tf": 5.555555555555555
                  }
                }
              }
            }
          }
        },
        "m": {
          "docs": {},
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "u": {
                "docs": {},
                "l": {
                  "docs": {
                    "list_module.html": {
                      "ref": "list_module.html",
                      "tf": 635
                    },
                    "module-CodiceFiscaleUtils.html": {
                      "ref": "module-CodiceFiscaleUtils.html",
                      "tf": 110
                    }
                  },
                  "e": {
                    "docs": {},
                    ":": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "f": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "u": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {
                                                          "module-CodiceFiscaleUtils.html": {
                                                            "ref": "module-CodiceFiscaleUtils.html",
                                                            "tf": 1300
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "docs": {
                    "Parser.html#.cfToBirthMonth": {
                      "ref": "Parser.html#.cfToBirthMonth",
                      "tf": 12.5
                    },
                    "Parser.html#.monthToCf": {
                      "ref": "Parser.html#.monthToCf",
                      "tf": 41.666666666666664
                    },
                    "Parser.html#.yearMonthDayToDate": {
                      "ref": "Parser.html#.yearMonthDayToDate",
                      "tf": 26.666666666666664
                    },
                    "Validator_.html#.cfMonth": {
                      "ref": "Validator_.html#.cfMonth",
                      "tf": 35
                    }
                  },
                  "t": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "f": {
                          "docs": {
                            "Parser.html#.monthToCf": {
                              "ref": "Parser.html#.monthToCf",
                              "tf": 675
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Parser.html#.OMOCODE_BITMAP": {
                        "ref": "Parser.html#.OMOCODE_BITMAP",
                        "tf": 110
                      }
                    }
                  }
                }
              }
            }
          },
          "'": {
            "docs": {},
            "|": {
              "docs": {},
              "'": {
                "docs": {},
                "f": {
                  "docs": {},
                  "'": {
                    "docs": {},
                    "|": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "l": {
                              "docs": {
                                "Parser.html#.cfToGender": {
                                  "ref": "Parser.html#.cfToGender",
                                  "tf": 25
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "n": {
          "docs": {},
          "a": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "Parser.html#.cfToName": {
                    "ref": "Parser.html#.cfToName",
                    "tf": 16.666666666666664
                  },
                  "Parser.html#.nameToCf": {
                    "ref": "Parser.html#.nameToCf",
                    "tf": 37.5
                  },
                  "Parser.html#.placeToCf": {
                    "ref": "Parser.html#.placeToCf",
                    "tf": 28.333333333333332
                  },
                  "Validator_.html#.cfName": {
                    "ref": "Validator_.html#.cfName",
                    "tf": 35
                  },
                  "Validator_.html#.name": {
                    "ref": "Validator_.html#.name",
                    "tf": 682.1428571428571
                  }
                },
                "s": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "c": {
                        "docs": {
                          "list_namespace.html": {
                            "ref": "list_namespace.html",
                            "tf": 635
                          },
                          "Belfiore.html": {
                            "ref": "Belfiore.html",
                            "tf": 110
                          },
                          "BirthMonth.html": {
                            "ref": "BirthMonth.html",
                            "tf": 110
                          },
                          "CheckDigitizer.html": {
                            "ref": "CheckDigitizer.html",
                            "tf": 110
                          },
                          "DATE_VALIDATOR.html": {
                            "ref": "DATE_VALIDATOR.html",
                            "tf": 110
                          },
                          "Gender.html": {
                            "ref": "Gender.html",
                            "tf": 110
                          },
                          "Omocode.html": {
                            "ref": "Omocode.html",
                            "tf": 110
                          },
                          "Parser.html": {
                            "ref": "Parser.html",
                            "tf": 110
                          },
                          "VALIDATOR.html": {
                            "ref": "VALIDATOR.html",
                            "tf": 110
                          },
                          "Validator_.html": {
                            "ref": "Validator_.html",
                            "tf": 110
                          }
                        }
                      }
                    }
                  }
                },
                "t": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "f": {
                        "docs": {
                          "Parser.html#.nameToCf": {
                            "ref": "Parser.html#.nameToCf",
                            "tf": 675
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "CheckDigitizer.html#.evaluateChar": {
                        "ref": "CheckDigitizer.html#.evaluateChar",
                        "tf": 20
                      }
                    },
                    "|": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "Parser.html#.cfToBirthYear": {
                                "ref": "Parser.html#.cfToBirthYear",
                                "tf": 25
                              },
                              "Parser.html#.cfToBirthMonth": {
                                "ref": "Parser.html#.cfToBirthMonth",
                                "tf": 25
                              },
                              "Parser.html#.cfToBirthDay": {
                                "ref": "Parser.html#.cfToBirthDay",
                                "tf": 25
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "e": {
          "docs": {},
          "v": {
            "docs": {},
            "a": {
              "docs": {},
              "l": {
                "docs": {},
                "u": {
                  "docs": {
                    "CheckDigitizer.html#.evaluateChar": {
                      "ref": "CheckDigitizer.html#.evaluateChar",
                      "tf": 16.666666666666664
                    },
                    "CheckDigitizer.html#.checkDigit": {
                      "ref": "CheckDigitizer.html#.checkDigit",
                      "tf": 5.555555555555555
                    }
                  },
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "h": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "r": {
                                "docs": {
                                  "CheckDigitizer.html#.evaluateChar": {
                                    "ref": "CheckDigitizer.html#.evaluateChar",
                                    "tf": 670
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "r": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "Errors.html": {
                      "ref": "Errors.html",
                      "tf": 1900
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "c": {
              "docs": {},
              "o": {
                "docs": {},
                "d": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "f": {
                        "docs": {
                          "Parser.html#.encodeCf": {
                            "ref": "Parser.html#.encodeCf",
                            "tf": 675
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "p": {
          "docs": {},
          "a": {
            "docs": {},
            "r": {
              "docs": {},
              "t": {
                "docs": {
                  "Parser.html#.surnameToCf": {
                    "ref": "Parser.html#.surnameToCf",
                    "tf": 12.5
                  },
                  "Parser.html#.nameToCf": {
                    "ref": "Parser.html#.nameToCf",
                    "tf": 12.5
                  },
                  "Parser.html#.yearToCf": {
                    "ref": "Parser.html#.yearToCf",
                    "tf": 12.5
                  },
                  "Parser.html#.parseDate": {
                    "ref": "Parser.html#.parseDate",
                    "tf": 6.25
                  },
                  "Parser.html#.dateGenderToCf": {
                    "ref": "Parser.html#.dateGenderToCf",
                    "tf": 6.25
                  },
                  "Parser.html#.placeToCf": {
                    "ref": "Parser.html#.placeToCf",
                    "tf": 6.25
                  }
                },
                "i": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "CheckDigitizer.html#.evaluateChar": {
                          "ref": "CheckDigitizer.html#.evaluateChar",
                          "tf": 16.666666666666664
                        },
                        "CheckDigitizer.html#.checkDigit": {
                          "ref": "CheckDigitizer.html#.checkDigit",
                          "tf": 5.555555555555555
                        }
                      },
                      "c": {
                        "docs": {},
                        "f": {
                          "docs": {
                            "CheckDigitizer.html#.evaluateChar": {
                              "ref": "CheckDigitizer.html#.evaluateChar",
                              "tf": 20
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {
                  "Parser.html#.cfDeomocode": {
                    "ref": "Parser.html#.cfDeomocode",
                    "tf": 16.666666666666664
                  },
                  "Parser.html#.cfToSurname": {
                    "ref": "Parser.html#.cfToSurname",
                    "tf": 16.666666666666664
                  },
                  "Parser.html#.cfToName": {
                    "ref": "Parser.html#.cfToName",
                    "tf": 16.666666666666664
                  },
                  "Parser.html#.cfToGender": {
                    "ref": "Parser.html#.cfToGender",
                    "tf": 16.666666666666664
                  },
                  "Parser.html#.cfToBirthYear": {
                    "ref": "Parser.html#.cfToBirthYear",
                    "tf": 12.5
                  },
                  "Parser.html#.cfToBirthMonth": {
                    "ref": "Parser.html#.cfToBirthMonth",
                    "tf": 12.5
                  },
                  "Parser.html#.cfToBirthDay": {
                    "ref": "Parser.html#.cfToBirthDay",
                    "tf": 12.5
                  },
                  "Parser.html#.cfToBirthDate": {
                    "ref": "Parser.html#.cfToBirthDate",
                    "tf": 12.5
                  },
                  "Parser.html#.cfToBirthPlace": {
                    "ref": "Parser.html#.cfToBirthPlace",
                    "tf": 12.5
                  },
                  "Parser.html#.surnameToCf": {
                    "ref": "Parser.html#.surnameToCf",
                    "tf": 12.5
                  },
                  "Parser.html#.nameToCf": {
                    "ref": "Parser.html#.nameToCf",
                    "tf": 12.5
                  },
                  "Parser.html#.yearToCf": {
                    "ref": "Parser.html#.yearToCf",
                    "tf": 12.5
                  },
                  "Parser.html#.monthToCf": {
                    "ref": "Parser.html#.monthToCf",
                    "tf": 16.666666666666664
                  },
                  "Parser.html#.yearMonthDayToDate": {
                    "ref": "Parser.html#.yearMonthDayToDate",
                    "tf": 10
                  },
                  "Parser.html#.parseDate": {
                    "ref": "Parser.html#.parseDate",
                    "tf": 6.25
                  },
                  "Parser.html#.dateGenderToCf": {
                    "ref": "Parser.html#.dateGenderToCf",
                    "tf": 6.25
                  },
                  "Parser.html#.placeToCf": {
                    "ref": "Parser.html#.placeToCf",
                    "tf": 8.333333333333332
                  },
                  "Parser.html#.dayGenderToCf": {
                    "ref": "Parser.html#.dayGenderToCf",
                    "tf": 16.666666666666664
                  }
                },
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Parser.html": {
                        "ref": "Parser.html",
                        "tf": 1900
                      }
                    },
                    ".": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "_": {
                                      "docs": {},
                                      "b": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {
                                                    "Parser.html#.OMOCODE_BITMAP": {
                                                      "ref": "Parser.html#.OMOCODE_BITMAP",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "c": {
                        "docs": {},
                        "f": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "d": {
                                          "docs": {
                                            "Parser.html#.cfDeomocode": {
                                              "ref": "Parser.html#.cfDeomocode",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "c": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "d": {
                                    "docs": {
                                      "Parser.html#.cfDecode": {
                                        "ref": "Parser.html#.cfDecode",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "t": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "u": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "m": {
                                          "docs": {
                                            "Parser.html#.cfToSurname": {
                                              "ref": "Parser.html#.cfToSurname",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "n": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "m": {
                                    "docs": {
                                      "Parser.html#.cfToName": {
                                        "ref": "Parser.html#.cfToName",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              },
                              "g": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "d": {
                                      "docs": {
                                        "Parser.html#.cfToGender": {
                                          "ref": "Parser.html#.cfToGender",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "b": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "h": {
                                        "docs": {},
                                        "y": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "r": {
                                                "docs": {
                                                  "Parser.html#.cfToBirthYear": {
                                                    "ref": "Parser.html#.cfToBirthYear",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "m": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "h": {
                                                  "docs": {
                                                    "Parser.html#.cfToBirthMonth": {
                                                      "ref": "Parser.html#.cfToBirthMonth",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "d": {
                                          "docs": {
                                            "Parser.html#.cfToBirthDate": {
                                              "ref": "Parser.html#.cfToBirthDate",
                                              "tf": 1150
                                            }
                                          },
                                          "a": {
                                            "docs": {},
                                            "y": {
                                              "docs": {
                                                "Parser.html#.cfToBirthDay": {
                                                  "ref": "Parser.html#.cfToBirthDay",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "p": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "c": {
                                                "docs": {
                                                  "Parser.html#.cfToBirthPlace": {
                                                    "ref": "Parser.html#.cfToBirthPlace",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "s": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "f": {
                                            "docs": {
                                              "Parser.html#.surnameToCf": {
                                                "ref": "Parser.html#.surnameToCf",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "n": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "f": {
                                      "docs": {
                                        "Parser.html#.nameToCf": {
                                          "ref": "Parser.html#.nameToCf",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "y": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "f": {
                                      "docs": {
                                        "Parser.html#.yearToCf": {
                                          "ref": "Parser.html#.yearToCf",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "m": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "h": {
                                        "docs": {},
                                        "d": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "y": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "Parser.html#.yearMonthDayToDate": {
                                                        "ref": "Parser.html#.yearMonthDayToDate",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "m": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "h": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "f": {
                                        "docs": {
                                          "Parser.html#.monthToCf": {
                                            "ref": "Parser.html#.monthToCf",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "p": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "d": {
                                  "docs": {
                                    "Parser.html#.parseDate": {
                                      "ref": "Parser.html#.parseDate",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "l": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "f": {
                                        "docs": {
                                          "Parser.html#.placeToCf": {
                                            "ref": "Parser.html#.placeToCf",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "d": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "g": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "c": {
                                                "docs": {},
                                                "f": {
                                                  "docs": {
                                                    "Parser.html#.dateGenderToCf": {
                                                      "ref": "Parser.html#.dateGenderToCf",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "y": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "d": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "c": {
                                              "docs": {},
                                              "f": {
                                                "docs": {
                                                  "Parser.html#.dayGenderToCf": {
                                                    "ref": "Parser.html#.dayGenderToCf",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "e": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "f": {
                                      "docs": {
                                        "Parser.html#.encodeCf": {
                                          "ref": "Parser.html#.encodeCf",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "d": {
                    "docs": {
                      "Parser.html#.parseDate": {
                        "ref": "Parser.html#.parseDate",
                        "tf": 675
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "d": {
                "docs": {},
                "u": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "CheckDigitizer.html#.checkDigit": {
                        "ref": "CheckDigitizer.html#.checkDigit",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              },
              "p": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "DATE_VALIDATOR.html": {
                            "ref": "DATE_VALIDATOR.html",
                            "tf": 16.666666666666664
                          }
                        }
                      }
                    }
                  }
                }
              },
              "v": {
                "docs": {},
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "c": {
                      "docs": {
                        "Parser.html#.placeToCf": {
                          "ref": "Parser.html#.placeToCf",
                          "tf": 28.333333333333332
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "c": {
                "docs": {},
                "e": {
                  "docs": {
                    "Parser.html#.cfToBirthPlace": {
                      "ref": "Parser.html#.cfToBirthPlace",
                      "tf": 12.5
                    },
                    "Parser.html#.placeToCf": {
                      "ref": "Parser.html#.placeToCf",
                      "tf": 8.333333333333332
                    },
                    "Validator_.html#.place": {
                      "ref": "Validator_.html#.place",
                      "tf": 682.1428571428571
                    }
                  },
                  "t": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "f": {
                          "docs": {
                            "Parser.html#.placeToCf": {
                              "ref": "Parser.html#.placeToCf",
                              "tf": 670
                            }
                          }
                        }
                      }
                    }
                  },
                  "n": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "m": {
                        "docs": {
                          "Validator_.html#.cfPlace": {
                            "ref": "Validator_.html#.cfPlace",
                            "tf": 20
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "s": {
          "docs": {},
          "t": {
            "docs": {},
            "a": {
              "docs": {},
              "t": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "&": {
                      "docs": {},
                      "g": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "CheckDigitizer.html#.evaluateChar": {
                              "ref": "CheckDigitizer.html#.evaluateChar",
                              "tf": 20
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "g": {
                    "docs": {},
                    "|": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "Parser.html#.cfDeomocode": {
                                "ref": "Parser.html#.cfDeomocode",
                                "tf": 25
                              },
                              "Parser.html#.cfToSurname": {
                                "ref": "Parser.html#.cfToSurname",
                                "tf": 25
                              },
                              "Parser.html#.cfToName": {
                                "ref": "Parser.html#.cfToName",
                                "tf": 25
                              },
                              "Parser.html#.surnameToCf": {
                                "ref": "Parser.html#.surnameToCf",
                                "tf": 25
                              },
                              "Parser.html#.nameToCf": {
                                "ref": "Parser.html#.nameToCf",
                                "tf": 25
                              },
                              "Parser.html#.yearToCf": {
                                "ref": "Parser.html#.yearToCf",
                                "tf": 25
                              },
                              "Parser.html#.monthToCf": {
                                "ref": "Parser.html#.monthToCf",
                                "tf": 25
                              },
                              "Parser.html#.dateGenderToCf": {
                                "ref": "Parser.html#.dateGenderToCf",
                                "tf": 20
                              },
                              "Parser.html#.placeToCf": {
                                "ref": "Parser.html#.placeToCf",
                                "tf": 20
                              },
                              "Parser.html#.encodeCf": {
                                "ref": "Parser.html#.encodeCf",
                                "tf": 25
                              },
                              "Parser.html#.dayGenderToCf": {
                                "ref": "Parser.html#.dayGenderToCf",
                                "tf": 20
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "r": {
              "docs": {},
              "n": {
                "docs": {},
                "a": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "Parser.html#.cfDeomocode": {
                        "ref": "Parser.html#.cfDeomocode",
                        "tf": 16.666666666666664
                      },
                      "Parser.html#.cfToSurname": {
                        "ref": "Parser.html#.cfToSurname",
                        "tf": 16.666666666666664
                      },
                      "Parser.html#.surnameToCf": {
                        "ref": "Parser.html#.surnameToCf",
                        "tf": 37.5
                      },
                      "Validator_.html#.cfSurname": {
                        "ref": "Validator_.html#.cfSurname",
                        "tf": 35
                      },
                      "Validator_.html#.surname": {
                        "ref": "Validator_.html#.surname",
                        "tf": 682.1428571428571
                      }
                    },
                    "e": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "f": {
                              "docs": {
                                "Parser.html#.surnameToCf": {
                                  "ref": "Parser.html#.surnameToCf",
                                  "tf": 675
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "b": {
          "docs": {},
          "e": {
            "docs": {},
            "l": {
              "docs": {},
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "Belfiore.html": {
                          "ref": "Belfiore.html",
                          "tf": 1900
                        },
                        "Parser.html#.placeToCf": {
                          "ref": "Parser.html#.placeToCf",
                          "tf": 8.333333333333332
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "r": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "docs": {
                    "Parser.html#.cfToBirthYear": {
                      "ref": "Parser.html#.cfToBirthYear",
                      "tf": 12.5
                    },
                    "Parser.html#.cfToBirthMonth": {
                      "ref": "Parser.html#.cfToBirthMonth",
                      "tf": 12.5
                    },
                    "Parser.html#.cfToBirthDay": {
                      "ref": "Parser.html#.cfToBirthDay",
                      "tf": 12.5
                    },
                    "Parser.html#.cfToBirthDate": {
                      "ref": "Parser.html#.cfToBirthDate",
                      "tf": 12.5
                    },
                    "Parser.html#.cfToBirthPlace": {
                      "ref": "Parser.html#.cfToBirthPlace",
                      "tf": 12.5
                    },
                    "Validator_.html#.isValid": {
                      "ref": "Validator_.html#.isValid",
                      "tf": 5.555555555555555
                    }
                  },
                  "m": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "h": {
                            "docs": {
                              "BirthMonth.html": {
                                "ref": "BirthMonth.html",
                                "tf": 1900
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "m": {
                "docs": {},
                "a": {
                  "docs": {},
                  "p": {
                    "docs": {
                      "Parser.html#.OMOCODE_BITMAP": {
                        "ref": "Parser.html#.OMOCODE_BITMAP",
                        "tf": 16.666666666666664
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "e": {
                "docs": {
                  "Validator_.html#.codiceFiscale": {
                    "ref": "Validator_.html#.codiceFiscale",
                    "tf": 5.555555555555555
                  },
                  "Validator_.html#.surname": {
                    "ref": "Validator_.html#.surname",
                    "tf": 7.142857142857142
                  },
                  "Validator_.html#.name": {
                    "ref": "Validator_.html#.name",
                    "tf": 7.142857142857142
                  },
                  "Validator_.html#.date": {
                    "ref": "Validator_.html#.date",
                    "tf": 6.25
                  },
                  "Validator_.html#.gender": {
                    "ref": "Validator_.html#.gender",
                    "tf": 7.142857142857142
                  },
                  "Validator_.html#.place": {
                    "ref": "Validator_.html#.place",
                    "tf": 7.142857142857142
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "o": {
              "docs": {},
              "l": {
                "docs": {},
                "e": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "Validator_.html#.isValid": {
                          "ref": "Validator_.html#.isValid",
                          "tf": 25
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "v": {
          "docs": {},
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "i": {
                "docs": {},
                "d": {
                  "docs": {
                    "DATE_VALIDATOR.html": {
                      "ref": "DATE_VALIDATOR.html",
                      "tf": 16.666666666666664
                    },
                    "VALIDATOR.html": {
                      "ref": "VALIDATOR.html",
                      "tf": 1925
                    },
                    "Validator_.html": {
                      "ref": "Validator_.html",
                      "tf": 1900
                    },
                    "Validator_.html#.cfSurname": {
                      "ref": "Validator_.html#.cfSurname",
                      "tf": 10
                    },
                    "Validator_.html#.cfName": {
                      "ref": "Validator_.html#.cfName",
                      "tf": 10
                    },
                    "Validator_.html#.cfYear": {
                      "ref": "Validator_.html#.cfYear",
                      "tf": 10
                    },
                    "Validator_.html#.cfMonth": {
                      "ref": "Validator_.html#.cfMonth",
                      "tf": 10
                    },
                    "Validator_.html#.cfDay": {
                      "ref": "Validator_.html#.cfDay",
                      "tf": 10
                    },
                    "Validator_.html#.cfDayGender": {
                      "ref": "Validator_.html#.cfDayGender",
                      "tf": 10
                    },
                    "Validator_.html#.cfDateGender": {
                      "ref": "Validator_.html#.cfDateGender",
                      "tf": 10
                    },
                    "Validator_.html#.codiceFiscale": {
                      "ref": "Validator_.html#.codiceFiscale",
                      "tf": 5.555555555555555
                    },
                    "Validator_.html#.surname": {
                      "ref": "Validator_.html#.surname",
                      "tf": 7.142857142857142
                    },
                    "Validator_.html#.name": {
                      "ref": "Validator_.html#.name",
                      "tf": 7.142857142857142
                    },
                    "Validator_.html#.date": {
                      "ref": "Validator_.html#.date",
                      "tf": 6.25
                    },
                    "Validator_.html#.gender": {
                      "ref": "Validator_.html#.gender",
                      "tf": 7.142857142857142
                    },
                    "Validator_.html#.place": {
                      "ref": "Validator_.html#.place",
                      "tf": 7.142857142857142
                    },
                    "Validator_.html#.isValid": {
                      "ref": "Validator_.html#.isValid",
                      "tf": 5.555555555555555
                    }
                  },
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          ".": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "f": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "m": {
                                            "docs": {
                                              "Validator_.html#.cfSurname": {
                                                "ref": "Validator_.html#.cfSurname",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "n": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "m": {
                                      "docs": {
                                        "Validator_.html#.cfName": {
                                          "ref": "Validator_.html#.cfName",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                },
                                "y": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "r": {
                                        "docs": {
                                          "Validator_.html#.cfYear": {
                                            "ref": "Validator_.html#.cfYear",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "m": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "h": {
                                          "docs": {
                                            "Validator_.html#.cfMonth": {
                                              "ref": "Validator_.html#.cfMonth",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "d": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "y": {
                                      "docs": {
                                        "Validator_.html#.cfDay": {
                                          "ref": "Validator_.html#.cfDay",
                                          "tf": 1150
                                        }
                                      },
                                      "g": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "Validator_.html#.cfDayGender": {
                                                  "ref": "Validator_.html#.cfDayGender",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "t": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "g": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "d": {
                                                "docs": {
                                                  "Validator_.html#.cfDateGender": {
                                                    "ref": "Validator_.html#.cfDateGender",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "p": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "c": {
                                        "docs": {
                                          "Validator_.html#.cfPlace": {
                                            "ref": "Validator_.html#.cfPlace",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "o": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "f": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "c": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {
                                                      "Validator_.html#.codiceFiscale": {
                                                        "ref": "Validator_.html#.codiceFiscale",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "s": {
                              "docs": {},
                              "u": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "m": {
                                        "docs": {
                                          "Validator_.html#.surname": {
                                            "ref": "Validator_.html#.surname",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "n": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "m": {
                                  "docs": {
                                    "Validator_.html#.name": {
                                      "ref": "Validator_.html#.name",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            },
                            "d": {
                              "docs": {
                                "Validator_.html#.date": {
                                  "ref": "Validator_.html#.date",
                                  "tf": 1150
                                }
                              }
                            },
                            "g": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "d": {
                                    "docs": {
                                      "Validator_.html#.gender": {
                                        "ref": "Validator_.html#.gender",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "p": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "c": {
                                    "docs": {
                                      "Validator_.html#.place": {
                                        "ref": "Validator_.html#.place",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "i": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "v": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "d": {
                                          "docs": {
                                            "Validator_.html#.isValid": {
                                              "ref": "Validator_.html#.isValid",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "a": {
          "docs": {},
          "r": {
            "docs": {},
            "r": {
              "docs": {},
              "a": {
                "docs": {},
                "y": {
                  "docs": {
                    "Gender.html#.toArray": {
                      "ref": "Gender.html#.toArray",
                      "tf": 12.5
                    }
                  },
                  ".": {
                    "docs": {},
                    "&": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          ";": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "g": {
                                        "docs": {},
                                        "&": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "t": {
                                              "docs": {
                                                "Gender.html#.toArray": {
                                                  "ref": "Gender.html#.toArray",
                                                  "tf": 33.33333333333333
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "t": {
          "docs": {},
          "o": {
            "docs": {},
            "a": {
              "docs": {},
              "r": {
                "docs": {},
                "r": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "y": {
                      "docs": {
                        "Gender.html#.toArray": {
                          "ref": "Gender.html#.toArray",
                          "tf": 683.3333333333334
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "o": {
          "docs": {},
          "m": {
            "docs": {},
            "o": {
              "docs": {},
              "c": {
                "docs": {},
                "o": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Omocode.html": {
                        "ref": "Omocode.html",
                        "tf": 1900
                      },
                      "Parser.html#.OMOCODE_BITMAP": {
                        "ref": "Parser.html#.OMOCODE_BITMAP",
                        "tf": 16.666666666666664
                      }
                    },
                    "e": {
                      "docs": {},
                      "_": {
                        "docs": {},
                        "b": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "m": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "p": {
                                    "docs": {
                                      "Parser.html#.OMOCODE_BITMAP": {
                                        "ref": "Parser.html#.OMOCODE_BITMAP",
                                        "tf": 683.3333333333334
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "b": {
            "docs": {},
            "j": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Parser.html#.cfToBirthPlace": {
                        "ref": "Parser.html#.cfToBirthPlace",
                        "tf": 25
                      },
                      "Parser.html#.cfDecode": {
                        "ref": "Parser.html#.cfDecode",
                        "tf": 25
                      }
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Validator_.html#.codiceFiscale": {
                        "ref": "Validator_.html#.codiceFiscale",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "y": {
          "docs": {},
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "r": {
                "docs": {
                  "Parser.html#.cfToBirthYear": {
                    "ref": "Parser.html#.cfToBirthYear",
                    "tf": 12.5
                  },
                  "Parser.html#.yearToCf": {
                    "ref": "Parser.html#.yearToCf",
                    "tf": 37.5
                  },
                  "Parser.html#.yearMonthDayToDate": {
                    "ref": "Parser.html#.yearMonthDayToDate",
                    "tf": 26.666666666666664
                  },
                  "Validator_.html#.cfYear": {
                    "ref": "Validator_.html#.cfYear",
                    "tf": 35
                  },
                  "Validator_.html#.cfDay": {
                    "ref": "Validator_.html#.cfDay",
                    "tf": 10
                  },
                  "Validator_.html#.cfDayGender": {
                    "ref": "Validator_.html#.cfDayGender",
                    "tf": 10
                  },
                  "Validator_.html#.cfDateGender": {
                    "ref": "Validator_.html#.cfDateGender",
                    "tf": 10
                  }
                },
                "t": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "f": {
                        "docs": {
                          "Parser.html#.yearToCf": {
                            "ref": "Parser.html#.yearToCf",
                            "tf": 675
                          }
                        }
                      }
                    }
                  }
                },
                "m": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "h": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "y": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "d": {
                                      "docs": {
                                        "Parser.html#.yearMonthDayToDate": {
                                          "ref": "Parser.html#.yearMonthDayToDate",
                                          "tf": 666.6666666666666
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "length": 505
    },
    "corpusTokens": [
      "16th",
      "array",
      "array.&lt;string&gt",
      "base",
      "belfior",
      "birth",
      "birthmonth",
      "bitmap",
      "boolean",
      "calcul",
      "cf",
      "cfdategend",
      "cfday",
      "cfdaygend",
      "cfdecod",
      "cfdeomocod",
      "cfmonth",
      "cfname",
      "cfplace",
      "cfsurnam",
      "cftobirthd",
      "cftobirthday",
      "cftobirthmonth",
      "cftobirthplac",
      "cftobirthyear",
      "cftogend",
      "cftonam",
      "cftosurnam",
      "cfyear",
      "char",
      "charact",
      "char|nul",
      "check",
      "checkdigit",
      "checkdigitizer.checkdigit",
      "checkdigitizer.evaluatechar",
      "citi",
      "class",
      "code",
      "codic",
      "codicefisc",
      "codicefiscal",
      "codicefiscaleutil",
      "constant",
      "countri",
      "creat",
      "dataset",
      "date",
      "date/gend",
      "date/plac",
      "date_valid",
      "dategendertocf",
      "date|nul",
      "day",
      "daygendertocf",
      "default",
      "digit",
      "document",
      "encodecf",
      "error",
      "evalu",
      "evaluatechar",
      "fiscal",
      "fiscalcod",
      "form",
      "full",
      "function",
      "gender",
      "gender.toarray",
      "gener",
      "given",
      "global",
      "handl",
      "handler",
      "index",
      "inform",
      "input",
      "iso8601",
      "isvalid",
      "italian",
      "js",
      "last",
      "list",
      "list:class",
      "list:modul",
      "list:namespac",
      "lt;gener",
      "lt;static",
      "lt;static&gt",
      "m'|'f'|null",
      "member",
      "modul",
      "module:codicefiscaleutil",
      "month",
      "monthtocf",
      "name",
      "namespac",
      "nametocf",
      "number",
      "number|nul",
      "object",
      "omocod",
      "omocode_bitmap",
      "option",
      "pars",
      "parsed",
      "parser",
      "parser.cfdecod",
      "parser.cfdeomocod",
      "parser.cftobirthd",
      "parser.cftobirthday",
      "parser.cftobirthmonth",
      "parser.cftobirthplac",
      "parser.cftobirthyear",
      "parser.cftogend",
      "parser.cftonam",
      "parser.cftosurnam",
      "parser.dategendertocf",
      "parser.daygendertocf",
      "parser.encodecf",
      "parser.monthtocf",
      "parser.nametocf",
      "parser.omocode_bitmap",
      "parser.parsed",
      "parser.placetocf",
      "parser.surnametocf",
      "parser.yearmonthdaytod",
      "parser.yeartocf",
      "part",
      "partial",
      "partialcf",
      "place",
      "placenam",
      "placetocf",
      "produc",
      "properti",
      "provinc",
      "readm",
      "readonly&gt",
      "regexp",
      "return",
      "static&gt",
      "string|nul",
      "surnam",
      "surnametocf",
      "toarray",
      "util",
      "valid",
      "validator.cfdategend",
      "validator.cfday",
      "validator.cfdaygend",
      "validator.cfmonth",
      "validator.cfnam",
      "validator.cfplac",
      "validator.cfsurnam",
      "validator.cfyear",
      "validator.codicefiscal",
      "validator.d",
      "validator.gend",
      "validator.isvalid",
      "validator.nam",
      "validator.plac",
      "validator.surnam",
      "year",
      "yearmonthdaytod",
      "yeartocf"
    ],
    "pipeline": [
      "trimmer",
      "stopWordFilter",
      "stemmer"
    ]
  },
  "store": {
    "index.html": {
      "id": "index.html",
      "kind": "readme",
      "title": "Codice Fiscale Utils",
      "longname": "index",
      "name": "Codice Fiscale Utils",
      "tags": "index",
      "summary": "JS utilities to handle Italian Codice Fiscale",
      "description": "",
      "body": ""
    },
    "global.html": {
      "id": "global.html",
      "kind": "global",
      "title": "Globals",
      "longname": "global",
      "name": "Globals",
      "tags": "global",
      "summary": "All documented globals.",
      "description": "",
      "body": ""
    },
    "list_class.html": {
      "id": "list_class.html",
      "kind": "list",
      "title": "Classes",
      "longname": "list:class",
      "name": "Classes",
      "tags": "list:class",
      "summary": "All documented classes.",
      "description": "",
      "body": ""
    },
    "list_module.html": {
      "id": "list_module.html",
      "kind": "list",
      "title": "Modules",
      "longname": "list:module",
      "name": "Modules",
      "tags": "list:module",
      "summary": "All documented modules.",
      "description": "",
      "body": ""
    },
    "list_namespace.html": {
      "id": "list_namespace.html",
      "kind": "list",
      "title": "Namespaces",
      "longname": "list:namespace",
      "name": "Namespaces",
      "tags": "list:namespace",
      "summary": "All documented namespaces.",
      "description": "",
      "body": ""
    },
    "CheckDigitizer.html": {
      "id": "CheckDigitizer.html",
      "kind": "namespace",
      "title": "CheckDigitizer",
      "longname": "CheckDigitizer",
      "name": "CheckDigitizer",
      "tags": "CheckDigitizer",
      "summary": "",
      "description": "",
      "body": ""
    },
    "CheckDigitizer.html#.evaluateChar": {
      "id": "CheckDigitizer.html#.evaluateChar",
      "kind": "function",
      "title": "&lt;generator, static&gt; evaluateChar( [ partialCF ] ) → {number}",
      "longname": "CheckDigitizer.evaluateChar",
      "name": "evaluateChar",
      "tags": "CheckDigitizer.evaluateChar evaluateChar",
      "summary": "",
      "description": "Partial FiscalCode Evaluator"
    },
    "CheckDigitizer.html#.checkDigit": {
      "id": "CheckDigitizer.html#.checkDigit",
      "kind": "function",
      "title": "&lt;static&gt; checkDigit( codiceFiscale ) → {char|null}",
      "longname": "CheckDigitizer.checkDigit",
      "name": "checkDigit",
      "tags": "CheckDigitizer.checkDigit checkDigit",
      "summary": "",
      "description": "Evaluate given partial CF to produce last check digit character"
    },
    "Errors.html": {
      "id": "Errors.html",
      "kind": "class",
      "title": "Errors",
      "longname": "Errors",
      "name": "Errors",
      "tags": "Errors",
      "summary": "",
      "description": "",
      "body": ""
    },
    "module-CodiceFiscaleUtils.html": {
      "id": "module-CodiceFiscaleUtils.html",
      "kind": "module",
      "title": "CodiceFiscaleUtils",
      "longname": "module:CodiceFiscaleUtils",
      "name": "CodiceFiscaleUtils",
      "tags": "module:CodiceFiscaleUtils",
      "summary": "",
      "description": "",
      "body": ""
    },
    "Belfiore.html": {
      "id": "Belfiore.html",
      "kind": "namespace",
      "title": "Belfiore",
      "longname": "Belfiore",
      "name": "Belfiore",
      "tags": "Belfiore",
      "summary": "",
      "description": "Handler for cities and countries Dataset",
      "body": ""
    },
    "BirthMonth.html": {
      "id": "BirthMonth.html",
      "kind": "namespace",
      "title": "BirthMonth",
      "longname": "BirthMonth",
      "name": "BirthMonth",
      "tags": "BirthMonth",
      "summary": "",
      "description": "",
      "body": ""
    },
    "DATE_VALIDATOR.html": {
      "id": "DATE_VALIDATOR.html",
      "kind": "namespace",
      "title": "DATE_VALIDATOR",
      "longname": "DATE_VALIDATOR",
      "name": "DATE_VALIDATOR",
      "tags": "DATE_VALIDATOR",
      "summary": "",
      "description": "Date Validator propertys",
      "body": ""
    },
    "Gender.html": {
      "id": "Gender.html",
      "kind": "namespace",
      "title": "Gender",
      "longname": "Gender",
      "name": "Gender",
      "tags": "Gender",
      "summary": "",
      "description": "",
      "body": ""
    },
    "Gender.html#.toArray": {
      "id": "Gender.html#.toArray",
      "kind": "function",
      "title": "&lt;static&gt; toArray() → {Array.&lt;string&gt;}",
      "longname": "Gender.toArray",
      "name": "toArray",
      "tags": "Gender.toArray toArray",
      "summary": "",
      "description": "Return an array of Gender constants"
    },
    "Omocode.html": {
      "id": "Omocode.html",
      "kind": "namespace",
      "title": "Omocode",
      "longname": "Omocode",
      "name": "Omocode",
      "tags": "Omocode",
      "summary": "",
      "description": "",
      "body": ""
    },
    "Parser.html": {
      "id": "Parser.html",
      "kind": "namespace",
      "title": "Parser",
      "longname": "Parser",
      "name": "Parser",
      "tags": "Parser",
      "summary": "",
      "description": "",
      "body": ""
    },
    "Parser.html#.OMOCODE_BITMAP": {
      "id": "Parser.html#.OMOCODE_BITMAP",
      "kind": "member",
      "title": "&lt;static, readonly&gt; OMOCODE_BITMAP",
      "longname": "Parser.OMOCODE_BITMAP",
      "name": "OMOCODE_BITMAP",
      "tags": "Parser.OMOCODE_BITMAP OMOCODE_BITMAP",
      "summary": "",
      "description": "Default omocode bitmap"
    },
    "Parser.html#.cfDeomocode": {
      "id": "Parser.html#.cfDeomocode",
      "kind": "function",
      "title": "&lt;static&gt; cfDeomocode( codiceFiscale ) → {string|null}",
      "longname": "Parser.cfDeomocode",
      "name": "cfDeomocode",
      "tags": "Parser.cfDeomocode cfDeomocode",
      "summary": "",
      "description": "Parse surname information"
    },
    "Parser.html#.cfToSurname": {
      "id": "Parser.html#.cfToSurname",
      "kind": "function",
      "title": "&lt;static&gt; cfToSurname( codiceFiscale ) → {string|null}",
      "longname": "Parser.cfToSurname",
      "name": "cfToSurname",
      "tags": "Parser.cfToSurname cfToSurname",
      "summary": "",
      "description": "Parse surname information"
    },
    "Parser.html#.cfToName": {
      "id": "Parser.html#.cfToName",
      "kind": "function",
      "title": "&lt;static&gt; cfToName( codiceFiscale ) → {string|null}",
      "longname": "Parser.cfToName",
      "name": "cfToName",
      "tags": "Parser.cfToName cfToName",
      "summary": "",
      "description": "Parse name information"
    },
    "Parser.html#.cfToGender": {
      "id": "Parser.html#.cfToGender",
      "kind": "function",
      "title": "&lt;static&gt; cfToGender( codiceFiscale ) → {'M'|'F'|null}",
      "longname": "Parser.cfToGender",
      "name": "cfToGender",
      "tags": "Parser.cfToGender cfToGender",
      "summary": "",
      "description": "Parse gender information"
    },
    "Parser.html#.cfToBirthYear": {
      "id": "Parser.html#.cfToBirthYear",
      "kind": "function",
      "title": "&lt;static&gt; cfToBirthYear( codiceFiscale ) → {number|null}",
      "longname": "Parser.cfToBirthYear",
      "name": "cfToBirthYear",
      "tags": "Parser.cfToBirthYear cfToBirthYear",
      "summary": "",
      "description": "Parse birth year information"
    },
    "Parser.html#.cfToBirthMonth": {
      "id": "Parser.html#.cfToBirthMonth",
      "kind": "function",
      "title": "&lt;static&gt; cfToBirthMonth( codiceFiscale ) → {number|null}",
      "longname": "Parser.cfToBirthMonth",
      "name": "cfToBirthMonth",
      "tags": "Parser.cfToBirthMonth cfToBirthMonth",
      "summary": "",
      "description": "Parse birth month information"
    },
    "Parser.html#.cfToBirthDay": {
      "id": "Parser.html#.cfToBirthDay",
      "kind": "function",
      "title": "&lt;static&gt; cfToBirthDay( codiceFiscale ) → {number|null}",
      "longname": "Parser.cfToBirthDay",
      "name": "cfToBirthDay",
      "tags": "Parser.cfToBirthDay cfToBirthDay",
      "summary": "",
      "description": "Parse birth day information"
    },
    "Parser.html#.cfToBirthDate": {
      "id": "Parser.html#.cfToBirthDate",
      "kind": "function",
      "title": "&lt;static&gt; cfToBirthDate( codiceFiscale ) → {Date|null}",
      "longname": "Parser.cfToBirthDate",
      "name": "cfToBirthDate",
      "tags": "Parser.cfToBirthDate cfToBirthDate",
      "summary": "",
      "description": "Parse birth date information"
    },
    "Parser.html#.cfToBirthPlace": {
      "id": "Parser.html#.cfToBirthPlace",
      "kind": "function",
      "title": "&lt;static&gt; cfToBirthPlace( codiceFiscale ) → {Object}",
      "longname": "Parser.cfToBirthPlace",
      "name": "cfToBirthPlace",
      "tags": "Parser.cfToBirthPlace cfToBirthPlace",
      "summary": "",
      "description": "Parse birth place information"
    },
    "Parser.html#.cfDecode": {
      "id": "Parser.html#.cfDecode",
      "kind": "function",
      "title": "&lt;static&gt; cfDecode( fiscalCode ) → {Object}",
      "longname": "Parser.cfDecode",
      "name": "cfDecode",
      "tags": "Parser.cfDecode cfDecode",
      "summary": "",
      "description": ""
    },
    "Parser.html#.surnameToCf": {
      "id": "Parser.html#.surnameToCf",
      "kind": "function",
      "title": "&lt;static&gt; surnameToCf( surname ) → {string|null}",
      "longname": "Parser.surnameToCf",
      "name": "surnameToCf",
      "tags": "Parser.surnameToCf surnameToCf",
      "summary": "",
      "description": "Parse surname to cf part"
    },
    "Parser.html#.nameToCf": {
      "id": "Parser.html#.nameToCf",
      "kind": "function",
      "title": "&lt;static&gt; nameToCf( name ) → {string|null}",
      "longname": "Parser.nameToCf",
      "name": "nameToCf",
      "tags": "Parser.nameToCf nameToCf",
      "summary": "",
      "description": "Parse name to cf part"
    },
    "Parser.html#.yearToCf": {
      "id": "Parser.html#.yearToCf",
      "kind": "function",
      "title": "&lt;static&gt; yearToCf( year ) → {string|null}",
      "longname": "Parser.yearToCf",
      "name": "yearToCf",
      "tags": "Parser.yearToCf yearToCf",
      "summary": "",
      "description": "Parse year to cf part"
    },
    "Parser.html#.monthToCf": {
      "id": "Parser.html#.monthToCf",
      "kind": "function",
      "title": "&lt;static&gt; monthToCf( month ) → {string|null}",
      "longname": "Parser.monthToCf",
      "name": "monthToCf",
      "tags": "Parser.monthToCf monthToCf",
      "summary": "",
      "description": "Parse month information"
    },
    "Parser.html#.yearMonthDayToDate": {
      "id": "Parser.html#.yearMonthDayToDate",
      "kind": "function",
      "title": "&lt;static&gt; yearMonthDayToDate( year [, month [, day ] ] ) → {Date|null}",
      "longname": "Parser.yearMonthDayToDate",
      "name": "yearMonthDayToDate",
      "tags": "Parser.yearMonthDayToDate yearMonthDayToDate",
      "summary": "",
      "description": "Parse Year, Month, Day to Dated"
    },
    "Parser.html#.parseDate": {
      "id": "Parser.html#.parseDate",
      "kind": "function",
      "title": "&lt;static&gt; parseDate( date ) → {Date|null}",
      "longname": "Parser.parseDate",
      "name": "parseDate",
      "tags": "Parser.parseDate parseDate",
      "summary": "",
      "description": "Parse a Dated and Gender information to create Date/Gender CF part"
    },
    "Parser.html#.dateGenderToCf": {
      "id": "Parser.html#.dateGenderToCf",
      "kind": "function",
      "title": "&lt;static&gt; dateGenderToCf( date, gender ) → {string|null}",
      "longname": "Parser.dateGenderToCf",
      "name": "dateGenderToCf",
      "tags": "Parser.dateGenderToCf dateGenderToCf",
      "summary": "",
      "description": "Parse a Dated and Gender information to create Date/Gender CF part"
    },
    "Parser.html#.placeToCf": {
      "id": "Parser.html#.placeToCf",
      "kind": "function",
      "title": "&lt;static&gt; placeToCf( name [, province ] ) → {string|null}",
      "longname": "Parser.placeToCf",
      "name": "placeToCf",
      "tags": "Parser.placeToCf placeToCf",
      "summary": "",
      "description": "Parse place name and province to Belfiore code"
    },
    "Parser.html#.encodeCf": {
      "id": "Parser.html#.encodeCf",
      "kind": "function",
      "title": "&lt;static&gt; encodeCf( input ) → {string|null}",
      "longname": "Parser.encodeCf",
      "name": "encodeCf",
      "tags": "Parser.encodeCf encodeCf",
      "summary": "",
      "description": "Generates full CF"
    },
    "Parser.html#.dayGenderToCf": {
      "id": "Parser.html#.dayGenderToCf",
      "kind": "function",
      "title": "&lt;static&gt; dayGenderToCf( day, gender ) → {string|null}",
      "longname": "Parser.dayGenderToCf",
      "name": "dayGenderToCf",
      "tags": "Parser.dayGenderToCf dayGenderToCf",
      "summary": "",
      "description": "Parse day information"
    },
    "VALIDATOR.html": {
      "id": "VALIDATOR.html",
      "kind": "namespace",
      "title": "VALIDATOR",
      "longname": "VALIDATOR",
      "name": "VALIDATOR",
      "tags": "VALIDATOR",
      "summary": "",
      "description": "Validator constants",
      "body": ""
    },
    "Validator_.html": {
      "id": "Validator_.html",
      "kind": "namespace",
      "title": "Validator",
      "longname": "Validator",
      "name": "Validator",
      "tags": "Validator",
      "summary": "",
      "description": "",
      "body": ""
    },
    "Validator_.html#.cfSurname": {
      "id": "Validator_.html#.cfSurname",
      "kind": "function",
      "title": "&lt;static&gt; cfSurname( surname ) → {RegExp}",
      "longname": "Validator.cfSurname",
      "name": "cfSurname",
      "tags": "Validator.cfSurname cfSurname",
      "summary": "",
      "description": "Validation regexp for the given surname or generic"
    },
    "Validator_.html#.cfName": {
      "id": "Validator_.html#.cfName",
      "kind": "function",
      "title": "&lt;static&gt; cfName( name ) → {RegExp}",
      "longname": "Validator.cfName",
      "name": "cfName",
      "tags": "Validator.cfName cfName",
      "summary": "",
      "description": "Validation regexp for the given name or generic"
    },
    "Validator_.html#.cfYear": {
      "id": "Validator_.html#.cfYear",
      "kind": "function",
      "title": "&lt;static&gt; cfYear( year ) → {RegExp}",
      "longname": "Validator.cfYear",
      "name": "cfYear",
      "tags": "Validator.cfYear cfYear",
      "summary": "",
      "description": "Validation regexp for the given year or generic"
    },
    "Validator_.html#.cfMonth": {
      "id": "Validator_.html#.cfMonth",
      "kind": "function",
      "title": "&lt;static&gt; cfMonth( month ) → {RegExp}",
      "longname": "Validator.cfMonth",
      "name": "cfMonth",
      "tags": "Validator.cfMonth cfMonth",
      "summary": "",
      "description": "Validation regexp for the given month or generic"
    },
    "Validator_.html#.cfDay": {
      "id": "Validator_.html#.cfDay",
      "kind": "function",
      "title": "&lt;static&gt; cfDay( day ) → {RegExp}",
      "longname": "Validator.cfDay",
      "name": "cfDay",
      "tags": "Validator.cfDay cfDay",
      "summary": "",
      "description": "Validation regexp for the given year or generic"
    },
    "Validator_.html#.cfDayGender": {
      "id": "Validator_.html#.cfDayGender",
      "kind": "function",
      "title": "&lt;static&gt; cfDayGender( [ day [, gender ] ] ) → {RegExp}",
      "longname": "Validator.cfDayGender",
      "name": "cfDayGender",
      "tags": "Validator.cfDayGender cfDayGender",
      "summary": "",
      "description": "Validation regexp for the given year or generic"
    },
    "Validator_.html#.cfDateGender": {
      "id": "Validator_.html#.cfDateGender",
      "kind": "function",
      "title": "&lt;static&gt; cfDateGender( date [, gender ] ) → {RegExp}",
      "longname": "Validator.cfDateGender",
      "name": "cfDateGender",
      "tags": "Validator.cfDateGender cfDateGender",
      "summary": "",
      "description": "Validation regexp for the given year or generic"
    },
    "Validator_.html#.cfPlace": {
      "id": "Validator_.html#.cfPlace",
      "kind": "function",
      "title": "&lt;static&gt; cfPlace( [ date ], placeName ) → {RegExp}",
      "longname": "Validator.cfPlace",
      "name": "cfPlace",
      "tags": "Validator.cfPlace cfPlace",
      "summary": "",
      "description": ""
    },
    "Validator_.html#.codiceFiscale": {
      "id": "Validator_.html#.codiceFiscale",
      "kind": "function",
      "title": "&lt;static&gt; codiceFiscale( input ) → {RegExp}",
      "longname": "Validator.codiceFiscale",
      "name": "codiceFiscale",
      "tags": "Validator.codiceFiscale codiceFiscale",
      "summary": "",
      "description": "Generates full CF validator based on given optional input or generic"
    },
    "Validator_.html#.surname": {
      "id": "Validator_.html#.surname",
      "kind": "function",
      "title": "&lt;static&gt; surname( codiceFiscale ) → {RegExp}",
      "longname": "Validator.surname",
      "name": "surname",
      "tags": "Validator.surname surname",
      "summary": "",
      "description": "Returns surname validator based on given cf or generic"
    },
    "Validator_.html#.name": {
      "id": "Validator_.html#.name",
      "kind": "function",
      "title": "&lt;static&gt; name( codiceFiscale ) → {RegExp}",
      "longname": "Validator.name",
      "name": "name",
      "tags": "Validator.name name",
      "summary": "",
      "description": "Returns name validator based on given cf or generic"
    },
    "Validator_.html#.date": {
      "id": "Validator_.html#.date",
      "kind": "function",
      "title": "&lt;static&gt; date( codiceFiscale ) → {RegExp}",
      "longname": "Validator.date",
      "name": "date",
      "tags": "Validator.date date",
      "summary": "",
      "description": "Returns iso8601 date validator based on given cf or generic"
    },
    "Validator_.html#.gender": {
      "id": "Validator_.html#.gender",
      "kind": "function",
      "title": "&lt;static&gt; gender( codiceFiscale ) → {RegExp}",
      "longname": "Validator.gender",
      "name": "gender",
      "tags": "Validator.gender gender",
      "summary": "",
      "description": "Returns gender validator based on given cf or generic"
    },
    "Validator_.html#.place": {
      "id": "Validator_.html#.place",
      "kind": "function",
      "title": "&lt;static&gt; place( codiceFiscale ) → {RegExp}",
      "longname": "Validator.place",
      "name": "place",
      "tags": "Validator.place place",
      "summary": "",
      "description": "Returns place validator based on given cf or generic"
    },
    "Validator_.html#.isValid": {
      "id": "Validator_.html#.isValid",
      "kind": "function",
      "title": "&lt;static&gt; isValid( codiceFiscale ) → {boolean}",
      "longname": "Validator.isValid",
      "name": "isValid",
      "tags": "Validator.isValid isValid",
      "summary": "",
      "description": "Check the given cf validity by form, birth date/place and digit code"
    }
  }
};