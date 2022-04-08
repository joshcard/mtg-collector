import './App.css';
import Header from './Header.js'
import SearchBar from './SearchBar';
import Collection from './Collection';
import Options from './Options';
import Details from './Details';
import { useState } from 'react';

function App() {
  const [cardCollection, setCardCollection] = useState([
          {
              "name": "Finale of Promise",
              "manaCost": "{X}{R}{R}",
              "cmc": 2.0,
              "colors": [
                  "Red"
              ],
              "colorIdentity": [
                  "R"
              ],
              "type": "Sorcery",
              "types": [
                  "Sorcery"
              ],
              "rarity": "Mythic",
              "set": "WAR",
              "setName": "War of the Spark",
              "text": "You may cast up to one target instant card and/or up to one target sorcery card from your graveyard each with mana value X or less without paying their mana costs. If a spell cast this way would be put into your graveyard this turn, exile it instead. If X is 10 or more, copy each of those spells twice. You may choose new targets for the copies.",
              "artist": "Jaime Jones",
              "number": "127",
              "layout": "normal",
              "multiverseid": "461054",
              "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461054&type=card",
              "rulings": [
                  {
                      "date": "2019-05-03",
                      "text": "As Finale of Promise resolves, first you cast the target instant card and/or the target sorcery card in either order. Then, if X is 10 or more, you copy each of those twice and put the copies on the stack in any order. The copies will resolve before the original spells."
                  },
                  {
                      "date": "2019-05-03",
                      "text": "A split card that’s an instant and a sorcery card may be the target of Finale of Promise twice. However, once you cast that card once, it can’t be cast a second time."
                  },
                  {
                      "date": "2019-05-03",
                      "text": "If a spell has {X} in its mana cost, you must choose 0 as the value of X when casting it without paying its mana cost."
                  },
                  {
                      "date": "2019-05-03",
                      "text": "If you cast a card “without paying its mana cost,” you can’t choose to cast it for any alternative costs. You can, however, pay additional costs. If the card has any mandatory additional costs, such as that of Spark Harvest, you must pay those to cast the card."
                  },
                  {
                      "date": "2019-05-03",
                      "text": "If the spell that’s copied is modal (that is, it says “Choose one—” or the like), the copies will have the same mode or modes. You can’t choose different ones."
                  },
                  {
                      "date": "2019-05-03",
                      "text": "If the spell has damage divided as it was cast, the division can’t be changed (although the targets receiving that damage still can). The same is true of spells that distribute counters."
                  },
                  {
                      "date": "2019-05-03",
                      "text": "You can’t choose to pay any additional costs for the copies. However, effects based on any additional costs that were paid for the original spell are copied as though those same costs were paid for the copy too."
                  },
                  {
                      "date": "2019-05-03",
                      "text": "The copies that Finale of Promise creates are created on the stack, so they’re not “cast.” Abilities that trigger when a player casts a spell won’t trigger."
                  }
              ],
              "foreignNames": [
                  {
                      "name": "Finale der Verheißung",
                      "text": "Du kannst bis zu eine Spontanzauberkarte deiner Wahl und/oder bis zu eine Hexereikarte deiner Wahl, deren umgewandelte Manakosten jeweils X oder weniger betragen, aus deinem Friedhof wirken, ohne ihre Manakosten zu bezahlen. Falls eine Karte, die auf diese Weise gewirkt wurde, in diesem Zug auf deinen Friedhof gelegt würde, schicke sie stattdessen ins Exil. Falls X gleich 10 oder mehr ist, kopiere jeden der Zaubersprüche zweimal. Du kannst neue Ziele für die Kopien bestimmen.",
                      "type": "Hexerei",
                      "flavor": null,
                      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461318&type=card",
                      "language": "German",
                      "multiverseid": 461318
                  },
                  {
                      "name": "Final de promesa",
                      "text": "Puedes lanzar hasta una carta de instantáneo objetivo y/o hasta una carta de conjuro objetivo desde tu cementerio, cada una con coste de maná convertido de X o menos, sin pagar sus costes de maná. Si una carta lanzada de esta manera fuera a ir a tu cementerio este turno, en vez de eso, exíliala. Si X es 10 o más, copia cada uno de esos hechizos dos veces. Puedes elegir nuevos objetivos para las copias.",
                      "type": "Conjuro",
                      "flavor": null,
                      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461582&type=card",
                      "language": "Spanish",
                      "multiverseid": 461582
                  },
                  {
                      "name": "Summum de la promesse",
                      "text": "Vous pouvez lancer jusqu'à une carte d'éphémère ciblée et/ou jusqu'à une carte de rituel ciblée chacune avec un coût converti de mana inférieur ou égal à X depuis votre cimetière sans payer leur coût de mana. Si une carte lancée de cette manière devait être mise dans votre cimetière ce tour-ci, exilez-la à la place. Si X est supérieur ou égal à 10, copiez chacun de ces sorts deux fois. Vous pouvez choisir de nouvelles cibles pour ces copies.",
                      "type": "Rituel",
                      "flavor": null,
                      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461846&type=card",
                      "language": "French",
                      "multiverseid": 461846
                  },
                  {
                      "name": "Finale di Promessa",
                      "text": "Puoi lanciare fino a una carta istantaneo bersaglio e/o fino a una carta stregoneria bersaglio dal tuo cimitero, ognuna con costo di mana convertito pari o inferiore a X, senza pagare i loro costi di mana. Se una carta lanciata in questo modo sta per essere messa nel tuo cimitero in questo turno, invece esiliala. Se X è pari o superiore a 10, copia ciascuna di quelle magie due volte. Puoi scegliere nuovi bersagli per le copie.",
                      "type": "Stregoneria",
                      "flavor": null,
                      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=462110&type=card",
                      "language": "Italian",
                      "multiverseid": 462110
                  },
                  {
                      "name": "約束の終焉",
                      "text": "あなたはあなたの墓地から、点数で見たマナ・コストがそれぞれＸ以下である、インスタント・カード最大１枚とソーサリー・カード最大１枚を対象とし、それらをそのマナ・コストを支払うことなく唱えてもよい。このターン、これにより唱えたカードがあなたの墓地に置かれるなら、代わりにそれを追放する。Ｘが10以上なら、それらの呪文をそれぞれ２回コピーする。あなたはそれらのコピーの新しい対象を選んでもよい。",
                      "type": "ソーサリー",
                      "flavor": null,
                      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=462374&type=card",
                      "language": "Japanese",
                      "multiverseid": 462374
                  },
                  {
                      "name": "약속의 대단원",
                      "text": "당신의 무덤에서 전환마나비용이 각각 X 이하인 순간마법 카드 최대 한 개 및/또는 집중마법 카드 최대 한 개를 목표로 정한다. 당신은 그 카드들을 마나 비용을 지불하지 않고 발동할 수 있다. 이런 식으로 발동한 카드가 이 턴에 당신의 무덤에 들어가려고 하면, 대신에 그 카드를 추방한다. X가 10 이상이라면, 그 주문들을 각각 두 번 복사한다. 당신은 그 복사본들의 목표를 새로 정할 수 있다.",
                      "type": "집중마법",
                      "flavor": null,
                      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=462638&type=card",
                      "language": "Korean",
                      "multiverseid": 462638
                  },
                  {
                      "name": "Final de Promessa",
                      "text": "Você pode conjurar até um card de mágica instantânea alvo e/ou até um card de feitiço alvo de seu cemitério, cada um com custo de mana convertido igual ou inferior a X, sem pagar seus custos de mana. Se um card conjurado dessa maneira seria colocado em seu cemitério neste turno, em vez disso, exile-o. Se X for igual ou superior a 10, copie cada uma daquelas mágicas duas vezes. Você pode escolher novos alvos para as cópias.",
                      "type": "Feitiço",
                      "flavor": null,
                      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=462902&type=card",
                      "language": "Portuguese (Brazil)",
                      "multiverseid": 462902
                  },
                  {
                      "name": "Апофеоз Завета",
                      "text": "Вы можете разыграть из вашего кладбища без уплаты их мана-стоимости не более одной целевой карты мгновенного заклинания и (или) не более одной целевой карты волшебства, конвертированная мана-стоимость каждой из которых не превышает X. Если разыгранная таким образом карта должна быть положена на ваше кладбище в этом ходу, изгоните ее вместо этого. Если X равен 10 или больше, скопируйте каждое из тех заклинаний дважды. Вы можете выбрать новые цели для тех копий.",
                      "type": "Волшебство",
                      "flavor": null,
                      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463166&type=card",
                      "language": "Russian",
                      "multiverseid": 463166
                  },
                  {
                      "name": "允诺终时",
                      "text": "选择目标在你坟墓场中的至多一张瞬间牌和／或至多一张法术牌，且两者的总法术力费用均须等于或小于X。你可以从该处施放这些牌，且不需支付其法术力费用。如果以此法施放的牌于本回合中将置入你的坟墓场，则改为将其放逐。如果X等于或大于10，则将这些咒语各复制两次。你可以为每个复制品选择新的目标。",
                      "type": "法术",
                      "flavor": null,
                      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463430&type=card",
                      "language": "Chinese Simplified",
                      "multiverseid": 463430
                  },
                  {
                      "name": "允諾終時",
                      "text": "選擇目標在你墳墓場中的至多一張瞬間牌和／或至多一張巫術牌，且兩者的總魔法力費用均須等於或小於X。你可以從該處施放這些牌，且不需支付其魔法力費用。如果以此法施放的牌於本回合中將置入你的墳墓場，則改為將其放逐。如果X等於或大於10，則將這些咒語各複製兩次。你可以為每個複製品選擇新的目標。",
                      "type": "巫術",
                      "flavor": null,
                      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463694&type=card",
                      "language": "Chinese Traditional",
                      "multiverseid": 463694
                  }
              ],
              "printings": [
                  "PWAR",
                  "WAR"
              ],
              "originalText": "You may cast up to one target instant card and/or up to one target sorcery card from your graveyard each with converted mana cost X or less without paying their mana costs. If a card cast this way would be put into your graveyard this turn, exile it instead. If X is 10 or more, copy each of those spells twice. You may choose new targets for the copies.",
              "originalType": "Sorcery",
              "legalities": [
                  {
                      "format": "Commander",
                      "legality": "Legal"
                  },
                  {
                      "format": "Duel",
                      "legality": "Legal"
                  },
                  {
                      "format": "Gladiator",
                      "legality": "Legal"
                  },
                  {
                      "format": "Historic",
                      "legality": "Legal"
                  },
                  {
                      "format": "Historicbrawl",
                      "legality": "Legal"
                  },
                  {
                      "format": "Legacy",
                      "legality": "Legal"
                  },
                  {
                      "format": "Modern",
                      "legality": "Legal"
                  },
                  {
                      "format": "Pioneer",
                      "legality": "Legal"
                  },
                  {
                      "format": "Vintage",
                      "legality": "Legal"
                  }
              ],
              "id": "6f6fdec6-cbe0-594b-bd8f-582ff3a14aa5"
          },
          {
            "name": "Cancel",
            "manaCost": "{1}{U}{U}",
            "cmc": 3.0,
            "colors": [
                "Blue"
            ],
            "colorIdentity": [
                "U"
            ],
            "type": "Instant",
            "types": [
                "Instant"
            ],
            "rarity": "Common",
            "set": "AKH",
            "setName": "Amonkhet",
            "text": "Counter target spell.",
            "flavor": "\"Let me try one of Kefnet's puzzles. This one was too easy.\"",
            "artist": "Mathias Kollros",
            "number": "44",
            "layout": "normal",
            "multiverseid": "426746",
            "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426746&type=card",
            "foreignNames": [
                {
                    "name": "Abbrechen",
                    "text": "Neutralisiere einen Zauberspruch deiner Wahl.",
                    "type": "Spontanzauber",
                    "flavor": "„Lasst mich besser eins von Kefnets Rätseln lösen. Das hier war zu einfach.\"",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427015&type=card",
                    "language": "German",
                    "multiverseid": 427015
                },
                {
                    "name": "Deshacer",
                    "text": "Contrarresta el hechizo objetivo.",
                    "type": "Instantáneo",
                    "flavor": "\"Déjame intentar uno de los rompecabezas de Kefnet. Este era demasiado fácil\".",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427284&type=card",
                    "language": "Spanish",
                    "multiverseid": 427284
                },
                {
                    "name": "Annuler",
                    "text": "Contrecarrez le sort ciblé.",
                    "type": "Éphémère",
                    "flavor": "« Laissez-moi tenter de résoudre l'une des énigmes de Kefnet. Celle-ci était bien trop simple. »",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427553&type=card",
                    "language": "French",
                    "multiverseid": 427553
                },
                {
                    "name": "Eliminare",
                    "text": "Neutralizza una magia bersaglio.",
                    "type": "Istantaneo",
                    "flavor": "\"Dovrei provare a risolvere uno degli enigmi di Kefnet. Questo era troppo facile.\"",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427822&type=card",
                    "language": "Italian",
                    "multiverseid": 427822
                },
                {
                    "name": "取り消し",
                    "text": "呪文１つを対象とし、それを打ち消す。",
                    "type": "インスタント",
                    "flavor": "「ケフネト様の難問に挑戦させてください。これは簡単過ぎます。」",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428091&type=card",
                    "language": "Japanese",
                    "multiverseid": 428091
                },
                {
                    "name": "주문 취소",
                    "text": "주문을 목표로 정한다. 그 주문을 무효화한다.",
                    "type": "순간마법",
                    "flavor": "\"케프넷의 퍼즐 하나를 풀어보자. 이건 너무 쉽잖아.\"",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428360&type=card",
                    "language": "Korean",
                    "multiverseid": 428360
                },
                {
                    "name": "Cancelar",
                    "text": "Anule a mágica alvo.",
                    "type": "Mágica Instantânea",
                    "flavor": "\"Deixe-me tentar resolver um dos enigmas de Kefnet. Esse foi fácil demais.\"",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428629&type=card",
                    "language": "Portuguese (Brazil)",
                    "multiverseid": 428629
                },
                {
                    "name": "Отмена",
                    "text": "Отмените целевое заклинание.",
                    "type": "Мгновенное заклинание",
                    "flavor": "«Хочу попробовать какую-нибудь головоломку Кефнета. Эта задача была слишком уж простая».",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428898&type=card",
                    "language": "Russian",
                    "multiverseid": 428898
                },
                {
                    "name": "取消",
                    "text": "反击目标咒语。",
                    "type": "瞬间",
                    "flavor": "「给我道刻法涅的谜题试试。这个太简单了。」",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429167&type=card",
                    "language": "Chinese Simplified",
                    "multiverseid": 429167
                },
                {
                    "name": "取消",
                    "text": "反擊目標咒語。",
                    "type": "瞬間",
                    "flavor": "「給我道刻法涅的謎題試試。這個太簡單了。」",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429436&type=card",
                    "language": "Chinese Traditional",
                    "multiverseid": 429436
                }
            ],
            "printings": [
                "10E",
                "AKH",
                "ALA",
                "DPA",
                "KTK",
                "M10",
                "M11",
                "M12",
                "M14",
                "M15",
                "M19",
                "M21",
                "MB1",
                "P10",
                "PC2",
                "PCA",
                "PRM",
                "PS11",
                "RTR",
                "TSP",
                "XLN",
                "ZEN"
            ],
            "originalText": "Counter target spell.",
            "originalType": "Instant",
            "legalities": [
                {
                    "format": "Commander",
                    "legality": "Legal"
                },
                {
                    "format": "Duel",
                    "legality": "Legal"
                },
                {
                    "format": "Gladiator",
                    "legality": "Legal"
                },
                {
                    "format": "Historic",
                    "legality": "Legal"
                },
                {
                    "format": "Historicbrawl",
                    "legality": "Legal"
                },
                {
                    "format": "Legacy",
                    "legality": "Legal"
                },
                {
                    "format": "Modern",
                    "legality": "Legal"
                },
                {
                    "format": "Pauper",
                    "legality": "Legal"
                },
                {
                    "format": "Paupercommander",
                    "legality": "Legal"
                },
                {
                    "format": "Penny",
                    "legality": "Legal"
                },
                {
                    "format": "Pioneer",
                    "legality": "Legal"
                },
                {
                    "format": "Vintage",
                    "legality": "Legal"
                }
            ],
            "id": "6517ce7c-7b98-53b9-bd4c-41ce66d55bd5"
        },
        {
          "name": "Tempered Steel",
          "manaCost": "{1}{W}{W}",
          "cmc": 3.0,
          "colors": [
              "White"
          ],
          "colorIdentity": [
              "W"
          ],
          "type": "Enchantment",
          "types": [
              "Enchantment"
          ],
          "rarity": "Rare",
          "set": "2XM",
          "setName": "Double Masters",
          "text": "Artifact creatures you control get +2/+2.",
          "flavor": "\"Death shall prevail as long as our will falls to rust. May necessity anneal our resolve.\"\n—Ghalma the Shaper",
          "artist": "Wayne Reynolds",
          "number": "34",
          "layout": "normal",
          "multiverseid": "489707",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489707&type=card",
          "foreignNames": [
              {
                  "name": "Gehärteter Stahl",
                  "text": "Artefaktkreaturen, die du kontrollierst, erhalten +2/+2.",
                  "type": "Verzauberung",
                  "flavor": "„Der Tod wird siegen, solange unser Wille rostet. Möge die Not unsere Entschlusskraft stählen.\"\n—Ghalma die Formerin",
                  "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=490039&type=card",
                  "language": "German",
                  "multiverseid": 490039
              },
              {
                  "name": "Acier trempé",
                  "text": "Les créatures-artefacts que vous contrôlez gagnent +2/+2.",
                  "type": "Enchantement",
                  "flavor": "« La mort l'emportera tant que nos volontés succomberont à la rouille. Que la nécessité trempe notre détermination. »\n—Ghalma la forgeuse",
                  "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=490371&type=card",
                  "language": "French",
                  "multiverseid": 490371
              },
              {
                  "name": "鍛えられた鋼",
                  "text": "あなたがコントロールしているアーティファクト・クリーチャーは＋２/＋２の修整を受ける。",
                  "type": "エンチャント",
                  "flavor": "「我々の意思が錆びていくならば、死が広まるでしょう。求める心が我らの決心を鍛えてくれることを願います。」\n――造物師ガルマ",
                  "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=490703&type=card",
                  "language": "Japanese",
                  "multiverseid": 490703
              },
              {
                  "name": "精炼钢",
                  "text": "由你操控的神器生物得+2/+2。",
                  "type": "结界",
                  "flavor": "「如果我们的意志生锈，死亡便将横行无阻；但愿困境能激励我们的决心。」\n～塑型师佳玛",
                  "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=491035&type=card",
                  "language": "Chinese Simplified",
                  "multiverseid": 491035
              }
          ],
          "printings": [
              "2XM",
              "HA3",
              "PRM",
              "PSOM",
              "SOM"
          ],
          "originalText": "Artifact creatures you control get +2/+2.",
          "originalType": "Enchantment",
          "legalities": [
              {
                  "format": "Commander",
                  "legality": "Legal"
              },
              {
                  "format": "Duel",
                  "legality": "Legal"
              },
              {
                  "format": "Gladiator",
                  "legality": "Legal"
              },
              {
                  "format": "Historic",
                  "legality": "Legal"
              },
              {
                  "format": "Historicbrawl",
                  "legality": "Legal"
              },
              {
                  "format": "Legacy",
                  "legality": "Legal"
              },
              {
                  "format": "Modern",
                  "legality": "Legal"
              },
              {
                  "format": "Penny",
                  "legality": "Legal"
              },
              {
                  "format": "Vintage",
                  "legality": "Legal"
              }
          ],
          "id": "d56abffa-6fe8-582b-b4fe-10e026f17ae3"
      },
      {
        "name": "Ancestor's Chosen",
        "manaCost": "{5}{W}{W}",
        "cmc": 7.0,
        "colors": [
            "White"
        ],
        "colorIdentity": [
            "W"
        ],
        "type": "Creature — Human Cleric",
        "types": [
            "Creature"
        ],
        "subtypes": [
            "Human",
            "Cleric"
        ],
        "rarity": "Uncommon",
        "set": "10E",
        "setName": "Tenth Edition",
        "text": "First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen enters the battlefield, you gain 1 life for each card in your graveyard.",
        "artist": "Pete Venters",
        "number": "1",
        "power": "4",
        "toughness": "4",
        "layout": "normal",
        "multiverseid": "130550",
        "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card",
        "variations": [
            "b7c19924-b4bf-56fc-aa73-f586e940bd42"
        ],
        "foreignNames": [
            {
                "name": "Ausgewählter der Ahnfrau",
                "text": "Erstschlag (Diese Kreatur fügt Kampfschaden vor Kreaturen ohne Erstschlag zu.)\nWenn der Ausgewählte der Ahnfrau ins Spiel kommt, erhältst du 1 Lebenspunkt für jede Karte in deinem Friedhof dazu.",
                "type": "Kreatur — Mensch, Kleriker",
                "flavor": "„Es ist der Wille aller, und meine Hand, die ihn ausführt.\"",
                "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148411&type=card",
                "language": "German",
                "multiverseid": 148411
            },
            {
                "name": "Elegido de la Antepasada",
                "text": "Daña primero. (Esta criatura hace daño de combate antes que las criaturas sin la habilidad de dañar primero.)\nCuando el Elegido de la Antepasada entre en juego, ganas 1 vida por cada carta en tu cementerio.",
                "type": "Criatura — Clérigo humano",
                "flavor": "\"La voluntad de todos, realizada por mi mano.\"",
                "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=150317&type=card",
                "language": "Spanish",
                "multiverseid": 150317
            },
            {
                "name": "Élu de l'Ancêtre",
                "text": "Initiative (Cette créature inflige des blessures de combat avant les créatures sans l'initiative.)\nQuand l'Élu de l'Ancêtre arrive en jeu, vous gagnez 1 point de vie pour chaque carte dans votre cimetière.",
                "type": "Créature : humain et clerc",
                "flavor": "« La volonté de tous passe par ma main. »",
                "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=149934&type=card",
                "language": "French",
                "multiverseid": 149934
            },
            {
                "name": "Prescelto dell'Antenata",
                "text": "Attacco improvviso (Questa creatura infligge danno da combattimento prima delle creature senza attacco improvviso.)\nQuando il Prescelto dell'Antenata entra in gioco, guadagni 1 punto vita per ogni carta nel tuo cimitero.",
                "type": "Creatura — Chierico Umano",
                "flavor": "\"La volontà di tutti, eseguita per mano mia.\"",
                "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148794&type=card",
                "language": "Italian",
                "multiverseid": 148794
            },
            {
                "name": "祖神に選ばれし者",
                "text": "先制攻撃 （このクリーチャーは先制攻撃を持たないクリーチャーよりも先に戦闘ダメージを与える。）\n祖神に選ばれし者が場に出たとき、あなたはあなたの墓地にあるカード１枚につき１点のライフを得る。",
                "type": "クリーチャー — 人間・クレリック",
                "flavor": "すべての意思を、この手で成そう。",
                "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148028&type=card",
                "language": "Japanese",
                "multiverseid": 148028
            },
            {
                "name": "Eleito da Ancestral",
                "text": "Iniciativa (Esta criatura causa dano de combate antes de criaturas sem a habilidade de iniciativa.)\nQuando Eleito da Ancestral entra em jogo, você ganha 1 ponto de vida para cada card em seu cemitério.",
                "type": "Criatura — Humano Clérigo",
                "flavor": "\"A vontade de todos pelas minhas mãos realizada.\"",
                "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=149551&type=card",
                "language": "Portuguese (Brazil)",
                "multiverseid": 149551
            },
            {
                "name": "Избранник Прародителя",
                "text": "Первый удар (Это существо наносит боевые повреждения раньше существ без Первого удара.)\nКогда Избранник Прародителя входит в игру, вы получаете 1 жизнь за каждую карту на вашем кладбище.",
                "type": "Существо — Человек Священник",
                "flavor": "\"Общая воля моей рукой вершится\".",
                "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=149168&type=card",
                "language": "Russian",
                "multiverseid": 149168
            },
            {
                "name": "祖灵的爱民",
                "text": "先攻（此生物会比不具先攻异能的生物提前造成战斗伤害。）\n当祖灵的爱民进场时，你坟墓场中每有一张牌，你便获得1点生命。",
                "type": "生物～人类／僧侣",
                "flavor": "「众生所愿，吾手所圆。」",
                "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=147645&type=card",
                "language": "Chinese Simplified",
                "multiverseid": 147645
            }
        ],
        "printings": [
            "10E",
            "JUD",
            "UMA"
        ],
        "originalText": "First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen comes into play, you gain 1 life for each card in your graveyard.",
        "originalType": "Creature - Human Cleric",
        "legalities": [
            {
                "format": "Commander",
                "legality": "Legal"
            },
            {
                "format": "Duel",
                "legality": "Legal"
            },
            {
                "format": "Legacy",
                "legality": "Legal"
            },
            {
                "format": "Modern",
                "legality": "Legal"
            },
            {
                "format": "Paupercommander",
                "legality": "Restricted"
            },
            {
                "format": "Penny",
                "legality": "Legal"
            },
            {
                "format": "Premodern",
                "legality": "Legal"
            },
            {
                "format": "Vintage",
                "legality": "Legal"
            }
        ],
        "id": "5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c"
    },
    {
      "name": "Nicol Bolas, Planeswalker",
      "manaCost": "{4}{U}{B}{B}{R}",
      "cmc": 8.0,
      "colors": [
          "Black",
          "Red",
          "Blue"
      ],
      "colorIdentity": [
          "B",
          "R",
          "U"
      ],
      "type": "Legendary Planeswalker — Bolas",
      "supertypes": [
          "Legendary"
      ],
      "types": [
          "Planeswalker"
      ],
      "subtypes": [
          "Bolas"
      ],
      "rarity": "Mythic",
      "set": "DDH",
      "setName": "Duel Decks: Ajani vs. Nicol Bolas",
      "text": "[+3]: Destroy target noncreature permanent.\n[−2]: Gain control of target creature.\n[−9]: Nicol Bolas, Planeswalker deals 7 damage to target player or planeswalker. That player or that planeswalker's controller discards seven cards, then sacrifices seven permanents.",
      "artist": "Izzy",
      "number": "42",
      "layout": "normal",
      "multiverseid": "266154",
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=266154&type=card",
      "loyalty": "5",
      "rulings": [
          {
              "date": "2009-02-01",
              "text": "The control-change effect has no duration. It will last until the game ends or the affected creature leaves the battlefield. It may be superseded by a later control-change effect."
          },
          {
              "date": "2012-07-01",
              "text": "If the damage from Nicol Bolas’s third ability is prevented or redirected, the rest of the effect will still happen. Specifically, the number of cards discarded and permanents sacrificed isn’t tied to the amount of damage dealt."
          },
          {
              "date": "2012-07-01",
              "text": "For the third ability, if the player is an illegal target when the ability tries to resolve, the ability doesn’t resolve and none of its effects will happen. No damage will be dealt, no cards will be discarded, and no permanents will be sacrificed."
          }
      ],
      "foreignNames": [
          {
              "name": "Planeswalker Nicol Bolas",
              "text": "+3: Zerstöre eine bleibende Karte deiner Wahl, die keine Kreatur ist.\n-2: Übernimm die Kontrolle über eine Kreatur deiner Wahl.\n-9: Planeswalker Nicol Bolas fügt einem Spieler deiner Wahl 7 Schadenspunkte zu. Dieser Spieler wirft sieben Karten aus seiner Hand ab und opfert dann sieben bleibende Karten.",
              "type": "Planeswalker — Bolas",
              "flavor": null,
              "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=266136&type=card",
              "language": "German",
              "multiverseid": 266136
          },
          {
              "name": "Nicol Bolas, planeswalker",
              "text": "+3: Destruye el permanente objetivo que no sea criatura.\n-2: Gana el control de la criatura objetivo.\n-9: Nicol Bolas, planeswalker hace 7 puntos de daño al jugador objetivo. Ese jugador descarta siete cartas y luego sacrifica siete permanentes.",
              "type": "Planeswalker — Bolas",
              "flavor": null,
              "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=266481&type=card",
              "language": "Spanish",
              "multiverseid": 266481
          },
          {
              "name": "Nicol Bolas, planeswalker",
              "text": "+3 : Détruisez le permanent non-créature ciblé.\n-2 : Acquérez le contrôle de la créature ciblée.\n-9 : Nicol Bolas, planeswalker inflige 7 blessures au joueur ciblé. Ce joueur se défausse de sept cartes et sacrifie ensuite sept permanents.",
              "type": "Planeswalker : Bolas",
              "flavor": null,
              "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=266036&type=card",
              "language": "French",
              "multiverseid": 266036
          },
          {
              "name": "Nicol Bolas, Planeswalker",
              "text": "+3: Distruggi un permanente non creatura bersaglio.\n-2: Prendi il controllo di una creatura bersaglio.\n-9: Nicol Bolas, Planeswalker infligge 7 danni a un giocatore bersaglio. Quel giocatore scarta sette carte, poi sacrifica sette permanenti.",
              "type": "Planeswalker — Bolas",
              "flavor": null,
              "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=265900&type=card",
              "language": "Italian",
              "multiverseid": 265900
          }
      ],
      "printings": [
          "CON",
          "DDH",
          "E01",
          "M13",
          "MED",
          "PRM"
      ],
      "originalText": "+3: Destroy target noncreature permanent.\n-2: Gain control of target creature.\n-9: Nicol Bolas, Planeswalker deals 7 damage to target player. That player discards seven cards, then sacrifices seven permanents.",
      "originalType": "Planeswalker — Bolas",
      "legalities": [
          {
              "format": "Commander",
              "legality": "Legal"
          },
          {
              "format": "Duel",
              "legality": "Legal"
          },
          {
              "format": "Legacy",
              "legality": "Legal"
          },
          {
              "format": "Modern",
              "legality": "Legal"
          },
          {
              "format": "Penny",
              "legality": "Legal"
          },
          {
              "format": "Vintage",
              "legality": "Legal"
          }
      ],
      "id": "86b98d51-2a52-55a9-b975-745bdc7bfe54"
  },
  {
    "name": "Black Lotus",
    "manaCost": "{0}",
    "cmc": 0.0,
    "type": "Artifact",
    "types": [
        "Artifact"
    ],
    "rarity": "Rare",
    "set": "2ED",
    "setName": "Unlimited Edition",
    "text": "{T}, Sacrifice Black Lotus: Add three mana of any one color.",
    "artist": "Christopher Rush",
    "number": "233",
    "layout": "normal",
    "multiverseid": "600",
    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=600&type=card",
    "printings": [
        "2ED",
        "CED",
        "CEI",
        "LEA",
        "LEB",
        "OVNT",
        "PRM",
        "VMA"
    ],
    "originalText": "Adds 3 mana of any single color of your choice to your mana pool, then is discarded. Tapping this artifact can be played as an interrupt.",
    "originalType": "Mono Artifact",
    "legalities": [
        {
            "format": "Commander",
            "legality": "Banned"
        },
        {
            "format": "Duel",
            "legality": "Banned"
        },
        {
            "format": "Legacy",
            "legality": "Banned"
        },
        {
            "format": "Oldschool",
            "legality": "Restricted"
        },
        {
            "format": "Vintage",
            "legality": "Restricted"
        }
    ],
    "id": "e6c9fe58-bc4f-529d-a387-77d61af87de4"
} 
  ]);
  const [cardOptions, setCardOptions] = useState([]);
  const [cardDetails, setCardDetails] = useState({});
  const [filteredCards, setFilteredCards] = useState([]);
  const [filter, setFilter] = useState("");

  const updateFilter = (e) => {
    setFilter(e.target.value);
    updateFilteredCards(e.target.value);
  }

  const updateFilteredCards = (word) => {
    let newFilteredCards = cardCollection.filter(card => card.types.includes(word))
    setFilteredCards(newFilteredCards)
  };

  const updateCardCollection = (card) => {
    setCardCollection(cardCollection.concat(card))
    setCardOptions([])
  };

  const removeCard = (cardId) => {
    let array = [...cardCollection]; 
    let result = array.filter((card) => card.id !== cardId)
    setCardCollection(result)
  };

  const updateDetails = (card) => {
    console.log(card)
    setCardDetails(card);
  }

  const updateCardOptions = (options) => {
    fetch(`https://api.magicthegathering.io/v1/cards?name=${options}`)
      .then(response => response.json())
      .then(json => {
        setCardOptions(json.cards)
      });
  };

  return (
    <div className='mainContainer'>
      <div className='header'>
        <Header/>
      </div>
      <div className='search'>
        <SearchBar updateCardOptions={updateCardOptions}/>
      </div>
      <div className='collection'>
        {filter !== "" ? 
          <Collection 
            updateFilter = {updateFilter}
            filter = {filter}
            cardCollection={filteredCards} 
            updateDetails={updateDetails}
            removeCard={removeCard}
          /> : 
          <Collection 
            updateFilter = {updateFilter}
            filter = {filter}
            cardCollection={cardCollection} 
            updateDetails={updateDetails}
            removeCard={removeCard}
          />
        }
        
      </div>
      <div className='footer'>
        <center>
          <span>Created by</span><br/>
          <span>Joshua Card</span>
        </center>
      </div>
      
      
      {cardOptions.length > 0 ? 
        <Options 
          cardOptions={cardOptions} 
          updateCardCollection={updateCardCollection} 
          updateCardOptions={updateCardOptions}
        /> 
        : null}
      {cardDetails !== undefined && cardDetails.id !== undefined ? 
        <Details 
          cardDetails={cardDetails}
          updateDetails={updateDetails}
        />
      : null}
        
    </div>
    
  );
}

export default App;
