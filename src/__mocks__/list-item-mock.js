const validResponseMock = {
  data : {
    site_id: "MLA",
    query: "iphone",
    paging: {
      total: 22880,
      primary_results: 1000,
      offset: 0,
      limit: 4
    },
    results: [
      {
        id: "MLA918561816",
        site_id: "MLA",
        title: "iPhone 11 64 Gb Negro",
        seller: {
          id: 358339005,
          permalink: "http://perfil.mercadolibre.com.ar/DUTYVIP_IG",
          registration_date: "2018-09-28T04:39:17.000-04:00",
          car_dealer: false,
          real_estate_agency: false,
          seller_reputation: {
            transactions: {
              total: 16,
              canceled: 4,
              period: "historic",
              ratings: {
                negative: 0,
                positive: 1,
                neutral: 0
              },
              completed: 12
            },
            power_seller_status: null,
            metrics: {
              claims: {
                rate: 0,
                value: 0,
                period: "365 days"
              },
              delayed_handling_time: {
                rate: 0,
                value: 0,
                period: "365 days"
              },
              sales: {
                period: "365 days",
                completed: 12
              },
              cancellations: {
                rate: 0,
                value: 0,
                period: "365 days"
              }
            },
            level_id: "5_green"
          }
        },
        price: 153999,
        prices: {
          id: "MLA918561816",
          prices: [
            {
              id: "14",
              type: "standard",
              conditions: {
                context_restrictions: [
                ],
                start_time: null,
                end_time: null,
                eligible: true
              },
              amount: 153999,
              regular_amount: null,
              currency_id: "ARS",
              exchange_rate_context: "DEFAULT",
              metadata: {
              },
              last_updated: "2021-05-18T13:25:58Z"
            }
          ],
          presentation: {
            display_currency: "ARS"
          },
          payment_method_prices: [
          ],
          reference_prices: [
          ],
          purchase_discounts: [
          ]
        },
        sale_price: null,
        currency_id: "ARS",
        available_quantity: 2,
        sold_quantity: 0,
        buying_mode: "buy_it_now",
        listing_type_id: "gold_special",
        stop_time: "2041-04-24T04:00:00.000Z",
        condition: "new",
        permalink: "https://www.mercadolibre.com.ar/iphone-11-64-gb-negro/p/MLA15149561",
        thumbnail: "http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg",
        thumbnail_id: "916062-MLA43654417337_102020",
        accepts_mercadopago: true,
        installments: {
          quantity: 12,
          amount: 21838.34,
          rate: 70.17,
          currency_id: "ARS"
        },
        address: {
          state_id: "AR-C",
          state_name: "Capital Federal",
          city_id: "TUxBQlJFQzkyMTVa",
          city_name: "Recoleta"
        },
        shipping: {
          free_shipping: true,
          mode: "me2",
          logistic_type: "xd_drop_off",
          store_pick_up: false
        },
        seller_address: {
          id: "",
          comment: "",
          address_line: "",
          zip_code: "",
          country: {
            id: "AR",
            name: "Argentina"
          },
          state: {
            id: "AR-C",
            name: "Capital Federal"
          },
          city: {
            id: "TUxBQlJFQzkyMTVa",
            name: "Recoleta"
          },
          latitude: "",
          longitude: ""
        },
        attributes: [
          {
            name: "Marca",
            value_id: "9344",
            attribute_group_name: "Otros",
            values: [
              {
                id: "9344",
                name: "Apple",
                struct: null,
                source: 1
              }
            ],
            attribute_group_id: "OTHERS",
            source: 1,
            id: "BRAND",
            value_name: "Apple",
            value_struct: null
          },
          {
            attribute_group_id: "OTHERS",
            id: "GPU_MODEL",
            value_struct: null,
            values: [
              {
                struct: null,
                source: 1,
                id: "7740544",
                name: "Apple GPU MP4"
              }
            ],
            attribute_group_name: "Otros",
            source: 1,
            name: "Modelo de GPU",
            value_id: "7740544",
            value_name: "Apple GPU MP4"
          },
          {
            value_id: "2230284",
            value_name: "Nuevo",
            attribute_group_id: "OTHERS",
            source: 3045741222775799,
            attribute_group_name: "Otros",
            id: "ITEM_CONDITION",
            name: "Condición del ítem",
            value_struct: null,
            values: [
              {
                source: 3045741222775799,
                id: "2230284",
                name: "Nuevo",
                struct: null
              }
            ]
          },
          {
            value_name: "iPhone",
            value_struct: null,
            values: [
              {
                id: "58993",
                name: "iPhone",
                struct: null,
                source: 1
              }
            ],
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros",
            name: "Línea",
            value_id: "58993",
            source: 1,
            id: "LINE"
          },
          {
            name: "Modelo",
            values: [
              {
                id: "7739079",
                name: "iPhone 11",
                struct: null,
                source: 1
              }
            ],
            attribute_group_name: "Otros",
            source: 1,
            id: "MODEL",
            value_id: "7739079",
            value_name: "iPhone 11",
            value_struct: null,
            attribute_group_id: "OTHERS"
          },
          {
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros",
            source: 1,
            id: "PROCESSOR_MODEL",
            name: "Modelo del procesador",
            value_id: "7740540",
            value_name: "Apple A13 Bionic",
            value_struct: null,
            values: [
              {
                id: "7740540",
                name: "Apple A13 Bionic",
                struct: null,
                source: 1
              }
            ]
          },
          {
            name: "Peso",
            value_id: "2583040",
            value_struct: {
              number: 194,
              unit: "g"
            },
            attribute_group_name: "Otros",
            source: 1,
            id: "WEIGHT",
            value_name: "194 g",
            values: [
              {
                name: "194 g",
                struct: {
                  number: 194,
                  unit: "g"
                },
                source: 1,
                id: "2583040"
              }
            ],
            attribute_group_id: "OTHERS"
          }
        ],
        original_price: null,
        category_id: "MLA1055",
        official_store_id: null,
        domain_id: "MLA-CELLPHONES",
        catalog_product_id: "MLA15149561",
        catalog_listing: true,
        use_thumbnail_id: true,
        order_backend: 1
      },
      {
        id: "MLA921521551",
        site_id: "MLA",
        title: "iPhone 11 128 Gb Blanco",
        seller: {
          id: 256541454,
          permalink: "http://perfil.mercadolibre.com.ar/MOEBEL+ARGENTINA",
          registration_date: "2017-05-14T14:52:35.000-04:00",
          car_dealer: false,
          real_estate_agency: false,
          seller_reputation: {
            transactions: {
              total: 1613,
              canceled: 134,
              period: "historic",
              ratings: {
                negative: 0.03,
                positive: 0.92,
                neutral: 0.05
              },
              completed: 1479
            },
            power_seller_status: null,
            metrics: {
              claims: {
                rate: 0.0185,
                value: 4,
                period: "60 days"
              },
              delayed_handling_time: {
                rate: 0.0416,
                value: 2,
                period: "60 days"
              },
              sales: {
                period: "60 days",
                completed: 199
              },
              cancellations: {
                rate: 0.0231,
                value: 5,
                period: "60 days"
              }
            },
            level_id: "5_green"
          }
        },
        price: 145000,
        prices: {
          id: "MLA921521551",
          prices: [
            {
              id: "2",
              type: "standard",
              conditions: {
                context_restrictions: [
                ],
                start_time: null,
                end_time: null,
                eligible: true
              },
              amount: 145000,
              regular_amount: null,
              currency_id: "ARS",
              exchange_rate_context: "DEFAULT",
              metadata: {
              },
              last_updated: "2021-05-19T17:49:35Z"
            }
          ],
          presentation: {
            display_currency: "ARS"
          },
          payment_method_prices: [
          ],
          reference_prices: [
          ],
          purchase_discounts: [
          ]
        },
        sale_price: null,
        currency_id: "ARS",
        available_quantity: 1,
        sold_quantity: 2,
        buying_mode: "buy_it_now",
        listing_type_id: "gold_pro",
        stop_time: "2041-05-14T04:00:00.000Z",
        condition: "new",
        permalink: "https://www.mercadolibre.com.ar/iphone-11-128-gb-blanco/p/MLA15149568",
        thumbnail: "http://http2.mlstatic.com/D_739246-MLA43654396781_102020-I.jpg",
        thumbnail_id: "739246-MLA43654396781_102020",
        accepts_mercadopago: true,
        installments: {
          quantity: 9,
          amount: 16111.11,
          rate: 0,
          currency_id: "ARS"
        },
        address: {
          state_id: "AR-C",
          state_name: "Capital Federal",
          city_id: null,
          city_name: "Villa Urquiza"
        },
        shipping: {
          free_shipping: true,
          mode: "me2",
          logistic_type: "xd_drop_off",
          store_pick_up: false
        },
        seller_address: {
          id: "",
          comment: "",
          address_line: "",
          zip_code: "",
          country: {
            id: "AR",
            name: "Argentina"
          },
          state: {
            id: "AR-C",
            name: "Capital Federal"
          },
          city: {
            id: null,
            name: "Villa Urquiza"
          },
          latitude: "",
          longitude: ""
        },
        attributes: [
          {
            name: "Marca",
            value_id: "9344",
            attribute_group_name: "Otros",
            values: [
              {
                source: 1,
                id: "9344",
                name: "Apple",
                struct: null
              }
            ],
            attribute_group_id: "OTHERS",
            source: 1,
            id: "BRAND",
            value_name: "Apple",
            value_struct: null
          },
          {
            attribute_group_id: "OTHERS",
            id: "GPU_MODEL",
            value_id: "7740544",
            value_name: "Apple GPU MP4",
            attribute_group_name: "Otros",
            source: 1,
            name: "Modelo de GPU",
            value_struct: null,
            values: [
              {
                name: "Apple GPU MP4",
                struct: null,
                source: 1,
                id: "7740544"
              }
            ]
          },
          {
            attribute_group_name: "Otros",
            source: 7092,
            name: "Condición del ítem",
            value_id: "2230284",
            values: [
              {
                source: 7092,
                id: "2230284",
                name: "Nuevo",
                struct: null
              }
            ],
            attribute_group_id: "OTHERS",
            id: "ITEM_CONDITION",
            value_name: "Nuevo",
            value_struct: null
          },
          {
            id: "LINE",
            name: "Línea",
            value_struct: null,
            attribute_group_name: "Otros",
            source: 1,
            value_id: "58993",
            value_name: "iPhone",
            values: [
              {
                struct: null,
                source: 1,
                id: "58993",
                name: "iPhone"
              }
            ],
            attribute_group_id: "OTHERS"
          },
          {
            attribute_group_name: "Otros",
            id: "MODEL",
            value_id: "7739079",
            value_name: "iPhone 11",
            values: [
              {
                id: "7739079",
                name: "iPhone 11",
                struct: null,
                source: 1
              }
            ],
            name: "Modelo",
            value_struct: null,
            attribute_group_id: "OTHERS",
            source: 1
          },
          {
            value_id: "7740540",
            attribute_group_id: "OTHERS",
            source: 1,
            id: "PROCESSOR_MODEL",
            name: "Modelo del procesador",
            values: [
              {
                source: 1,
                id: "7740540",
                name: "Apple A13 Bionic",
                struct: null
              }
            ],
            attribute_group_name: "Otros",
            value_name: "Apple A13 Bionic",
            value_struct: null
          },
          {
            id: "WEIGHT",
            value_id: "2583040",
            values: [
              {
                id: "2583040",
                name: "194 g",
                struct: {
                  unit: "g",
                  number: 194
                },
                source: 1
              }
            ],
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros",
            name: "Peso",
            value_name: "194 g",
            value_struct: {
              number: 194,
              unit: "g"
            },
            source: 1
          }
        ],
        differential_pricing: {
          id: 35713248
        },
        original_price: null,
        category_id: "MLA1055",
        official_store_id: null,
        domain_id: "MLA-CELLPHONES",
        catalog_product_id: "MLA15149568",
        catalog_listing: true,
        use_thumbnail_id: true,
        order_backend: 2
      },
      {
        id: "MLA900663078",
        site_id: "MLA",
        title: " iPhone SE (2nd Generation) 64 Gb Negro",
        seller: {
          id: 208137579,
          permalink: "http://perfil.mercadolibre.com.ar/ONECLICKARG",
          registration_date: "2016-03-09T13:05:08.000-04:00",
          car_dealer: false,
          real_estate_agency: false,
          seller_reputation: {
            transactions: {
              total: 30473,
              canceled: 1465,
              period: "historic",
              ratings: {
                negative: 0.02,
                positive: 0.97,
                neutral: 0.01
              },
              completed: 29008
            },
            power_seller_status: "platinum",
            metrics: {
              claims: {
                rate: 0.0073,
                value: 71,
                period: "60 days"
              },
              delayed_handling_time: {
                rate: 0.015,
                value: 141,
                period: "60 days"
              },
              sales: {
                period: "60 days",
                completed: 9262
              },
              cancellations: {
                rate: 0.0021,
                value: 21,
                period: "60 days"
              }
            },
            level_id: "5_green"
          }
        },
        price: 95600,
        prices: {
          id: "MLA900663078",
          prices: [
            {
              id: "39",
              type: "standard",
              conditions: {
                context_restrictions: [
                ],
                start_time: null,
                end_time: null,
                eligible: true
              },
              amount: 95600,
              regular_amount: null,
              currency_id: "ARS",
              exchange_rate_context: "DEFAULT",
              metadata: {
              },
              last_updated: "2021-05-10T02:16:28Z"
            }
          ],
          presentation: {
            display_currency: "ARS"
          },
          payment_method_prices: [
          ],
          reference_prices: [
          ],
          purchase_discounts: [
          ]
        },
        sale_price: null,
        currency_id: "ARS",
        available_quantity: 9,
        sold_quantity: 59,
        buying_mode: "buy_it_now",
        listing_type_id: "gold_special",
        stop_time: "2040-12-06T04:00:00.000Z",
        condition: "new",
        permalink: "https://www.mercadolibre.com.ar/iphone-se-2nd-generation-64-gb-negro/p/MLA15591331",
        thumbnail: "http://http2.mlstatic.com/D_762949-MLA42320762601_062020-I.jpg",
        thumbnail_id: "762949-MLA42320762601_062020",
        accepts_mercadopago: true,
        installments: {
          quantity: 12,
          amount: 13556.88,
          rate: 70.17,
          currency_id: "ARS"
        },
        address: {
          state_id: "AR-C",
          state_name: "Capital Federal",
          city_id: "TUxBQlBBTDg3MDda",
          city_name: "Palermo Soho"
        },
        shipping: {
          free_shipping: true,
          mode: "me2",
          logistic_type: "cross_docking",
          store_pick_up: false
        },
        seller_address: {
          id: "",
          comment: "",
          address_line: "",
          zip_code: "",
          country: {
            id: "AR",
            name: "Argentina"
          },
          state: {
            id: "AR-C",
            name: "Capital Federal"
          },
          city: {
            id: "TUxBQlBBTDg3MDda",
            name: "Palermo Soho"
          },
          latitude: "",
          longitude: ""
        },
        attributes: [
          {
            attribute_group_name: "Otros",
            source: 1,
            name: "Marca",
            value_name: "Apple",
            attribute_group_id: "OTHERS",
            values: [
              {
                id: "9344",
                name: "Apple",
                struct: null,
                source: 1
              }
            ],
            id: "BRAND",
            value_id: "9344",
            value_struct: null
          },
          {
            attribute_group_name: "Otros",
            source: 1,
            name: "Modelo de GPU",
            value_id: "7741027",
            value_name: "Apple GPU",
            value_struct: null,
            id: "GPU_MODEL",
            values: [
              {
                struct: null,
                source: 1,
                id: "7741027",
                name: "Apple GPU"
              }
            ],
            attribute_group_id: "OTHERS"
          },
          {
            attribute_group_name: "Otros",
            source: 6808261514773724,
            value_struct: null,
            name: "Condición del ítem",
            value_id: "2230284",
            value_name: "Nuevo",
            values: [
              {
                id: "2230284",
                name: "Nuevo",
                struct: null,
                source: 6808261514773724
              }
            ],
            attribute_group_id: "OTHERS",
            id: "ITEM_CONDITION"
          },
          {
            value_struct: null,
            values: [
              {
                id: "58993",
                name: "iPhone",
                struct: null,
                source: 1
              }
            ],
            attribute_group_name: "Otros",
            source: 1,
            id: "LINE",
            name: "Línea",
            value_id: "58993",
            value_name: "iPhone",
            attribute_group_id: "OTHERS"
          },
          {
            source: 1,
            id: "MODEL",
            name: "Modelo",
            attribute_group_name: "Otros",
            values: [
              {
                id: "8230322",
                name: "iPhone SE (2nd Generation)",
                struct: null,
                source: 1
              }
            ],
            attribute_group_id: "OTHERS",
            value_id: "8230322",
            value_name: "iPhone SE (2nd Generation)",
            value_struct: null
          },
          {
            value_id: "7740540",
            value_name: "Apple A13 Bionic",
            value_struct: null,
            attribute_group_name: "Otros",
            name: "Modelo del procesador",
            values: [
              {
                id: "7740540",
                name: "Apple A13 Bionic",
                struct: null,
                source: 1
              }
            ],
            attribute_group_id: "OTHERS",
            source: 1,
            id: "PROCESSOR_MODEL"
          },
          {
            source: 1,
            id: "WEIGHT",
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros",
            value_struct: {
              number: 148,
              unit: "g"
            },
            values: [
              {
                id: "6861161",
                name: "148 g",
                struct: {
                  number: 148,
                  unit: "g"
                },
                source: 1
              }
            ],
            name: "Peso",
            value_id: "6861161",
            value_name: "148 g"
          }
        ],
        original_price: null,
        category_id: "MLA1055",
        official_store_id: null,
        domain_id: "MLA-CELLPHONES",
        catalog_product_id: "MLA15591331",
        catalog_listing: true,
        use_thumbnail_id: true,
        order_backend: 3
      },
      {
        id: "MLA906157895",
        site_id: "MLA",
        title: " iPhone SE (2nd Generation) 128 Gb Blanco",
        seller: {
          id: 58580821,
          permalink: "http://perfil.mercadolibre.com.ar/PAPIRONLINE",
          registration_date: "2002-02-25T17:28:00.000-04:00",
          car_dealer: false,
          real_estate_agency: false,
          seller_reputation: {
            transactions: {
              total: 205,
              canceled: 14,
              period: "historic",
              ratings: {
                negative: 0,
                positive: 0.95,
                neutral: 0.05
              },
              completed: 191
            },
            power_seller_status: "silver",
            metrics: {
              claims: {
                rate: 0,
                value: 1,
                period: "60 days"
              },
              delayed_handling_time: {
                rate: 0.0181,
                value: 1,
                period: "60 days"
              },
              sales: {
                period: "60 days",
                completed: 62
              },
              cancellations: {
                rate: 0,
                value: 0,
                period: "60 days"
              }
            },
            level_id: "5_green"
          }
        },
        price: 109800,
        prices: {
          id: "MLA906157895",
          prices: [
            {
              id: "3",
              type: "standard",
              conditions: {
                context_restrictions: [
                ],
                start_time: null,
                end_time: null,
                eligible: true
              },
              amount: 109800,
              regular_amount: null,
              currency_id: "ARS",
              exchange_rate_context: "DEFAULT",
              metadata: {
              },
              last_updated: "2021-05-18T18:13:38Z"
            }
          ],
          presentation: {
            display_currency: "ARS"
          },
          payment_method_prices: [
          ],
          reference_prices: [
          ],
          purchase_discounts: [
          ]
        },
        sale_price: null,
        currency_id: "ARS",
        available_quantity: 1,
        sold_quantity: 0,
        buying_mode: "buy_it_now",
        listing_type_id: "gold_special",
        stop_time: "2041-01-23T04:00:00.000Z",
        condition: "new",
        permalink: "https://www.mercadolibre.com.ar/iphone-se-2nd-generation-128-gb-blanco/p/MLA15591335",
        thumbnail: "http://http2.mlstatic.com/D_620208-MLA42321158044_062020-I.jpg",
        thumbnail_id: "620208-MLA42321158044_062020",
        accepts_mercadopago: true,
        installments: {
          quantity: 12,
          amount: 15570.56,
          rate: 70.17,
          currency_id: "ARS"
        },
        address: {
          state_id: "AR-S",
          state_name: "Santa Fe",
          city_id: "TUxBQ1JPUzg1Yjg3",
          city_name: "Rosario"
        },
        shipping: {
          free_shipping: true,
          mode: "me2",
          logistic_type: "drop_off",
          store_pick_up: false
        },
        seller_address: {
          id: "",
          comment: "",
          address_line: "",
          zip_code: "",
          country: {
            id: "AR",
            name: "Argentina"
          },
          state: {
            id: "AR-S",
            name: "Santa Fe"
          },
          city: {
            id: "TUxBQ1JPUzg1Yjg3",
            name: "Rosario"
          },
          latitude: "",
          longitude: ""
        },
        attributes: [
          {
            attribute_group_name: "Otros",
            name: "Marca",
            value_id: "9344",
            values: [
              {
                id: "9344",
                name: "Apple",
                struct: null,
                source: 1
              }
            ],
            attribute_group_id: "OTHERS",
            source: 1,
            id: "BRAND",
            value_name: "Apple",
            value_struct: null
          },
          {
            id: "GPU_MODEL",
            value_id: "7741027",
            value_name: "Apple GPU",
            value_struct: null,
            attribute_group_id: "OTHERS",
            name: "Modelo de GPU",
            values: [
              {
                id: "7741027",
                name: "Apple GPU",
                struct: null,
                source: 1
              }
            ],
            attribute_group_name: "Otros",
            source: 1
          },
          {
            attribute_group_id: "OTHERS",
            id: "ITEM_CONDITION",
            name: "Condición del ítem",
            value_id: "2230284",
            value_struct: null,
            values: [
              {
                struct: null,
                source: 6808261514773724,
                id: "2230284",
                name: "Nuevo"
              }
            ],
            value_name: "Nuevo",
            attribute_group_name: "Otros",
            source: 6808261514773724
          },
          {
            id: "LINE",
            value_name: "iPhone",
            attribute_group_name: "Otros",
            source: 1,
            name: "Línea",
            value_id: "58993",
            value_struct: null,
            values: [
              {
                name: "iPhone",
                struct: null,
                source: 1,
                id: "58993"
              }
            ],
            attribute_group_id: "OTHERS"
          },
          {
            id: "MODEL",
            name: "Modelo",
            value_id: "8230322",
            value_struct: null,
            values: [
              {
                id: "8230322",
                name: "iPhone SE (2nd Generation)",
                struct: null,
                source: 1
              }
            ],
            attribute_group_name: "Otros",
            source: 1,
            value_name: "iPhone SE (2nd Generation)",
            attribute_group_id: "OTHERS"
          },
          {
            value_id: "7740540",
            values: [
              {
                source: 1,
                id: "7740540",
                name: "Apple A13 Bionic",
                struct: null
              }
            ],
            id: "PROCESSOR_MODEL",
            name: "Modelo del procesador",
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros",
            source: 1,
            value_name: "Apple A13 Bionic",
            value_struct: null
          },
          {
            source: 1,
            value_id: "6861161",
            values: [
              {
                struct: {
                  number: 148,
                  unit: "g"
                },
                source: 1,
                id: "6861161",
                name: "148 g"
              }
            ],
            value_name: "148 g",
            value_struct: {
              number: 148,
              unit: "g"
            },
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros",
            id: "WEIGHT",
            name: "Peso"
          }
        ],
        original_price: null,
        category_id: "MLA1055",
        official_store_id: null,
        domain_id: "MLA-CELLPHONES",
        catalog_product_id: "MLA15591335",
        catalog_listing: true,
        use_thumbnail_id: true,
        order_backend: 4
      }
    ],
    filters: [
      {
        id: "category",
        name: "Categories",
        type: "text",
        values: [
          {
            id: "MLA1055",
            name: "Celulares y Smartphones",
            path_from_root: [
              {
                id: "MLA1051",
                name: "Celulares y Teléfonos"
              },
              {
                id: "MLA1055",
                name: "Celulares y Smartphones"
              }
            ]
          }
        ]
      },
      {
        id: "BRAND",
        name: "Marca",
        type: "STRING",
        values: [
          {
            id: "9344",
            name: "Apple"
          }
        ]
      },
      {
        id: "MOBILE_NETWORK",
        name: "Red",
        type: "STRING",
        values: [
          {
            id: "367876",
            name: "4G/LTE"
          }
        ]
      },
      {
        id: "LINE",
        name: "Línea",
        type: "STRING",
        values: [
          {
            id: "58993",
            name: "iPhone"
          }
        ]
      }
    ],
  },
};

module.exports = {
  validResponseMock,
};
