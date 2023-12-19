import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IgxSnackbarComponent, IgxToastComponent } from 'igniteui-angular';
import { CustomContourValueResolverEventArgs } from 'igniteui-angular-charts';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { Data } from 'src/app/core/models/pokemon-data';
import { DeckService } from 'src/app/core/services/deck.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';

const defaultImage =
  'https://tcg.pokemon.com/assets/img/tcgl/logos/en-us/logo.png';

const teste = [
  {
    id: 1,
    name: "Arcaine ex",
    imgUrl: "https://tcg.pokemon.com/assets/img/tcgl/logos/en-us/logo.png",
    pokemons: [
      {
        card: {
          id: "pl3-1",
          name: "Absol G",
          supertype: "Pokémon",
          subtypes: [
            "Basic",
            "SP"
          ],
          level: "59",
          hp: "70",
          types: [
            "Darkness"
          ],
          attacks: [
            {
              name: "Feint Attack",
              cost: [
                "Darkness"
              ],
              convertedEnergyCost: 1,
              damage: "",
              text: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon."
            },
            {
              name: "Doom News",
              cost: [
                "Darkness",
                "Colorless",
                "Colorless"
              ],
              convertedEnergyCost: 3,
              damage: "",
              text: "Return all Energy cards attached to Absol G to your hand. The Defending Pokémon is Knocked Out at the end of your opponent's next turn."
            }
          ],
          weaknesses: [
            {
              type: "Fighting",
              value: "×2"
            }
          ],
          resistances: [
            {
              type: "Psychic",
              value: "-20"
            }
          ],
          retreatCost: [
            "Colorless"
          ],
          convertedRetreatCost: 1,
          set: {
            id: "pl3",
            name: "Supreme Victors",
            series: "Platinum",
            printedTotal: 147,
            total: 153,
            legalities: {
              unlimited: "Legal"
            },
            ptcgoCode: "SV",
            releaseDate: "2009/08/19",
            updatedAt: "2018/03/07 22:40:00",
            images: {
              symbol: "https://images.pokemontcg.io/pl3/symbol.png",
              logo: "https://images.pokemontcg.io/pl3/logo.png"
            }
          },
          number: "1",
          artist: "Yusuke Ishikawa",
          rarity: "Rare Holo",
          nationalPokedexNumbers: [
            359
          ],
          legalities: {
            unlimited: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/pl3/1.png",
            large: "https://images.pokemontcg.io/pl3/1_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/pl3-1",
            updatedAt: "2023/12/17",
            prices: {
              holofoil: {
                low: 3,
                mid: 4.47,
                high: 14,
                market: 8.96,
                directLow: null
              },
              reverseHolofoil: {
                low: 3.29,
                mid: 6.09,
                high: 7.58,
                market: 7,
                directLow: 2.9
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/pl3-1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 5,
              lowPrice: 1,
              trendPrice: 5.68,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 5.16,
              reverseHoloLow: 2.7,
              reverseHoloTrend: 5.61,
              lowPriceExPlus: 3.22,
              avg1: 6,
              avg7: 4.99,
              avg30: 5.21,
              reverseHoloAvg1: 9,
              reverseHoloAvg7: 5.84,
              reverseHoloAvg30: 5.37
            }
          }
        },
        amount: 1
      },
      {
        card: {
          id: "xy5-1",
          name: "Weedle",
          supertype: "Pokémon",
          subtypes: [
            "Basic"
          ],
          hp: "50",
          types: [
            "Grass"
          ],
          evolvesTo: [
            "Kakuna"
          ],
          attacks: [
            {
              name: "Multiply",
              cost: [
                "Grass"
              ],
              convertedEnergyCost: 1,
              damage: "",
              text: "Search your deck for Weedle and put it onto your Bench. Shuffle your deck afterward."
            }
          ],
          weaknesses: [
            {
              type: "Fire",
              value: "×2"
            }
          ],
          retreatCost: [
            "Colorless"
          ],
          convertedRetreatCost: 1,
          set: {
            id: "xy5",
            name: "Primal Clash",
            series: "XY",
            printedTotal: 160,
            total: 164,
            legalities: {
              unlimited: "Legal",
              expanded: "Legal"
            },
            ptcgoCode: "PRC",
            releaseDate: "2015/02/04",
            updatedAt: "2020/05/01 16:06:00",
            images: {
              symbol: "https://images.pokemontcg.io/xy5/symbol.png",
              logo: "https://images.pokemontcg.io/xy5/logo.png"
            }
          },
          number: "1",
          artist: "Midori Harada",
          rarity: "Common",
          flavorText: "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
          nationalPokedexNumbers: [
            13
          ],
          legalities: {
            unlimited: "Legal",
            expanded: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/xy5/1.png",
            large: "https://images.pokemontcg.io/xy5/1_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/xy5-1",
            updatedAt: "2023/12/17",
            prices: {
              normal: {
                low: 0.01,
                mid: 0.19,
                high: 2,
                market: 0.16,
                directLow: null
              },
              reverseHolofoil: {
                low: 0.24,
                mid: 0.37,
                high: 4.06,
                market: 0.38,
                directLow: 0.38
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/xy5-1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 0.03,
              lowPrice: 0.02,
              trendPrice: 0.1,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 0.5,
              reverseHoloLow: 0.1,
              reverseHoloTrend: 0.55,
              lowPriceExPlus: 0.02,
              avg1: 0.02,
              avg7: 0.08,
              avg30: 0.09,
              reverseHoloAvg1: 0.5,
              reverseHoloAvg7: 0.73,
              reverseHoloAvg30: 0.52
            }
          }
        },
        amount: 1
      },
      {
        card: {
          id: "dp3-1",
          name: "Ampharos",
          supertype: "Pokémon",
          subtypes: [
            "Stage 2"
          ],
          level: "52",
          hp: "130",
          types: [
            "Lightning"
          ],
          evolvesFrom: "Flaaffy",
          abilities: [
            {
              name: "Jamming",
              text: "After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.",
              type: "Poké-Body"
            }
          ],
          attacks: [
            {
              name: "Cluster Bolt",
              cost: [
                "Lightning",
                "Colorless",
                "Colorless"
              ],
              convertedEnergyCost: 3,
              damage: "70",
              text: "You may discard all Lightning Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
            }
          ],
          weaknesses: [
            {
              type: "Fighting",
              value: "+30"
            }
          ],
          resistances: [
            {
              type: "Metal",
              value: "-20"
            }
          ],
          retreatCost: [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          convertedRetreatCost: 3,
          set: {
            id: "dp3",
            name: "Secret Wonders",
            series: "Diamond & Pearl",
            printedTotal: 132,
            total: 132,
            legalities: {
              unlimited: "Legal"
            },
            ptcgoCode: "SW",
            releaseDate: "2007/11/01",
            updatedAt: "2018/03/04 10:35:00",
            images: {
              symbol: "https://images.pokemontcg.io/dp3/symbol.png",
              logo: "https://images.pokemontcg.io/dp3/logo.png"
            }
          },
          number: "1",
          artist: "Kouki Saitou",
          rarity: "Rare Holo",
          flavorText: "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
          nationalPokedexNumbers: [
            181
          ],
          legalities: {
            unlimited: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/dp3/1.png",
            large: "https://images.pokemontcg.io/dp3/1_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/dp3-1",
            updatedAt: "2023/12/17",
            prices: {
              holofoil: {
                low: 4.25,
                mid: 6.29,
                high: 29.98,
                market: 13.7,
                directLow: null
              },
              reverseHolofoil: {
                low: 4.15,
                mid: 5.27,
                high: 14.99,
                market: 7.04,
                directLow: 4.4
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/dp3-1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 3.22,
              lowPrice: 0.05,
              trendPrice: 1.81,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 4.99,
              reverseHoloLow: 0.49,
              reverseHoloTrend: 2.62,
              lowPriceExPlus: 0.49,
              avg1: 0.6,
              avg7: 3.22,
              avg30: 2.21,
              reverseHoloAvg1: 4.99,
              reverseHoloAvg7: 1.94,
              reverseHoloAvg30: 2.71
            }
          }
        },
        amount: 2
      }
    ]
  },
  {
    id: 2,
    name: "Lua Estrondo ex",
    imgUrl: "https://tcg.pokemon.com/assets/img/tcgl/logos/en-us/logo.png",
    pokemons: [
      {
        card: {
          id: "ex12-1",
          name: "Aerodactyl",
          supertype: "Pokémon",
          subtypes: [
            "Stage 1"
          ],
          hp: "70",
          types: [
            "Colorless"
          ],
          evolvesFrom: "Mysterious Fossil",
          abilities: [
            {
              name: "Reactive Protection",
              text: "Any damage done to Aerodactyl by attacks from your opponent's Pokémon is reduced by 10 for each React Energy card attached to Aerodactyl (after applying Weakness and Resistance).",
              type: "Poké-Body"
            }
          ],
          attacks: [
            {
              name: "Power Blow",
              cost: [
                "Colorless"
              ],
              convertedEnergyCost: 1,
              damage: "10+",
              text: "Does 10 damage plus 10 more damage for each Energy attached to Aerodactyl."
            },
            {
              name: "Speed Stroke",
              cost: [
                "Colorless",
                "Colorless",
                "Colorless"
              ],
              convertedEnergyCost: 3,
              damage: "40",
              text: "During your opponent's next turn, prevent all effects, including damage, done to Aerodactyl by attacks from your opponent's Pokémon-ex."
            }
          ],
          weaknesses: [
            {
              type: "Lightning",
              value: "×2"
            }
          ],
          resistances: [
            {
              type: "Fighting",
              value: "-30"
            }
          ],
          set: {
            id: "ex12",
            name: "Legend Maker",
            series: "EX",
            printedTotal: 92,
            total: 93,
            legalities: {
              unlimited: "Legal"
            },
            ptcgoCode: "LM",
            releaseDate: "2006/02/01",
            updatedAt: "2018/03/04 10:35:00",
            images: {
              symbol: "https://images.pokemontcg.io/ex12/symbol.png",
              logo: "https://images.pokemontcg.io/ex12/logo.png"
            }
          },
          number: "1",
          artist: "Hajime Kusajima",
          rarity: "Rare Holo",
          nationalPokedexNumbers: [
            142
          ],
          legalities: {
            unlimited: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/ex12/1.png",
            large: "https://images.pokemontcg.io/ex12/1_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/ex12-1",
            updatedAt: "2023/12/17",
            prices: {
              holofoil: {
                low: 15.79,
                mid: 17,
                high: 19.99,
                market: 16.73,
                directLow: null
              },
              reverseHolofoil: {
                low: 17,
                mid: 18.99,
                high: 33.24,
                market: 39.99,
                directLow: null
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/ex12-1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 12.46,
              lowPrice: 0.89,
              trendPrice: 11.99,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 20.5,
              reverseHoloLow: 5.57,
              reverseHoloTrend: 28.04,
              lowPriceExPlus: 6.5,
              avg1: 6.99,
              avg7: 12.47,
              avg30: 11.89,
              reverseHoloAvg1: 21,
              reverseHoloAvg7: 36.18,
              reverseHoloAvg30: 21.66
            }
          }
        },
        amount: 1
      },
      {
        card: {
          id: "det1-1",
          name: "Bulbasaur",
          supertype: "Pokémon",
          subtypes: [
            "Basic"
          ],
          hp: "60",
          types: [
            "Grass"
          ],
          evolvesTo: [
            "Ivysaur"
          ],
          attacks: [
            {
              name: "Find a Friend",
              cost: [
                "Grass"
              ],
              convertedEnergyCost: 1,
              damage: "",
              text: "Search your deck for a Grass Pokémon, reveal it, and put it into your hand. Then, shuffle your deck."
            }
          ],
          weaknesses: [
            {
              type: "Fire",
              value: "×2"
            }
          ],
          retreatCost: [
            "Colorless"
          ],
          convertedRetreatCost: 1,
          set: {
            id: "det1",
            name: "Detective Pikachu",
            series: "Sun & Moon",
            printedTotal: 18,
            total: 18,
            legalities: {
              unlimited: "Legal",
              expanded: "Legal"
            },
            ptcgoCode: "DET",
            releaseDate: "2019/04/05",
            updatedAt: "2021/09/01 05:37:00",
            images: {
              symbol: "https://images.pokemontcg.io/det1/symbol.png",
              logo: "https://images.pokemontcg.io/det1/logo.png"
            }
          },
          number: "1",
          artist: "MPC Film",
          rarity: "Common",
          flavorText: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
          nationalPokedexNumbers: [
            1
          ],
          legalities: {
            unlimited: "Legal",
            expanded: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/det1/1.png",
            large: "https://images.pokemontcg.io/det1/1_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/det1-1",
            updatedAt: "2023/12/17",
            prices: {
              holofoil: {
                low: 0.04,
                mid: 0.39,
                high: 5.03,
                market: 0.29,
                directLow: null
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/det1-1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 0.38,
              lowPrice: 0.02,
              trendPrice: 0.44,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 0.02,
              reverseHoloLow: 0.02,
              reverseHoloTrend: 0.55,
              lowPriceExPlus: 0.02,
              avg1: 0.15,
              avg7: 0.46,
              avg30: 0.41,
              reverseHoloAvg1: 0.02,
              reverseHoloAvg7: 0.45,
              reverseHoloAvg30: 0.5
            }
          }
        },
        amount: 1
      },
      {
        card: {
          id: "ru1-1",
          name: "Venusaur",
          supertype: "Pokémon",
          subtypes: [
            "Stage 2"
          ],
          hp: "140",
          types: [
            "Grass"
          ],
          evolvesFrom: "Ivysaur",
          attacks: [
            {
              name: "Giga Drain",
              cost: [
                "Grass",
                "Grass",
                "Colorless",
                "Colorless"
              ],
              convertedEnergyCost: 4,
              damage: "50",
              text: "Remove from Venusaur the number of damage counters equal to the damage you did to the Defending Pokémon."
            }
          ],
          weaknesses: [
            {
              type: "Fire",
              value: "×2"
            }
          ],
          retreatCost: [
            "Colorless",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          convertedRetreatCost: 4,
          set: {
            id: "ru1",
            name: "Pokémon Rumble",
            series: "Other",
            printedTotal: 16,
            total: 16,
            legalities: {
              unlimited: "Legal"
            },
            releaseDate: "2009/12/02",
            updatedAt: "2019/01/28 16:44:00",
            images: {
              symbol: "https://images.pokemontcg.io/ru1/symbol.png",
              logo: "https://images.pokemontcg.io/ru1/logo.png"
            }
          },
          number: "1",
          artist: "Pokemon Rumble",
          nationalPokedexNumbers: [
            3
          ],
          legalities: {
            unlimited: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/ru1/1.png",
            large: "https://images.pokemontcg.io/ru1/1_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/ru1-1",
            updatedAt: "2023/12/17",
            prices: {
              holofoil: {
                low: 30.12,
                mid: 49.99,
                high: 105.66,
                market: 35,
                directLow: null
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/ru1-1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 12.99,
              lowPrice: 20,
              trendPrice: 36.86,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 0,
              reverseHoloLow: 49.9,
              reverseHoloTrend: 11.03,
              lowPriceExPlus: 27.99,
              avg1: 12.99,
              avg7: 33.9,
              avg30: 35.27,
              reverseHoloAvg1: 22.84,
              reverseHoloAvg7: 11.09,
              reverseHoloAvg30: 5.39
            }
          }
        },
        amount: 1
      },
      {
        card: {
          id: "ecard2-H1",
          name: "Ampharos",
          supertype: "Pokémon",
          subtypes: [
            "Stage 2"
          ],
          hp: "100",
          types: [
            "Lightning"
          ],
          evolvesFrom: "Flaaffy",
          attacks: [
            {
              name: "Thundershock",
              cost: [
                "Lightning"
              ],
              convertedEnergyCost: 1,
              damage: "20",
              text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
            },
            {
              name: "Reflect Energy",
              cost: [
                "Lightning",
                "Lightning",
                "Colorless"
              ],
              convertedEnergyCost: 3,
              damage: "50",
              text: "If you have any Benched Pokémon and if there are any basic Energy cards attached to Ampharos, take 1 of those Energy cards and attach it to 1 of those Pokémon."
            }
          ],
          weaknesses: [
            {
              type: "Fighting",
              value: "×2"
            }
          ],
          retreatCost: [
            "Colorless",
            "Colorless"
          ],
          convertedRetreatCost: 2,
          set: {
            id: "ecard2",
            name: "Aquapolis",
            series: "E-Card",
            printedTotal: 147,
            total: 182,
            legalities: {
              unlimited: "Legal"
            },
            ptcgoCode: "AQ",
            releaseDate: "2003/01/15",
            updatedAt: "2020/08/14 09:35:00",
            images: {
              symbol: "https://images.pokemontcg.io/ecard2/symbol.png",
              logo: "https://images.pokemontcg.io/ecard2/logo.png"
            }
          },
          number: "H1",
          artist: "Shin-ichi Yoshida",
          rarity: "Rare Holo",
          nationalPokedexNumbers: [
            181
          ],
          legalities: {
            unlimited: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/ecard2/H1.png",
            large: "https://images.pokemontcg.io/ecard2/H1_hires.png"
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/ecard2-H1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 12,
              lowPrice: 8,
              trendPrice: 33.09,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 0,
              reverseHoloLow: 0,
              reverseHoloTrend: 14.11,
              lowPriceExPlus: 35,
              avg1: 12,
              avg7: 31.82,
              avg30: 25.8,
              reverseHoloAvg1: 39.99,
              reverseHoloAvg7: 18.13,
              reverseHoloAvg30: 18.1
            }
          }
        },
        amount: 1
      }
    ]
  },
  {
    id: 3,
    name: "Giratina V-ASTRO",
    imgUrl: "https://tcg.pokemon.com/assets/img/tcgl/logos/en-us/logo.png",
    pokemons: [
      {
        card: {
          id: "ru1-2",
          name: "Cherrim",
          supertype: "Pokémon",
          subtypes: [
            "Stage 1"
          ],
          hp: "80",
          types: [
            "Grass"
          ],
          evolvesFrom: "Cherubi",
          attacks: [
            {
              name: "Solarbeam",
              cost: [
                "Grass",
                "Colorless",
                "Colorless"
              ],
              convertedEnergyCost: 3,
              damage: "60",
              text: ""
            }
          ],
          weaknesses: [
            {
              type: "Fire",
              value: "×2"
            }
          ],
          resistances: [
            {
              type: "Water",
              value: "-20"
            }
          ],
          retreatCost: [
            "Colorless"
          ],
          convertedRetreatCost: 1,
          set: {
            id: "ru1",
            name: "Pokémon Rumble",
            series: "Other",
            printedTotal: 16,
            total: 16,
            legalities: {
              unlimited: "Legal"
            },
            releaseDate: "2009/12/02",
            updatedAt: "2019/01/28 16:44:00",
            images: {
              symbol: "https://images.pokemontcg.io/ru1/symbol.png",
              logo: "https://images.pokemontcg.io/ru1/logo.png"
            }
          },
          number: "2",
          artist: "Pokemon Rumble",
          nationalPokedexNumbers: [
            421
          ],
          legalities: {
            unlimited: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/ru1/2.png",
            large: "https://images.pokemontcg.io/ru1/2_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/ru1-2",
            updatedAt: "2023/12/17",
            prices: {
              normal: {
                low: 6.5,
                mid: 12.48,
                high: 16.49,
                market: 16.05,
                directLow: null
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/ru1-2",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 10.5,
              lowPrice: 3.95,
              trendPrice: 6.22,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 0,
              reverseHoloLow: 0,
              reverseHoloTrend: 5.07,
              lowPriceExPlus: 7.99,
              avg1: 10.5,
              avg7: 6.02,
              avg30: 6.87,
              reverseHoloAvg1: 4.99,
              reverseHoloAvg7: 4.16,
              reverseHoloAvg30: 4.16
            }
          }
        },
        amount: 1
      },
      {
        card: {
          id: "ecard2-H2",
          name: "Arcanine",
          supertype: "Pokémon",
          subtypes: [
            "Stage 1"
          ],
          hp: "90",
          types: [
            "Fire"
          ],
          evolvesFrom: "Growlithe",
          abilities: [
            {
              name: "Extreme Speed",
              text: "You pay Colorless less to retreat Arcanine for each Energy attached to it.",
              type: "Poké-Body"
            }
          ],
          attacks: [
            {
              name: "Fire Blow",
              cost: [
                "Colorless",
                "Colorless",
                "Colorless"
              ],
              convertedEnergyCost: 3,
              damage: "30+",
              text: "You may discard any number of Fire Energy cards attached to Arcanine when you use this attack. If you do, flip a number of coins equal to the number of Fire Energy cards you discarded. This attack does 30 damage plus 30 more damage for each heads."
            }
          ],
          weaknesses: [
            {
              type: "Water",
              value: "×2"
            }
          ],
          retreatCost: [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          convertedRetreatCost: 3,
          set: {
            id: "ecard2",
            name: "Aquapolis",
            series: "E-Card",
            printedTotal: 147,
            total: 182,
            legalities: {
              unlimited: "Legal"
            },
            ptcgoCode: "AQ",
            releaseDate: "2003/01/15",
            updatedAt: "2020/08/14 09:35:00",
            images: {
              symbol: "https://images.pokemontcg.io/ecard2/symbol.png",
              logo: "https://images.pokemontcg.io/ecard2/logo.png"
            }
          },
          number: "H2",
          artist: "Kyoko Umemoto",
          rarity: "Rare Holo",
          nationalPokedexNumbers: [
            59
          ],
          legalities: {
            unlimited: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/ecard2/H2.png",
            large: "https://images.pokemontcg.io/ecard2/H2_hires.png"
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/ecard2-H2",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 297.47,
              lowPrice: 13,
              trendPrice: 191.55,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 0,
              reverseHoloLow: 0,
              reverseHoloTrend: 48.34,
              lowPriceExPlus: 41.9,
              avg1: 324.99,
              avg7: 179.97,
              avg30: 90,
              reverseHoloAvg1: 10,
              reverseHoloAvg7: 56.53,
              reverseHoloAvg30: 37.03
            }
          }
        },
        amount: 1
      },
      {
        card: {
          id: "base4-1",
          name: "Alakazam",
          supertype: "Pokémon",
          subtypes: [
            "Stage 2"
          ],
          level: "42",
          hp: "80",
          types: [
            "Psychic"
          ],
          evolvesFrom: "Kadabra",
          abilities: [
            {
              name: "Damage Swap",
              text: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
              type: "Pokémon Power"
            }
          ],
          attacks: [
            {
              name: "Confuse Ray",
              cost: [
                "Psychic",
                "Psychic",
                "Psychic"
              ],
              convertedEnergyCost: 3,
              damage: "30",
              text: "Flip a coin. If heads, the Defending Pokémon is now Confused."
            }
          ],
          weaknesses: [
            {
              type: "Psychic",
              value: "×2"
            }
          ],
          retreatCost: [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          convertedRetreatCost: 3,
          set: {
            id: "base4",
            name: "Base Set 2",
            series: "Base",
            printedTotal: 130,
            total: 130,
            legalities: {
              unlimited: "Legal"
            },
            ptcgoCode: "B2",
            releaseDate: "2000/02/24",
            updatedAt: "2022/10/10 15:12:00",
            images: {
              symbol: "https://images.pokemontcg.io/base4/symbol.png",
              logo: "https://images.pokemontcg.io/base4/logo.png"
            }
          },
          number: "1",
          artist: "Ken Sugimori",
          rarity: "Rare Holo",
          flavorText: "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
          nationalPokedexNumbers: [
            65
          ],
          legalities: {
            unlimited: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/base4/1.png",
            large: "https://images.pokemontcg.io/base4/1_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/base4-1",
            updatedAt: "2023/12/17",
            prices: {
              holofoil: {
                low: 14.16,
                mid: 20.99,
                high: 159.99,
                market: 25.18,
                directLow: 14.58
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/base4-1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 15.74,
              lowPrice: 6.99,
              trendPrice: 14.77,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 0,
              reverseHoloLow: 0,
              reverseHoloTrend: 22.63,
              lowPriceExPlus: 15,
              avg1: 30.75,
              avg7: 17.43,
              avg30: 21.79,
              reverseHoloAvg1: 19.95,
              reverseHoloAvg7: 22.81,
              reverseHoloAvg30: 21.3
            }
          }
        },
        amount: 1
      },
      {
        card: {
          id: "ex7-1",
          name: "Azumarill",
          supertype: "Pokémon",
          subtypes: [
            "Stage 1"
          ],
          hp: "80",
          types: [
            "Water"
          ],
          evolvesFrom: "Marill",
          abilities: [
            {
              name: "Froth",
              text: "Once during your turn, when you play Azumarill from your hand to evolve 1 of your Active Pokémon, you may use this power. Each Defending Pokémon is now Paralyzed.",
              type: "Poké-Power"
            }
          ],
          attacks: [
            {
              name: "Water Punch",
              cost: [
                "Water",
                "Colorless"
              ],
              convertedEnergyCost: 2,
              damage: "20+",
              text: "Flip a coin for each Water Energy attached to Azumarill. This attack does 20 damage plus 20 more damage for each heads."
            }
          ],
          weaknesses: [
            {
              type: "Lightning",
              value: "×2"
            }
          ],
          retreatCost: [
            "Colorless"
          ],
          convertedRetreatCost: 1,
          set: {
            id: "ex7",
            name: "Team Rocket Returns",
            series: "EX",
            printedTotal: 109,
            total: 111,
            legalities: {
              unlimited: "Legal"
            },
            ptcgoCode: "TRR",
            releaseDate: "2004/11/01",
            updatedAt: "2019/01/28 16:44:00",
            images: {
              symbol: "https://images.pokemontcg.io/ex7/symbol.png",
              logo: "https://images.pokemontcg.io/ex7/logo.png"
            }
          },
          number: "1",
          artist: "Sumiyoshi Kizuki",
          rarity: "Rare Holo",
          nationalPokedexNumbers: [
            184
          ],
          legalities: {
            unlimited: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/ex7/1.png",
            large: "https://images.pokemontcg.io/ex7/1_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/ex7-1",
            updatedAt: "2023/12/17",
            prices: {
              holofoil: {
                low: 15.11,
                mid: 19.99,
                high: 23,
                market: 16.84,
                directLow: 17.68
              },
              reverseHolofoil: {
                low: 16.51,
                mid: 25.1,
                high: 51.98,
                market: 32.45,
                directLow: 17.49
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/ex7-1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 5.53,
              lowPrice: 0.89,
              trendPrice: 35.36,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 11,
              reverseHoloLow: 1.4,
              reverseHoloTrend: 16.36,
              lowPriceExPlus: 2,
              avg1: 0.5,
              avg7: 5.78,
              avg30: 20.57,
              reverseHoloAvg1: 11,
              reverseHoloAvg7: 12.78,
              reverseHoloAvg30: 9.78
            }
          }
        },
        amount: 1
      },
      {
        card: {
          id: "ex3-1",
          name: "Absol",
          supertype: "Pokémon",
          subtypes: [
            "Basic"
          ],
          hp: "70",
          types: [
            "Darkness"
          ],
          attacks: [
            {
              name: "Bad News",
              cost: [
                "Darkness"
              ],
              convertedEnergyCost: 1,
              damage: "",
              text: "If the number of cards in your opponent's hand is at least 6, choose a number of cards there, without looking, until your opponent has 5 cards left. Have your opponent discard the cards you chose."
            },
            {
              name: "Prize Count",
              cost: [
                "Darkness",
                "Colorless"
              ],
              convertedEnergyCost: 2,
              damage: "20+",
              text: "If you have more Prize cards left than your opponent, this attack does 20 damage plus 20 more damage."
            }
          ],
          weaknesses: [
            {
              type: "Fighting",
              value: "×2"
            }
          ],
          resistances: [
            {
              type: "Psychic",
              value: "-30"
            }
          ],
          retreatCost: [
            "Colorless"
          ],
          convertedRetreatCost: 1,
          set: {
            id: "ex3",
            name: "Dragon",
            series: "EX",
            printedTotal: 97,
            total: 100,
            legalities: {
              unlimited: "Legal"
            },
            ptcgoCode: "DR",
            releaseDate: "2003/11/24",
            updatedAt: "2023/02/16 05:47:00",
            images: {
              symbol: "https://images.pokemontcg.io/ex3/symbol.png",
              logo: "https://images.pokemontcg.io/ex3/logo.png"
            }
          },
          number: "1",
          artist: "Naoyo Kimura",
          rarity: "Rare Holo",
          nationalPokedexNumbers: [
            359
          ],
          legalities: {
            unlimited: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/ex3/1.png",
            large: "https://images.pokemontcg.io/ex3/1_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/ex3-1",
            updatedAt: "2023/12/17",
            prices: {
              holofoil: {
                low: 31.49,
                mid: 31.75,
                high: 45,
                market: 37.41,
                directLow: null
              },
              reverseHolofoil: {
                low: 12,
                mid: 24.67,
                high: 57.83,
                market: 25.31,
                directLow: null
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/ex3-1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 9.3,
              lowPrice: 2,
              trendPrice: 16.15,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 18.75,
              reverseHoloLow: 3,
              reverseHoloTrend: 23.91,
              lowPriceExPlus: 7.25,
              avg1: 7.49,
              avg7: 10.24,
              avg30: 15.59,
              reverseHoloAvg1: 17.49,
              reverseHoloAvg7: 24.94,
              reverseHoloAvg30: 17.31
            }
          }
        },
        amount: 1
      },
      {
        card: {
          id: "pl3-1",
          name: "Absol G",
          supertype: "Pokémon",
          subtypes: [
            "Basic",
            "SP"
          ],
          level: "59",
          hp: "70",
          types: [
            "Darkness"
          ],
          attacks: [
            {
              name: "Feint Attack",
              cost: [
                "Darkness"
              ],
              convertedEnergyCost: 1,
              damage: "",
              text: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon."
            },
            {
              name: "Doom News",
              cost: [
                "Darkness",
                "Colorless",
                "Colorless"
              ],
              convertedEnergyCost: 3,
              damage: "",
              text: "Return all Energy cards attached to Absol G to your hand. The Defending Pokémon is Knocked Out at the end of your opponent's next turn."
            }
          ],
          weaknesses: [
            {
              type: "Fighting",
              value: "×2"
            }
          ],
          resistances: [
            {
              type: "Psychic",
              value: "-20"
            }
          ],
          retreatCost: [
            "Colorless"
          ],
          convertedRetreatCost: 1,
          set: {
            id: "pl3",
            name: "Supreme Victors",
            series: "Platinum",
            printedTotal: 147,
            total: 153,
            legalities: {
              unlimited: "Legal"
            },
            ptcgoCode: "SV",
            releaseDate: "2009/08/19",
            updatedAt: "2018/03/07 22:40:00",
            images: {
              symbol: "https://images.pokemontcg.io/pl3/symbol.png",
              logo: "https://images.pokemontcg.io/pl3/logo.png"
            }
          },
          number: "1",
          artist: "Yusuke Ishikawa",
          rarity: "Rare Holo",
          nationalPokedexNumbers: [
            359
          ],
          legalities: {
            unlimited: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/pl3/1.png",
            large: "https://images.pokemontcg.io/pl3/1_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/pl3-1",
            updatedAt: "2023/12/17",
            prices: {
              holofoil: {
                low: 3,
                mid: 4.47,
                high: 14,
                market: 8.96,
                directLow: null
              },
              reverseHolofoil: {
                low: 3.29,
                mid: 6.09,
                high: 7.58,
                market: 7,
                directLow: 2.9
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/pl3-1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 5,
              lowPrice: 1,
              trendPrice: 5.68,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 5.16,
              reverseHoloLow: 2.7,
              reverseHoloTrend: 5.61,
              lowPriceExPlus: 3.22,
              avg1: 6,
              avg7: 4.99,
              avg30: 5.21,
              reverseHoloAvg1: 9,
              reverseHoloAvg7: 5.84,
              reverseHoloAvg30: 5.37
            }
          }
        },
        amount: 1
      },
      {
        card: {
          id: "dv1-1",
          name: "Dratini",
          supertype: "Pokémon",
          subtypes: [
            "Basic"
          ],
          hp: "40",
          types: [
            "Dragon"
          ],
          evolvesTo: [
            "Dragonair"
          ],
          attacks: [
            {
              name: "Wrap",
              cost: [
                "Grass",
                "Lightning"
              ],
              convertedEnergyCost: 2,
              damage: "20",
              text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
            }
          ],
          weaknesses: [
            {
              type: "Dragon",
              value: "×2"
            }
          ],
          retreatCost: [
            "Colorless"
          ],
          convertedRetreatCost: 1,
          set: {
            id: "dv1",
            name: "Dragon Vault",
            series: "Black & White",
            printedTotal: 20,
            total: 21,
            legalities: {
              unlimited: "Legal",
              expanded: "Legal"
            },
            ptcgoCode: "DRV",
            releaseDate: "2012/10/05",
            updatedAt: "2019/01/28 16:44:00",
            images: {
              symbol: "https://images.pokemontcg.io/dv1/symbol.png",
              logo: "https://images.pokemontcg.io/dv1/logo.png"
            }
          },
          number: "1",
          artist: "Masakazu Fukuda",
          rarity: "Rare Holo",
          flavorText: "It is called the \"Mirage Pokémon\" because so few have seen it. Its shed skin has been found.",
          nationalPokedexNumbers: [
            147
          ],
          legalities: {
            unlimited: "Legal",
            expanded: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/dv1/1.png",
            large: "https://images.pokemontcg.io/dv1/1_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/dv1-1",
            updatedAt: "2023/12/17",
            prices: {
              holofoil: {
                low: 0.27,
                mid: 1.2,
                high: 6.58,
                market: 1.29,
                directLow: 1.95
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/dv1-1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 2.99,
              lowPrice: 0.15,
              trendPrice: 2.56,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 1.5,
              reverseHoloLow: 0.4,
              reverseHoloTrend: 1.76,
              lowPriceExPlus: 0.25,
              avg1: 1.5,
              avg7: 2.25,
              avg30: 2.43,
              reverseHoloAvg1: 1.5,
              reverseHoloAvg7: 2.01,
              reverseHoloAvg30: 1.28
            }
          }
        },
        amount: 1
      },
      {
        card: {
          id: "det1-1",
          name: "Bulbasaur",
          supertype: "Pokémon",
          subtypes: [
            "Basic"
          ],
          hp: "60",
          types: [
            "Grass"
          ],
          evolvesTo: [
            "Ivysaur"
          ],
          attacks: [
            {
              name: "Find a Friend",
              cost: [
                "Grass"
              ],
              convertedEnergyCost: 1,
              damage: "",
              text: "Search your deck for a Grass Pokémon, reveal it, and put it into your hand. Then, shuffle your deck."
            }
          ],
          weaknesses: [
            {
              type: "Fire",
              value: "×2"
            }
          ],
          retreatCost: [
            "Colorless"
          ],
          convertedRetreatCost: 1,
          set: {
            id: "det1",
            name: "Detective Pikachu",
            series: "Sun & Moon",
            printedTotal: 18,
            total: 18,
            legalities: {
              unlimited: "Legal",
              expanded: "Legal"
            },
            ptcgoCode: "DET",
            releaseDate: "2019/04/05",
            updatedAt: "2021/09/01 05:37:00",
            images: {
              symbol: "https://images.pokemontcg.io/det1/symbol.png",
              logo: "https://images.pokemontcg.io/det1/logo.png"
            }
          },
          number: "1",
          artist: "MPC Film",
          rarity: "Common",
          flavorText: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
          nationalPokedexNumbers: [
            1
          ],
          legalities: {
            unlimited: "Legal",
            expanded: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/det1/1.png",
            large: "https://images.pokemontcg.io/det1/1_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/det1-1",
            updatedAt: "2023/12/17",
            prices: {
              holofoil: {
                low: 0.04,
                mid: 0.39,
                high: 5.03,
                market: 0.29,
                directLow: null
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/det1-1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 0.38,
              lowPrice: 0.02,
              trendPrice: 0.44,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 0.02,
              reverseHoloLow: 0.02,
              reverseHoloTrend: 0.55,
              lowPriceExPlus: 0.02,
              avg1: 0.15,
              avg7: 0.46,
              avg30: 0.41,
              reverseHoloAvg1: 0.02,
              reverseHoloAvg7: 0.45,
              reverseHoloAvg30: 0.5
            }
          }
        },
        amount: 1
      },
      {
        card: {
          id: "dp3-1",
          name: "Ampharos",
          supertype: "Pokémon",
          subtypes: [
            "Stage 2"
          ],
          level: "52",
          hp: "130",
          types: [
            "Lightning"
          ],
          evolvesFrom: "Flaaffy",
          abilities: [
            {
              name: "Jamming",
              text: "After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.",
              type: "Poké-Body"
            }
          ],
          attacks: [
            {
              name: "Cluster Bolt",
              cost: [
                "Lightning",
                "Colorless",
                "Colorless"
              ],
              convertedEnergyCost: 3,
              damage: "70",
              text: "You may discard all Lightning Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
            }
          ],
          weaknesses: [
            {
              type: "Fighting",
              value: "+30"
            }
          ],
          resistances: [
            {
              type: "Metal",
              value: "-20"
            }
          ],
          retreatCost: [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          convertedRetreatCost: 3,
          set: {
            id: "dp3",
            name: "Secret Wonders",
            series: "Diamond & Pearl",
            printedTotal: 132,
            total: 132,
            legalities: {
              unlimited: "Legal"
            },
            ptcgoCode: "SW",
            releaseDate: "2007/11/01",
            updatedAt: "2018/03/04 10:35:00",
            images: {
              symbol: "https://images.pokemontcg.io/dp3/symbol.png",
              logo: "https://images.pokemontcg.io/dp3/logo.png"
            }
          },
          number: "1",
          artist: "Kouki Saitou",
          rarity: "Rare Holo",
          flavorText: "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
          nationalPokedexNumbers: [
            181
          ],
          legalities: {
            unlimited: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/dp3/1.png",
            large: "https://images.pokemontcg.io/dp3/1_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/dp3-1",
            updatedAt: "2023/12/17",
            prices: {
              holofoil: {
                low: 4.25,
                mid: 6.29,
                high: 29.98,
                market: 13.7,
                directLow: null
              },
              reverseHolofoil: {
                low: 4.15,
                mid: 5.27,
                high: 14.99,
                market: 7.04,
                directLow: 4.4
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/dp3-1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 3.22,
              lowPrice: 0.05,
              trendPrice: 1.81,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 4.99,
              reverseHoloLow: 0.49,
              reverseHoloTrend: 2.62,
              lowPriceExPlus: 0.49,
              avg1: 0.6,
              avg7: 3.22,
              avg30: 2.21,
              reverseHoloAvg1: 4.99,
              reverseHoloAvg7: 1.94,
              reverseHoloAvg30: 2.71
            }
          }
        },
        amount: 4
      },
      {
        card: {
          id: "xy5-1",
          name: "Weedle",
          supertype: "Pokémon",
          subtypes: [
            "Basic"
          ],
          hp: "50",
          types: [
            "Grass"
          ],
          evolvesTo: [
            "Kakuna"
          ],
          attacks: [
            {
              name: "Multiply",
              cost: [
                "Grass"
              ],
              convertedEnergyCost: 1,
              damage: "",
              text: "Search your deck for Weedle and put it onto your Bench. Shuffle your deck afterward."
            }
          ],
          weaknesses: [
            {
              type: "Fire",
              value: "×2"
            }
          ],
          retreatCost: [
            "Colorless"
          ],
          convertedRetreatCost: 1,
          set: {
            id: "xy5",
            name: "Primal Clash",
            series: "XY",
            printedTotal: 160,
            total: 164,
            legalities: {
              unlimited: "Legal",
              expanded: "Legal"
            },
            ptcgoCode: "PRC",
            releaseDate: "2015/02/04",
            updatedAt: "2020/05/01 16:06:00",
            images: {
              symbol: "https://images.pokemontcg.io/xy5/symbol.png",
              logo: "https://images.pokemontcg.io/xy5/logo.png"
            }
          },
          number: "1",
          artist: "Midori Harada",
          rarity: "Common",
          flavorText: "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
          nationalPokedexNumbers: [
            13
          ],
          legalities: {
            unlimited: "Legal",
            expanded: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/xy5/1.png",
            large: "https://images.pokemontcg.io/xy5/1_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/xy5-1",
            updatedAt: "2023/12/17",
            prices: {
              normal: {
                low: 0.01,
                mid: 0.19,
                high: 2,
                market: 0.16,
                directLow: null
              },
              reverseHolofoil: {
                low: 0.24,
                mid: 0.37,
                high: 4.06,
                market: 0.38,
                directLow: 0.38
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/xy5-1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 0.03,
              lowPrice: 0.02,
              trendPrice: 0.1,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 0.5,
              reverseHoloLow: 0.1,
              reverseHoloTrend: 0.55,
              lowPriceExPlus: 0.02,
              avg1: 0.02,
              avg7: 0.08,
              avg30: 0.09,
              reverseHoloAvg1: 0.5,
              reverseHoloAvg7: 0.73,
              reverseHoloAvg30: 0.52
            }
          }
        },
        amount: 1
      },
      {
        card: {
          id: "hgss4-1",
          name: "Aggron",
          supertype: "Pokémon",
          subtypes: [
            "Stage 2"
          ],
          hp: "140",
          types: [
            "Metal"
          ],
          evolvesFrom: "Lairon",
          attacks: [
            {
              name: "Second Strike",
              cost: [
                "Metal",
                "Metal",
                "Colorless"
              ],
              convertedEnergyCost: 3,
              damage: "40",
              text: "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 40 more damage."
            },
            {
              name: "Guard Claw",
              cost: [
                "Metal",
                "Metal",
                "Colorless",
                "Colorless"
              ],
              convertedEnergyCost: 4,
              damage: "60",
              text: "During your opponent's next turn, any damage done to Aggron by attacks is reduced by 20 (after applying Weakness and Resistance)."
            }
          ],
          weaknesses: [
            {
              type: "Fire",
              value: "×2"
            }
          ],
          resistances: [
            {
              type: "Psychic",
              value: "-20"
            }
          ],
          retreatCost: [
            "Colorless",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          convertedRetreatCost: 4,
          set: {
            id: "hgss4",
            name: "HS—Triumphant",
            series: "HeartGold & SoulSilver",
            printedTotal: 102,
            total: 103,
            legalities: {
              unlimited: "Legal"
            },
            ptcgoCode: "TM",
            releaseDate: "2010/11/03",
            updatedAt: "2018/03/04 10:35:00",
            images: {
              symbol: "https://images.pokemontcg.io/hgss4/symbol.png",
              logo: "https://images.pokemontcg.io/hgss4/logo.png"
            }
          },
          number: "1",
          artist: "Kagemaru Himeno",
          rarity: "Rare Holo",
          flavorText: "You can tell its age by the length of its iron horns. It claims an entire mountain as its territory.",
          nationalPokedexNumbers: [
            306
          ],
          legalities: {
            unlimited: "Legal"
          },
          images: {
            small: "https://images.pokemontcg.io/hgss4/1.png",
            large: "https://images.pokemontcg.io/hgss4/1_hires.png"
          },
          tcgplayer: {
            url: "https://prices.pokemontcg.io/tcgplayer/hgss4-1",
            updatedAt: "2023/12/17",
            prices: {
              holofoil: {
                low: 1.33,
                mid: 1.8,
                high: 5.1,
                market: 1.68,
                directLow: null
              },
              reverseHolofoil: {
                low: 1.99,
                mid: 3.78,
                high: 6.24,
                market: 4.8,
                directLow: 2.42
              }
            }
          },
          cardmarket: {
            url: "https://prices.pokemontcg.io/cardmarket/hgss4-1",
            updatedAt: "2023/12/17",
            prices: {
              averageSellPrice: 3.99,
              lowPrice: 0.4,
              trendPrice: 4.19,
              germanProLow: 0,
              suggestedPrice: 0,
              reverseHoloSell: 1.13,
              reverseHoloLow: 0.7,
              reverseHoloTrend: 2.47,
              lowPriceExPlus: 1,
              avg1: 3.99,
              avg7: 6.67,
              avg30: 3.58,
              reverseHoloAvg1: 1,
              reverseHoloAvg7: 2.63,
              reverseHoloAvg30: 3.02
            }
          }
        },
        amount: 1
      }
    ]
  }
]
@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrl: './create-deck.component.scss',
})
export class CreateDeckComponent {
  // TODO - resolver a questao dos requests InMemory/externo para o search funcionar
  // public cards$ = this._pokemonService.getAllPokemons().pipe();
  public cards$: Data[] = [];

  readonly search$ = new BehaviorSubject<string>('');

  public form = this._initForm();

  choosenCards: { card: Data; amount: number }[] = [];

  totalCards: any;

  @ViewChild('toast', { read: IgxToastComponent })
  public toast!: IgxToastComponent;

  readonly pokemons$ = this.search$.pipe(
    switchMap((event) => this.getPokemon(event))
  );

  readonly pokemonNotFound$ = this.pokemons$.pipe(
    map((movies) => (movies ? '' : this.search$.value))
  );

  constructor(
    private _formBuilder: FormBuilder,
    private _deckService: DeckService,
    private _pokemonService: PokemonService,
    private _router: Router
  ) {
    // TODO - remover urgente para o search funcionar
    this._pokemonService.getPokemons().then((res: any) => {
      this.cards$ = res.data;
    });

  }

  private _initForm(): FormGroup {
    return this._formBuilder.group({
      name: [null],
      imgUrl: [null],
      pokemons: this._formBuilder.array([]),
    });
  }

  public createDeck() {
    const dataToSend = {
      name: this.form.value.name === null ? 'New Deck' : this.form.value.name,
      imgUrl:
        this.form.value.imgUrl === null ? defaultImage : this.form.value.imgUrl,
      pokemons: this.choosenCards,
    };
    this._deckService.postDeck(dataToSend).subscribe();
    this._router.navigateByUrl(`/home`);
  }

  drop(event: CdkDragDrop<{ card: Data; amount: number }[], Data[]>) {
    const item = event.previousContainer.data[event.previousIndex];
    const data = event.container.data;
    const existingCard = data.find((d) => d.card.name === item.name);

    if (existingCard) {
      if (existingCard.amount < 4) {
        existingCard.amount++;
      } else {
        this.toast.open('Você só pode ter quatro unidades da mesma carta.');
      }
      this.choosenCards = [...data];
      return;
    }
    data.unshift({
      card: item,
      amount: 1,
    });

    this.choosenCards = [...data];

    const sum = this.choosenCards.reduce((accumulador, object) => {
      return accumulador + object.amount;
    }, 0);

    this.totalCards = sum;
    
    if (sum > 60) {
      this.toast.open('Só podem haver 60 cartas em cada deck.');
      return 
    }
  }

  search(search: string){
    this.search$.next(search);
  }

  private getPokemon(event: string): Observable<Array<any>>{
    return this._pokemonService.getPokemon(event);
  }

}
