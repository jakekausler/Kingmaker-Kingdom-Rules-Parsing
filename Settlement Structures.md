# Settlement Structures[[SettlementStructures]]

You build <<structures|Settlement-Structures>> using the <<Build Structure|Kingdom-Actions#BuildStructure>> activity during the <<Civic Activities|Kingdom-Actions#CivicPhase>> step of the <<Activity phase|Kingdom-Turn#ActivityPhase>> of the Kingdom turn.

When you build in a lot within one of your <<settlements|Settlement-Rules>>, you’re rarely literally constructing a single building. While an <<arena|Settlement-Structures#Arena>> or <<cathedral|Settlement-Structures#Cathedral>> might stand alone as a towering edifice, most lots represent a number of buildings whose focus is to support the type of improvement that lot supports. For example, a <<brewery|Settlement-Structures#Brewery>> could represent a collection of brewers and bottlers and the families who support them, while a <<luxury merchant|Settlement-Structures#LuxuryStore>> would represent several specialized stores. Even sprawling, sizable improvements like <<dumps|Settlement-Structures#Dump>>, <<cemeteries|Settlement-Structures#Cemetery>>, or <<parks|Settlement-Structures#Park>> might include nearby dwellings or cottages for those who tend and manage the area or live along its margins.

[[ResidentialLotsAndOvercrowding]]**Residential Lots and Overcrowding** While almost every <<structure|Settlement-Structures>> presumably includes a small amount of lodging, you need to build Residential lots in order to give your citizens enough places to live. You do so by building a <<structure|Settlement-Structures>> that has the Residential trait in a chosen lot. <<Settlements|Settlement-Rules>> require a number of Residential lots equal to the number of blocks that have any <<structures|Settlement-Structures>> built within them, although these residential lots need not be located one per block. For example, when a village expands to a town, it initially occupies 2 blocks. It needs 2 Residential lots in total among those 2 blocks, either both in one block or one in each block. A <<settlement|Settlement-Rules>> without this minimum number of Residential lots is Overcrowded and generates 1 <<Unrest|Kingdom-Rules#Unrest>> for the kingdom during the <<Upkeep phase|Kingdom-Turn#UpkeepPhase>> of each Kingdom turn.

**Reduced to Rubble** It’s possible for <<structures|Settlement-Structures>> in a <<settlement|Settlement-Rules>> to be reduced to <<rubble|Settlement-Structures#Rubble>> by a failed attempt to <<Demolish|Kingdom-Actions#Demolish>> a <<structure|Settlement-Structures>> or a poor result from a kingdom event. When a <<structure|Settlement-Structures>> is reduced to <<rubble|Settlement-Structures#Rubble>>, replace the lots the <<structure|Settlement-Structures>> once occupied on the <<Urban Grid|Settlement-Rules#TheUrbanGrid>> with <<rubble|Settlement-Structures#Rubble>>. Having <<rubble|Settlement-Structures#Rubble>> in a lot doesn’t itself impact a kingdom’s <<Unrest|Kingdom-Rules#Unrest>> or other statistics negatively, but it does prevent you from building in those lots. You must <<Demolish|Kingdom-Actions#Demolish>> that lot before you can build there again. When a single lot that contains part of a multi-lot <<structure|Settlement-Structures>> is reduced to <<rubble|Settlement-Structures#Rubble>>, each of the lots that contained that <<structure|Settlement-Structures>> are replaced with individual lots of <<rubble|Settlement-Structures#Rubble>>.

## Structure Descriptions[[StructureDescriptions]]

<<Structures|Settlement-Structures>> are described in the following format.

item(
# STRUCTURE NAME[[ExampleStructure]]
## LEVEL
-
A <<structure’s|Settlement-Structures>> level indicates the minimum kingdom level required to build it. Each <<structure|Settlement-Structures>> has traits that convey its properties.
**Building** indicates the <<structure|Settlement-Structures>> is a collection of indoor sites.

**Yard** indicates the <<structure|Settlement-Structures>> is primarily an outdoor site.

**Infrastructure** indicates that the <<structure|Settlement-Structures>> benefits all lots in an <<Urban Grid|Settlement-Rules#TheUrbanGrid>> without occupying a lot. (For a <<metropolis|Settlement-Rules#Metropolis>>, this means you’ll need to build Infrastructure separately for each <<Urban Grid|Settlement-Rules#TheUrbanGrid>> that makes up the <<settlement|Settlement-Rules>>.)

**Edifice** <<structures|Settlement-Structures>> grants its benefits to a <<settlement|Settlement-Rules>> only once; if you build that <<structure|Settlement-Structures>> an additional time in the same <<settlement|Settlement-Rules>>, it’s purely cosmetic.

**Residential** <<structures|Settlement-Structures>> help house the <<settlement’s|Settlement-Rules>> citizens; a <<settlement|Settlement-Rules>> requires at least one Residential lot per block to avoid being <<Overcrowded|Settlement-Structures#ResidentialLotsAndOvercrowding>>.

**Fame** indicates that the building generates one <<Fame|Kingdom-Rules#FameAndInfamy>> when the building is constructed, but it also increases the <<settlement’s|Settlement-Rules>> <<Consumption|Settlement-Rules#Consumption>> by 1.

A short textual description rounds out the top of the <<structure|Settlement-Structures>> stat block.
-
**Lots** The number of contiguous lots that the <<structure|Settlement-Structures>> occupies on the <<Urban Grid|Settlement-Rules#TheUrbanGrid>>; **Cost** The cost in <<Commodities|Kingdom-Rules#Commodities>> (if any) you must spend before attempting the <<Build Structure|Kingdom-Actions#BuildStructure>> check.

**Monthly Cost** The number of <<RP|Kingdom-Rules#ResourcePoints>> you must spend per turn to advance production, and how many turns you must spend them before the building applies its effects and bonuses. You advance <<structure|Settlement-Structures>> production during the <<Upkeep phase|Kingdom-Turn#UpkeepPhase>> of a kingdom turn, and you can advance as many as you choose a single month during this time. When the cost has been paid the listed number of times, the <<structure|Settlement-Structures>> is complete.
The cost is not paid on the turn you use the <<Build Structure|Kingdom-Actions#BuildStructure>> activity unless the <<structure|Settlement-Structures>> takes 0 months. In this case, you can choose to pay to complete the <<structure|Settlement-Structures>> during the <<Structure Production|Kingdom-Turn#StructuresAdvancement>> phase of the same turn.
If you have not advanced all your <<structures|Settlement-Structures>> that are currently under construction during the <<Structure Production|Kingdom-Turn#StructuresAdvancement>> phase, you might gain <<unrest|Kingdom-Rules#Unrest>>. You gain 1 <<unrest|Kingdom-Rules#Unrest>> for each <<structure|Settlement-Structures>> that you did not advance above the number of <<settlements|Settlement-Rules>>. For example, if you had two <<settlements|Settlement-Rules>> and you did not advance five <<structures|Settlement-Structures>> that were under construction, you would gain 3 <<unrest|Kingdom-Rules#Unrest>>. This represents your citizens worrying you are undergoing more work than the kingdom can afford.

**XP** Lists the XP value of the <<structure|Settlement-Structures>>. At the end of each turn, you <<receive XP for the highest XP building you began construction on|Kingdom-Turn#StructureXPAwards>>; **Population** Represents the estimated population increase adding this <<structure|Settlement-Structures>>. This is purely cosmetic; **Size** The minimum <<settlement size|Settlement-Rules#Size>> (<<village|Settlement-Rules#Village>>, <<town|Settlement-Rules#Town>>, or <<city|Settlement-Rules#City>>) in which this <<structure|Settlement-Structures>> can be built.

**Market Bonus** The amount this <<structure|Settlement-Structures>> adds to the <<settlement|Settlement-Rules>>'s <<market level|Settlement-Rules#MarketLevels>> in one or more markets. Some <<structures|Settlement-Structures>> will let you choose one or more markets or have exceptions. If you can choose more than one market, you cannot choose the same market for the same <<structure|Settlement-Structures>> more than once.

**Construction** This entry lists the required skill, proficiency rank, and DC for the <<Build Structure|Kingdom-Actions#BuildStructure>> check.

**Upgrade From/Upgrade To** Some <<structures|Settlement-Structures>> can be upgraded into a more advanced form of the existing <<structure|Settlement-Structures>>, such as upgrading a <<Shrine|Settlement-Structures#Shrine>> into a <<Temple|Settlement-Structures#Temple>>. If you upgrade a <<structure|Settlement-Structures>>, subtract the <<RP|Kingdom-Rules#ResourcePoints>> and <<Commodity|Kingdom-Rules#Commodities>> cost used to build the original <<structure|Settlement-Structures>> from the cost of the new <<structure|Settlement-Structures>>. When the new <<structure|Settlement-Structures>> is complete, its effects replace those of the previous <<structure|Settlement-Structures>>. You can’t upgrade a <<structure|Settlement-Structures>> to one that occupies more lots if there isn’t space in the block for the new <<structure’s|Settlement-Structures>> size. (You do not need to build the lesser form of a <<structure|Settlement-Structures>> before you build the advanced form.)

**Item Bonus** This entry indicates any <<item bonuses|Settlement-Rules#MaximumItemBonus>> the <<structure|Settlement-Structures>> grants to activities made within the <<settlement’s|Settlement-Rules>> <<influence|Settlement-Rules#Influence>>. These bonuses are <<item bonuses|Settlement-Rules#MaximumItemBonus>>, but if you build multiple <<structures|Settlement-Structures>> that grant an <<Item Bonus|Settlement-Rules#MaximumItemBonus>> to a specific Kingdom Activity, their <<item bonuses|Settlement-Rules#MaximumItemBonus>> stack up to the <<settlement’s|Settlement-Rules>> <<Maximum Item Bonus|Settlement-Rules#MaximumItemBonus>>.

**Ruin** Some <<structures|Settlement-Structures>> negatively impact society. If this <<structure|Settlement-Structures>> does so, it will increase one or more of your kingdom’s <<Ruins|Kingdom-Rules#Ruin>> when constructed; this increase only happens once, when the <<structure|Settlement-Structures>> is built. Increases to <<Ruin|Kingdom-Rules#Ruin>> in this way aren’t removed if the <<structure|Settlement-Structures>> is later <<demolished|Kingdom-Actions#Demolish>>.

**Effect** All additional game effects the <<structure|Settlement-Structures>> grants to your kingdom are listed here. In many cases, these effects grant item bonuses to PCs while they are in the <<settlement|Settlement-Rules>>, but unlike those granted by the <<Item Bonus|Settlement-Rules#MaximumItemBonus>> above, item bonuses found in this section of the stat block do not stack with other item bonuses. Unless stated otherwise, effects in this section apply only within this <<settlement|Settlement-Rules>>; they do not apply to areas <<influenced|Leadership-Roles#KeyAbility>> by this <<settlement|Settlement-Rules>>.
)

## Settlement Structures[[SettlementStructures]]

Presented below are stat blocks for a wide range of <<structures|Settlement-Structures>> that serve a variety of purposes in <<settlements|Settlement-Rules>>, both to bolster kingdom statistics and PC resources. Encourage your PCs to come up with flavorful specific names for individual <<structures|Settlement-Structures>> they create!


item(
# Academy[[Academy]]
## Structure 10
-
; Building,Edifice,Fame
An academy gives your citizens—and the PCs themselves—an institution where advanced study in many fields can be pursued, researched, and referenced.
-

**Lots** 2; **Cost** 12 Lumber, 6 Luxuries, 12 Stone

**Monthly Cost** 13 RP / 4 Months

**XP** 50; **Population** 100; **Size** Town

**Market Bonus** +1 to any two markets

**Construction** Scholarship (expert) DC 27

**Upgrade From** <<library|Settlement-Structures#Library>>

**Upgrade To** <<military academy|Settlement-Structures#MilitaryAcademy>>, <<university|Settlement-Structures#University>>

**Item Bonus** +2 item bonus to <<Creative Solution|Kingdom-Actions#CreativeSolution>>

**Effect** While in a <<settlement|Settlement-Rules>> with an Academy, you gain a +2 item bonus to Lore checks made to <<Recall Knowledge|https://2e.aonprd.com/Skills.aspx?ID=24&General=true>> while Investigating, to all checks made while <<Researching|https://2e.aonprd.com/Rules.aspx?ID=3045>>, and to <<Decipher Writing|https://2e.aonprd.com/Skills.aspx?ID=20&General=true>>.
)

item(
# Aerie[[Aerie]]
## Structure 7
-
; Building,Edifice
A specialized tower suitable for raising and training hunting and message birds as well as stabling flying mounts.
-

**Lots** 1; **Cost** 3 Lumber, 3 Stone

**Monthly Cost** 6 RP / 3 Months

**XP** 10; **Population** 10; **Size** Town

**Construction** Wilderness (expert) DC 23

**Item Bonus** +1 item bonus to <<Clandestine Business|Kingdom-Actions#ClandestineBusiness>> and <<Send Diplomatic Envoy|Kingdom-Actions#SendDiplomaticEnvoy>>

**Effect** If you have an aerie in the same city as a <<castle|Settlement-Structures#Castle>>, <<garrison|Settlement-Structures#Garrison>>, <<keep|Settlement-Structures#Keep>>, or <<watchtower|Settlement-Structures#Watchtower>>, you gain a +1 item bonus on Defense checks made to resolve a Monster Activity event, or a +2 item bonus if the monsters involved are flying creatures
)

item(
# Alchemy Laboratory[[AlchemyLaboratory]]
## Structure 3
-
; Building
An alchemy laboratory serves as a factory for alchemists and their apprentices for the crafting of potions, elixirs, and all manner of <<alchemical items|https://2e.aonprd.com/Traits.aspx?ID=528>>.
-

**Lots** 1; **Cost** 2 Ore, 5 Stone

**Monthly Cost** 6 RP / 3 Months

**XP** 20; **Population** 10; **Size** Town

**Market Bonus** +2 Alchemical

**Construction** Industry (trained) DC 16

**Item Bonus** +1 item bonus to <<Demolish|Kingdom-Actions#Demolish>>

**Effect** Checks attempted to <<Identify Alchemy|https://2e.aonprd.com/Actions.aspx?ID=2386>> in any <<settlement|Settlement-Rules>> with at least one alchemy laboratory gain a +1 item bonus.
)

item(
# Arcanist’s Tower[[ArcanistsTower]]
## Structure 5
-
; Building
An arcanist’s tower is a home and laboratory for an arcane spellcaster (usually a wizard) and their apprentices, servants, and students.
-

**Lots** 1; **Cost** 6 Stone

**Monthly Cost** 6 RP / 5 Months

**XP** 30; **Population** 10; **Size** Town

**Market Bonus** +2 Arcane

**Construction** Magic (trained) DC 20

**Item Bonus** +1 item bonus to <<Magical Construction|Kingdom-Actions#MagicalConstruction>> and <<Quell Unrest|Kingdom-Actions#QuellUnrest>> using Magic

**Effect** Checks made to <<Borrow an Arcane Spell|https://2e.aonprd.com/Actions.aspx?ID=2373>> or <<Learn a Spell|https://2e.aonprd.com/Skills.aspx?ID=23&General=true>> in any <<settlement|Settlement-Rules>> with at least one arcanist’s tower gain a +1 item bonus.
)

item(
# Arena[[Arena]]
## Structure 9
-
; Edifice,Fame,Yard
An Arena is a large public <<structure|Settlement-Structures>>, traditionally open to the air, surrounded by seating and viewing areas. It’s used for staging competitions, athletics, gladiatorial combats, and elaborate entertainments and spectacles.
-

**Lots** 4; **Cost** 6 Lumber, 12 Stone

**Monthly Cost** 4 RP / 10 Months

**XP** 40; **Population** 100; **Size** City

**Construction** Warfare (expert) DC 26

**Item Bonus** +2 item bonus to <<Celebrate Holiday|Kingdom-Actions#CelebrateHoliday>> and to Warfare checks made to <<Quell Unrest|Kingdom-Actions#QuellUnrest>>

**Effect** An arena lets you to retrain combat-themed feats more efficiently while in the <<settlement|Settlement-Rules>>; doing so takes only 5 days rather than a week of downtime.
)

item(
# Assembly[[Assembly]]
## Structure 8
-
; Building,Edifice,Fame
A conclave of representatives from all sectors of society, including representatives from guilds, religious orders, civil authorities, allowing all factions a voice in governance.
-

**Lots** 2; **Cost** 2 Lumber, 8 Stone

**Monthly Cost** 5 RP / 6 Months

**XP** 30; **Population** 50; **Size** City

**Construction** Statecraft (expert) DC 24

**Item Bonus** +1 item bonus to <<New Leadership|Kingdom-Actions#NewLeadership>> and <<Pledge of Fealty|Kingdom-Actions#PledgeOfFealty>> using Statecraft

**Effect** When you use a <<Build Roads|Kingdom-Actions#BuildRoads>> or <<Establish Farmland|Kingdom-Actions#EstablishFarmland>> activity in a hex adjacent to a <<settlement|Settlement-Rules>> with an assembly, or a <<Build Structure|Kingdom-Actions#BuildStructure>> activity in a <<settlement|Settlement-Rules>> with an assembly, you can take one kingdom activity of the same type in that <<settlement|Settlement-Rules>> or a hex adjacent to it.
)

item(
# Bank[[Bank]]
## Structure 5
-
; Building
A bank is a secure building for storing valuables, granting loans, and collecting and transferring deposits.
-

**Lots** 1; **Cost** 4 Ore, 6 Stone

**Monthly Cost** 4 RP / 7 Months

**XP** 20; **Population** 10; **Size** City

**Market Bonus** +2 Luxuries

**Construction** Trade (trained) DC 20

**Item Bonus** +1 item bonus to <<Capital Investments|Kingdom-Actions#CapitalInvestment>>, <<Collect Taxes|Kingdom-Actions#CollectTaxes>>, and <<Tap Treasury|Kingdom-Actions#TapTreasury>>

**Effect** The <<Capital Investment|Kingdom-Actions#CapitalInvestment>> Leadership activity can be used only within the <<influence|Settlement-Rules#Influence>> area of a <<settlement|Settlement-Rules>> with a bank.
)

item(
# Bardic College[[BardicCollege]]
## Structure 9
-
; Building,Fame
A center for learning in every artistic form, including visual, musical, physical, and performing arts. Education in a Bardic College also includes research into a wide range of historical topics.
-

**Lots** 2; **Cost** 12 Lumber, 16 Luxuries, 12 Stone

**Monthly Cost** 5 RP / 8 Months

**XP** 40; **Population** 50; **Size** City

**Market Bonus** +3 Occult

**Construction** Arts (expert) DC 26

**Item Bonus** +2 item bonus to <<Rest and Relax|Kingdom-Actions#RestAndRelax>> using Arts and to <<Create a Masterpiece|Kingdom-Actions#CreateAMasterpiece>>. While in a <<settlement|Settlement-Rules>> with a Bardic college, you gain a +3 item bonus to Lore and Occultism checks made to <<Recall Knowledge|https://2e.aonprd.com/Skills.aspx?ID=24&General=true>> while Investigating and to all art or music-related checks while <<Researching|https://2e.aonprd.com/Rules.aspx?ID=3045>>.
)

item(
# Barracks[[Barracks]]
## Structure 3
-
; Building,Residential
Barracks are focused on housing and training guards, militia, soldiers, and military forces.
-
**Lots** 1; **Cost** 2 Lumber, 1 Stone

**Monthly Cost** 6 RP / 1 Months

**XP** 5; **Population** 20; **Size** Village

**Market Bonus** +1 Martial

**Construction** Defense DC 16

**Upgrade To** garrison

**Item Bonus** +1 item bonus to <<Garrison Army|Kingdom-Actions#GarrisonArmy>>, <<Recover Army|Kingdom-Actions#RecoverArmy>>, or <<Recruit Army|Kingdom-Actions#RecruitArmy>>
)

item(
# Baths[[Baths]]
## Structure 3
-
; Building
A public building for bathing, often with hot running water and mineral soaks, sometimes heated by furnaces and other times by natural hot springs.
-

**Lots** 1; **Cost** 2 Stone

**Monthly Cost** 4 RP / 1 Months

**XP** 5; **Population** 20; **Size** Town

**Construction** Engineering (trained) DC 16

**Item Bonus** +1 item bonus to <<Provide Care|Kingdom-Actions#ProvideCare>> and on Defense checks made to resolve a Plague event
)

item(
# Brewery[[Brewery]]
## Structure 1
-
; Building
A brewery is devoted to crafting alcohol, be it beer, wine, or spirits. This building can represent bottlers, vineyards, or even <<structures|Settlement-Structures>> that produce nonalcoholic drinks.
-

**Lots** 1; **Cost** 2 Lumber

**Monthly Cost** 6 RP / 1 Months

**XP** 5; **Population** 20; **Size** Village

**Construction** Agriculture DC 15

**Item Bonus** +1 item bonus to <<Establish Trade Agreement|Kingdom-Actions#EstablishTradeAgreement>>

**Effect** When you build a brewery, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1 as long as you have fewer than 4 breweries in the <<settlement|Settlement-Rules>> at that time.
)

item(
# Brickyard[[Brickyard]]
## Structure 4
-
; Yard
A brickyard is an open area with vats for mixing clay and kilns for firing bricks.
-

**Lots** 2; **Cost** 2 Lumber, 4 Stone

**Monthly Cost** 4 RP / 4 Months

**XP** 10; **Population** 50; **Size** Village

**Construction** Industry (trained) DC 18

**Item Bonus** +1 item bonus to <<Establish Work Site|Kingdom-Actions#EstablishWorkSite>> (<<quarry|Kingdom-Rules#WorkSite>>)

**Effect** You can build <<quarries|Kingdom-Rules#WorkSite>> within the <<settlement|Settlement-Rules>>'s <<influence|Settlement-Rules#Influence>> in desert, plains, or coastal terrain, reducing the <<RP|Kingdom-Rules#ResourcePoints>> cost to build them by 1.
)

item(
# Bridge[[Bridge]]
## Structure 2
-
; Building
A reinforced span designed to cross <<waterways|Settlement-Structures#Waterway>> and ease public transportation.
-

**Lots** 0 or 1; **Cost** 3 Lumber or 3 Stone

**Monthly Cost** 6 RP / 1 Months

**XP** 5; **Population** 0; **Size** Town

**Construction** Engineering DC 16

**Effect** People within the <<settlement|Settlement-Rules>> can freely move across squares occupied by a <<waterway|Settlement-Structures#Waterway>> that also has a bridge.

**Special** A bridge can share the same space as a <<waterway|Settlement-Structures#Waterway>> inside a city. Alternatively, if the <<settlement|Settlement-Rules>> has a <<water border|Settlement-Rules#WaterBorder>> but nearby land, a bridge can be built occupying one square but serving as a causeway to connect the <<settlement|Settlement-Rules>> to dry land beyond the city.
)

item(
# Bureau[[Bureau]]
## Structure 4
-
; Building
A large complex of offices and workrooms for clerks, scribes, and other keepers of records working together for a guild or government.
-

**Lots** 2; **Cost** 2 Lumber, 2 Stone

**Monthly Cost** 5 RP / 2 Months

**XP** 10; **Population** 50; **Size** City

**Construction** Community (trained) DC 19

**Item Bonus** +1 circumstance bonus to any one Skill.

**Effect** The first time you build a bureau each Kingdom turn, reduce one **Ruin of your choice by 1.

**Special** You can build multiple Bureaus in a <<settlement|Settlement-Rules>>, but each must select a different Skill (such as a Bureau of Agriculture and a Bureau of Trade).
)

item(
# Castle[[Castle]]
## Structure 9
-
; Building,Edifice,Fame
A castle is a fortified <<structure|Settlement-Structures>> that often serves as the seat of government for a kingdom.
-

**Lots** 4; **Cost** 12 Lumber, 12 Stone

**Monthly Cost** 5 RP / 11 Months

**XP** 50; **Population** 200; **Size** Town

**Market Bonus** +1 Luxuries, +1 Martial

**Construction** Defense (expert), Industry (expert), Magic (expert), or Statecraft (expert) DC 26

**Upgrade From** <<town hall|Settlement-Structures#TownHall>>

**Upgrade To** <<palace|Settlement-Structures#Palace>>
**Item Bonus** +2 item bonus to <<Manage Trade Agreements|Kingdom-Actions#ManageTradeAgreements>>, <<Relocate Capital|Kingdom-Actions#RelocateCapital>>, <<New Leadership|Kingdom-Actions#NewLeadership>>, <<Pledge of Fealty|Kingdom-Actions#PledgeOfFealty>>, <<Send Diplomatic Envoy|Kingdom-Actions#SendDiplomaticEnvoy>>, and +2 item bonus to <<Garrison Army|Kingdom-Actions#GarrisonArmy>>, <<Recover Army|Kingdom-Actions#RecoverArmy>>, or <<Recruit Army|Kingdom-Actions#RecruitArmy>>

**Effect** The first time you build a castle each Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1d4. A castle in a <<capital|Settlement-Rules#Capital>> allows PC leaders to take 3 <<Leadership activities|Kingdom-Actions#LeadershipPhase>> during the <<Activity phase|Kingdom-Turn#ActivityPhase>> of a Kingdom turn rather than 2.
)

item(
# Cathedral[[Cathedral]]
## Structure 15
-
; Building,Edifice,Fame
A cathedral serves as a focal point of spiritual worship in the <<settlement|Settlement-Rules>> and the seat of regional power for a religion. Most cathedrals are astounding works of art and eye‑catching marvels of architecture.
-

**Lots** 4; **Cost** 20 Lumber, 20 Stone

**Monthly Cost** 5 RP / 12 Months

**XP** 60; **Population** 100; **Size** City

**Market Bonus** +4 Divine

**Construction** Folklore (master) DC 34

**Upgrade From** <<temple|Settlement-Structures#Temple>>

**Item Bonus** +3 item bonus to <<Celebrate Holiday|Kingdom-Actions#CelebrateHoliday>>, <<Provide Care|Kingdom-Actions#ProvideCare>>, and <<Repair Reputation|Kingdom-Actions#RepairReputation>> (Corruption)

**Effect** The first time you build a cathedral in a turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 4. While in a <<settlement|Settlement-Rules>> with a cathedral, you gain a +3 item bonus to Lore and Religion checks made to <<Recall Knowledge|https://2e.aonprd.com/Skills.aspx?ID=24&General=true>> while Investigating, and to all faith-themed checks made while <<Researching|https://2e.aonprd.com/Rules.aspx?ID=3045>>.
)

item(
# Cemetery[[Cemetery]]
## Structure 1
-
; Yard
A cemetery sets aside a plot of land to bury the dead and can also include above-ground vaults or underground catacombs.
-

**Lots** 1; **Cost** 1 Stone

**Monthly Cost** 4 RP / 1 Months

**XP** 5; **Population** 0; **Size** Village

**Construction** Folklore DC 15

**Effect** Giving the citizens a place to bury and remember their departed loved ones helps to temper <<Unrest|Kingdom-Rules#Unrest>> gained from dangerous events. If you have at least one cemetery in a <<settlement|Settlement-Rules>>, reduce <<Unrest|Kingdom-Rules#Unrest>> gained from any dangerous <<settlement|Settlement-Rules>> events in that particular <<settlement|Settlement-Rules>> by 1 (to a maximum of 4 for four cemeteries). The presence of a cemetery provides additional effects during certain kingdom events.
)

item(
# Cistern[[Cistern]]
## Structure 1
-
; Building
A safe supply of fresh water for a <<settlement|Settlement-Rules>>, usually stored underground.
-

**Lots** 1; **Cost** 2 Stone

**Monthly Cost** 8 RP / 1 Months

**XP** 5; **Population** 10; **Size** Town

**Construction** Industry DC 15

**Item Bonus** +1 item bonus to resolve a Crop Failure, Food Shortage, or Local Disaster event.

**Effect** If a <<settlement|Settlement-Rules>> has a Cistern adjacent to a Granary, that Granary increases your kingdom’s Food <<Commodity|Kingdom-Rules#Commodities>> capacity by 2 instead of by 1.

**Special** A cistern cannot be built adjacent to a Cemetery, Yard, Dump, Stables, Stockyard, or Tannery.
)

item(
# Colossus[[Colossus]]
## Structure 15
-
; Building,Edifice,Fame
A towering edifice of stone and burnished metal displays your power to the world. A Colossus may be a great statue, obelisk, tower, pyramid, mausoleum, triumphal arch, or nearly anything else; all that is required is superior craftsmanship, titanic proportions, and grandiose civic pride.
-

**Lots** 4; **Cost** 40 Stone, 5 Luxuries

**Monthly Cost** 5 RP / 12 Months

**XP** 60; **Population** 20; **Size** City

**Construction** Arts (Master), Community (Master), Faith (Master), or Warfare (master) DC 34

**Upgrade From** <<Monument|Settlement-Structures#Monument>>

**Item Bonus** +2 item bonus to <<Celebrate Holiday|Kingdom-Actions#CelebrateHoliday>> and to <<Garrison Army|Kingdom-Actions#GarrisonArmy>>, <<Recover Army|Kingdom-Actions#RecoverArmy>>, or <<Recruit Army|Kingdom-Actions#RecruitArmy>> in a <<settlement|Settlement-Rules>> with a colossus. You gain a +4 item bonus to <<Relocate Capital|Kingdom-Actions#RelocateCapital>> to a <<settlement|Settlement-Rules>> with a colossus.

**Effect** The first time you build a colossus each Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 2 and reduce one **Ruin of your choice by 2. Your armies gain a +2 item bonus to Morale of armies when in a <<settlement|Settlement-Rules>> with a colossus, or a +1 item bonus to Morale if they are in the same hex or an adjacent hex. This bonus to Morale checks stacks with the bonus granted by the <<Fortified|Army-Conditions#Fortified>> condition.

**Special** A colossus can share the same space on the <<urban grid|Settlement-Rules#TheUrbanGrid>> with an <<observatory|Settlement-Structures#Observatory>> (but not both).
)

item(
# Construction Yard[[ConstructionYard]]
## Structure 10
-
; Yard
A construction yard supports the building of <<structures|Settlement-Structures>> by providing a centralized place to gather supplies and craft components for larger projects.
-

**Lots** 4; **Cost** 10 Lumber, 10 Stone

**Monthly Cost** 10 RP / 4 Months

**XP** 40; **Population** 30; **Size** Town

**Construction** Engineering DC 27

**Item Bonus** +1 item bonus to <<Build Housing|Kingdom-Actions#BuildHousing>>, <<Build Roads|Kingdom-Actions#BuildRoads>>, <<Build Structure|Kingdom-Actions#BuildStructure>>, <<Irrigation|Kingdom-Actions#Irrigation>>, <<Repair|Kingdom-Actions#BuildStructure>>, and to <<Repair Reputation|Kingdom-Actions#RepairReputation>> (Decay)
)

item(
# Courthouse[[Courthouse]]
## Structure 6
-
; Building
A hall of justice, for hearing cases and resolving disputes by the rule of law.
-

**Lots** 1; **Cost** 2 Lumber, 2 Ore, 6 Stone

**Monthly Cost** 4 RP / 4 Months

**XP** 10; **Population** 20; **Size** Town

**Construction** Community (expert) DC 22

**Item Bonus** +1 item bonus to <<Repair Reputation|Kingdom-Actions#RepairReputation>> and on checks to resolve a Justice Prevails event.

**Effect** The first time you build a courthouse in a Kingdom turn, reduce your Corruption and Crime **Ruin scores by 1 each. While in a <<settlement|Settlement-Rules>> with a courthouse, you gain a +1 item bonus to Lore checks related to the law and legal matters.
)

item(
# Crematorium[[Crematorium]]
## Structure 4
-
; Building
A specialized furnace building primarily used for burning the dead into ash, though also used for incineration of refuse.
-

**Lots** 1; **Cost** 1 Ore, 2 Stone

**Monthly Cost** 4 RP / 1 Months

**XP** 5; **Population** 10; **Size** Town

**Construction** Industry (trained) DC 19

**Item Bonus** +1 item bonus to <<Demolish|Kingdom-Actions#Demolish>>

**Effect** You gain a +1 item bonus on checks to resolve Plague events or Monster Activity involving undead. If built adjacent to a cemetery, it negates any additional effects that cemetery would normally have during certain kingdom events.

**Special** A crematorium must be built adjacent to a <<cemetery|Settlement-Structures#Cemetery>> or <<dump|Settlement-Structures#Dump>>.
)

item(
# Dump[[Dump]]
## Structure 2
-
; Yard
A dump is a centralized place for the disposal of refuse, often including a shack for a caretaker to live in.
-

**Lots** 1; **Cost** 4 <<RP|Kingdom-Rules#ResourcePoints>>

**Monthly Cost** 4 RP / 1 Months

**XP** 5; **Population** 10; **Size** Town

**Construction** Industry DC 16

**Item Bonus** +1 item bonus to <<Demolish|Kingdom-Actions#Demolish>>

**Effect** Certain events have a more dangerous impact on <<settlements|Settlement-Rules>> that don’t include a dump. A dump can’t be located in a block with any Residential <<structures|Settlement-Structures>>.
)

item(
# Embassy[[Embassy]]
## Structure 8
-
; Building
An embassy gives a place for diplomatic visitors to your kingdom to stay and bolsters international relations.
-

**Lots** 2; **Cost** 10 Lumber, 6 Luxuries, 4 Stone

**Monthly Cost** 7 RP / 4 Months

**XP** 20; **Population** 50; **Size** City

**Construction** Politics DC 24

**Item Bonus** +1 item bonus to <<Send Diplomatic Envoy|Kingdom-Actions#SendDiplomaticEnvoy>> and <<Request Foreign Aid|Kingdom-Actions#RequestForeignAid>>
)

item(
# Everflowing Spring[[EverflowingSpring]]
## Structure 5
-
; Building,Edifice
A fountain built around magically generated springs or streams that creates an inexhaustible supply of water.
-

**Lots** 0; **Cost** 1 Stone

**Monthly Cost** 5 RP / 3 Months

**XP** 10; **Population** 10; **Size** Village

**Construction** Faith or Nature (expert) DC 20

**Item Bonus** +1 item bonus to resolve a Crop Failure, Food Shortage, or Local Disaster event.

**Effect** You increase your kingdom’s maximum Food <<Commodity|Kingdom-Rules#Commodities>> storage capacity by 1.

**Special** Can share a lot with a <<castle|Settlement-Structures#Castle>>, <<cathedral|Settlement-Structures#Cathedral>>, <<monument|Settlement-Structures#Monument>>, <<park|Settlement-Structures#Park>>, <<sacred grove|Settlement-Structures#SacredGrove>>, <<shrine|Settlement-Structures#Shrine>>, or <<temple|Settlement-Structures#Temple>>.
)

item(
# Festival Hall[[FestivalHall]]
## Structure 3
-
; Building
A festival hall is a small building that gives performers a venue to entertain and citizens a place to gather for celebrations or simply to relax.
-

**Lots** 1; **Cost** 3 Lumber

**Monthly Cost** 7 RP / 1 Months

**XP** 5; **Population** 30; **Size** Village

**Construction** Arts DC 18

**Upgrade To** <<theater|Settlement-Structures#Theater>>

**Item Bonus** +1 item bonus to <<Celebrate Holiday|Kingdom-Actions#CelebrateHoliday>> and <<Quell Unrest|Kingdom-Actions#QuellUnrest>> (Arts)
)

item(
# Foundry[[Foundry]]
## Structure 3
-
; Building
A foundry is a facility used to refine ore into finished metal.
-

**Lots** 2; **Cost** 5 Lumber, 2 Ore, 3 Stone

**Monthly Cost** 4 RP / 4 Months

**XP** 10; **Population** 60; **Size** Town

**Market Bonus** +1 Martial

**Construction** Industry (trained) DC 18

**Item Bonus** +1 item bonus to <<Establish Work Site|Kingdom-Actions#EstablishWorkSite>> (mine)

**Effect** By processing ore in a foundry, your <<settlements|Settlement-Rules>> grow more efficient at storing your kingdom’s <<Commodities|Kingdom-Rules#Commodities>>. Each foundry in your kingdom increases your maximum Ore <<Commodity|Kingdom-Rules#Commodities>> capacity by 1. A foundry cannot share a block with a Residential <<structure|Settlement-Structures>>.
)

item(
# Gambling Den[[GamblingDen]]
## Structure 3
-
; Building
An illicit place for games of skill and chance, wagering all manner of stakes.
-

**Lots** 1; **Cost** 1 Ore, 2 Stone

**Monthly Cost** 5 RP / 2 Months

**XP** 10; **Population** 20; **Size** Town

**Construction** Intrigue DC 18

**Ruin** +1 Corruption, +1 Crime

**Item Bonus** +1 item bonus to <<Clandestine Business|Kingdom-Actions#ClandestineBusiness>>

**Effect** The first time you build a gambling den on your kingdom turn, you can make an Intrigue check against your kingdom’s <<control DC|Kingdom-Rules#ControlDC>>. If the check succeeds, you gain a bonus <<Resource Die|Kingdom-Rules#ResourceDice>> for economy, or two <<Resource Dice|Kingdom-Rules#ResourceDice>> on a critical success. If the check fails, you lose 1 <<RP|Kingdom-Rules#ResourcePoints>> from all four ability score pools, or one <<Resource Die|Kingdom-Rules#ResourceDice>> from each on a critical failure. In addition, you can use Intrigue for the <<Rest and Relax|Kingdom-Actions#RestAndRelax>> kingdom activity.
)

item(
# Garrison[[Garrison]]
## Structure 5
-
; Building,Residential
A garrison is a complex of barracks, training yards, and weapons storage and repair for maintaining your military.
-

**Lots** 2; **Cost** 6 Lumber, 3 Stone

**Monthly Cost** 7 RP / 4 Months

**XP** 20; **Population** 200; **Size** Town

**Market Bonus** +1 Martial

**Construction** Warfare (trained) DC 20

**Upgrade From** barracks

**Item Bonus** +1 item bonus to <<Build Fortification|Kingdom-Actions#BuildFortification>>, <<Fortify Hex|Kingdom-Actions#FortifyHex>>, <<Outfit Army|Kingdom-Actions#OutfitArmy>>, or <<Train Army|Kingdom-Actions#TrainArmy>>

**Effect** A garrison helps outfit armies with new gear or trains them. When you build a garrison, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1.
)

item(
# General Store[[GeneralStore]]
## Structure 1
-
; Building
A general store is a place for merchants to sell everyday items and gear to travelers and townspeople.
-
**Lots** 1; **Cost** 1 Lumber

**Monthly Cost** 4 RP / 2 Months

**XP** 5; **Population** 20; **Size** Village

**Market Bonus** +1 to any Market (except Contraband)

**Construction** Trade DC 15

**Upgrade To** <<luxury store|Settlement-Structures#LuxuryStore>>, <<marketplace|Settlement-Structures#Marketplace>>
)

item(
# Granary[[Granary]]
## Structure 1
-
; Building
A granary consists of silos and warehouses for the storage of grain and other preserved foodstuffs.
-

**Lots** 1; **Cost** 2 Lumber

**Monthly Cost** 6 RP / 2 Months

**XP** 10; **Population** 10; **Size** Village

**Construction** Agriculture DC 15 (trained)

**Item Bonus** +1 item bonus to <<Establish Farmland|Kingdom-Actions#EstablishFarmland>>

**Effect** Each granary in your kingdom increases your maximum Food <<Commodity|Kingdom-Rules#Commodities>> capacity by 1.
)

item(
# Guildhall[[Guildhall]]
## Structure 5
-
; Building
A guildhall serves as the headquarters for a trade guild or similar organization. It includes offices for its leaders and functionaries as well as workshops for its craftspeople and a storefront for customers. Guildhalls always specialize in a certain type of trade or pursuit, but typically, only the largest cities have multiple guildhalls. Smaller <<settlements|Settlement-Rules>> tend to focus on one particular trade.
-

**Lots** 2; **Cost** 8 Lumber

**Monthly Cost** 6 RP / 6 Months

**XP** 30; **Population** 100; **Size** Town

**Market Bonus** +2 to any one market (except contraband)

**Construction** Trade (expert) DC 20

**Upgrade From** <<trade shop|Settlement-Structures#TradeShop>>

**Item Bonus** +1 item bonus to <<Tap Treasury|Kingdom-Actions#TapTreasury>>

**Effect** When you build a guildhall, indicate what sort of organization (such as bakers, grocers, smiths, etc.) it serves as a headquarters for. While in a <<settlement|Settlement-Rules>> with a guildhall, you gain a +1 item bonus to all related skill checks to <<Earn Income|https://2e.aonprd.com/Skills.aspx?ID=21&General=true>> or to <<Repair|Kingdom-Actions#BuildStructure>>.
)

item(
# Hanging Gardens[[HangingGardens]]
## Structure 15
-
; Building,Edifice,Fame
A magnificent set of urban gardens, arboretums, and conservatories for the enjoyment of the nobility and common folk alike, containing both decorative and edible plants as well as elaborate public artworks, statuary, and water features.
-

**Lots** 4; **Cost** 10 Lumber, 20 Stone, 4 Luxuries

**Monthly Cost** 4 RP / 12 Months

**XP** 40; **Population** 50; **Size** City

**Market Bonus** +1 Luxuries, +2 Primal

**Construction** Agriculture (master) DC 34

**Upgrade From** <<park|Settlement-Structures#Park>>

**Item Bonus** +2 item bonus to <<Celebrate Holiday|Kingdom-Actions#CelebrateHoliday>> and to <<Garrison Army|Kingdom-Actions#GarrisonArmy>>, <<Recover Army|Kingdom-Actions#RecoverArmy>>, or <<Recruit Army|Kingdom-Actions#RecruitArmy>> in a <<settlement|Settlement-Rules>> with a hanging gardens. You gain a +4 item bonus to <<Relocate Capital|Kingdom-Actions#RelocateCapital>> to a <<settlement|Settlement-Rules>> with a hanging gardens.

**Effect** The first time you build hanging gardens each Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 2 and reduce Decay by 2. A <<settlement|Settlement-Rules>> with hanging gardens reduces its <<Consumption|Settlement-Rules#Consumption>> by 2. In addition, you can use Agriculture for the <<Rest and Relax|Kingdom-Actions#RestAndRelax>> kingdom activity. While in a <<settlement|Settlement-Rules>> with hanging gardens, you gain a +2 item bonus to Lore checks related to plants, agriculture, and medicine.
)

item(
# Herbalist[[Herbalist]]
## Structure 1
-
; Building
An herbalist consists of small medicinal gardens tended by those with knowledge of herbs and their uses to heal or to harm, as well as a storefront for customers.
-

**Lots** 1; **Cost** 1 Lumber

**Monthly Cost** 5 RP / 2 Months

**XP** 10; **Population** 10; **Size** Village

**Market Bonus** +1 Alchemical, +1 Primal

**Construction** Wilderness DC 15

**Upgrade To** <<hospital|Settlement-Structures#Hospital>>

**Item Bonus** +1 item bonus to <<Provide Care|Kingdom-Actions#ProvideCare>>
)

item(
# Hospital[[Hospital]]
## Structure 9
-
; Building
A hospital is a building dedicated to healing the sick through both magical and mundane means.
-

**Lots** 2; **Cost** 10 Lumber, 6 Stone

**Monthly Cost** 5 RP / 6 Months

**XP** 30; **Population** 90; **Size** City

**Market Bonus** +1 Alchemical, +1 Divine, +1 Primal

**Construction** Defense (expert) DC 26

**Upgrade From** <<herbalist|Settlement-Structures#Herbalist>>

**Item Bonus** +1 item bonus to <<Provide Care|Kingdom-Actions#ProvideCare>> and <<Quell Unrest|Kingdom-Actions#QuellUnrest>>

**Effect** While in a <<settlement|Settlement-Rules>> with a hospital, you gain a +2 item bonus to Medicine checks to <<Treat Disease|https://2e.aonprd.com/Actions.aspx?ID=2397>> and <<Treat Wounds|https://2e.aonprd.com/Actions.aspx?ID=2399>>.
)

item(
# Houses[[Houses]]
## Structure 1
-
; Building,Residential
Houses provide a neighborhood of single and multi-family dwellings for your citizens.
-

**Lots** 1; **Cost** 1 Lumber

**Monthly Cost** 3 RP / 1 Months

**XP** 5; **Population** 50; **Size** Village

**Construction** Industry DC 15

**Upgrade From** <<tenement|Settlement-Structures#Tenement>>

**Upgrade To** <<mansion|Settlement-Structures#Mansion>> or <<orphanage|Settlement-Structures#Orphanage>>

**Effect** The first time you build houses each Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1.
)

item(
# Illicit Market[[IllicitMarket]]
## Structure 6
-
; Building
An illicit market uses a facade of shops, homes, and other innocent-seeming buildings to cover the fact that unregulated and illegal trade takes place within its walls.
-

**Lots** 1; **Cost** 5 Lumber

**Monthly Cost** 10 RP / 5 Months

**XP** 50; **Population** 20; **Size** City

**Market Bonus** +4 Contraband, +1 to all other markets

**Construction** Intrigue (trained) DC 22

**Item Bonus** +1 item bonus to <<Clandestine Business|Kingdom-Actions#ClandestineBusiness>>

**Ruin** +1 Crime
)

item(
# Inn[[Inn]]
## Structure 1
-
; Building,Residential
An inn provides a safe and secure place for a <<settlement’s|Settlement-Rules>> visitors to rest.
-

**Lots** 1; **Cost** 2 Lumber

**Monthly Cost** 5 RP / 2 Months

**XP** 10; **Population** 30; **Size** Village

**Construction** Trade DC 15

**Item Bonus** +1 Item bonus to <<Clear Hex|Kingdom-Actions#ClearHex>> (Exploration) and <<Hire Adventurers|Kingdom-Actions#HireAdventurers>>
)

item(
# Jail[[Jail]]
## Structure 2
-
; Building
A jail is a fortified <<structure|Settlement-Structures>> that houses criminals, prisoners, or dangerous monsters separate from the rest of society.
-

**Lots** 1; **Cost** 4 Lumber, 2 Ore, 4 Stone

**Monthly Cost** 7 RP / 2 Months

**XP** 10; **Population** 20; **Size** Village

**Construction** Defense DC 16

**Item Bonus** +1 item bonus to <<Quell Unrest|Kingdom-Actions#QuellUnrest>> using Intrigue

**Effect** The first time you build a jail each a Kingdom turn, reduce Crime by 1.
)

item(
# Keep[[Keep]]
## Structure 3
-
; Building,Edifice
A keep is a high-walled defensive <<structure|Settlement-Structures>> that guards the heart of a <<settlement|Settlement-Rules>>. It includes practice and marshaling yards as well as a refuge for your leaders should danger strike the <<settlement|Settlement-Rules>>.
-

**Lots** 2; **Cost** 8 Lumber, 8 Stone

**Monthly Cost** 8 RP / 4 Months

**XP** 30; **Population** 100; **Size** Village

**Market Bonus** +1 Martial

**Construction** Defense (trained) DC 18

**Item Bonus** +1 item bonus to <<Deploy Army|Kingdom-Actions#DeployArmy>>, <<Garrison Army|Kingdom-Actions#GarrisonArmy>>, or <<Train Army|Kingdom-Actions#TrainArmy>>

**Effect** The first time you build a keep each Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1.
)

item(
# Library[[Library]]
## Structure 2
-
; Building
A library contains collections of books, scrolls, writings, and records conducive to research. Some libraries specialize in certain topics, but it’s best to assume these libraries are well-rounded in what books they cover
-

**Lots** 1; **Cost** 4 Lumber, 2 Stone

**Monthly Cost** 4 RP / 2 Months

**XP** 5; **Population** 10; **Size** Village

**Market Bonus** +1 Arcane, Divine, Occult

**Construction** Scholarship (trained) DC 16

**Upgrade To** <<academy|Settlement-Structures#Academy>>

**Item Bonus** +1 item bonus to <<Creative Solution|Kingdom-Actions#CreativeSolution>> and <<Rest and Relax|Kingdom-Actions#RestAndRelax>> using Scholarship checks

**Effect** While in a <<settlement|Settlement-Rules>> with a library, you gain a +1 item bonus to Lore checks made to <<Recall Knowledge|https://2e.aonprd.com/Skills.aspx?ID=24&General=true>> while Investigating, as well as to <<Researching|https://2e.aonprd.com/Rules.aspx?ID=3045>> checks, and to <<Decipher Writing|https://2e.aonprd.com/Skills.aspx?ID=20&General=true>> checks.
)

item(
# Lumberyard[[Lumberyard]]
## Structure 3
-
; Yard
A lumberyard is an open area used to store additional lumber. The yard includes a lumber mill used to process lumber into timbers for construction purposes.
-

**Lots** 2; **Cost** 5 Lumber, 1 Ore

**Monthly Cost** 8 RP / 2 Months

**XP** 10; **Population** 50; **Size** Village

**Construction** Industry (trained) DC 18

**Item Bonus** +1 item bonus to <<Establish Work Site|Kingdom-Actions#EstablishWorkSite>> (<<lumber camp|Kingdom-Rules#WorkSite>>)

**Effect** Each lumberyard in your kingdom increases maximum Lumber <<Commodity|Kingdom-Rules#Commodities>> capacity by 1. A lumberyard must be built in a lot next to a Water border, both to give the yard a source of power to run saws to process timber, but more importantly to facilitate the shipment of trees to the yard.
)

item(
# Luxury Store[[LuxuryStore]]
## Structure 6
-
; Building
This collection of stores specializes in expensive, rare, and exotic goods that cater to the wealthy.
-

**Lots** 1; **Cost** 10 Lumber, 6 Luxuries

**Monthly Cost** 7 RP / 4 Months

**XP** 20; **Population** 10; **Size** Town

**Market Bonus** +2 Luxuries

**Construction** Trade (expert) DC 22

**Upgrade From** <<general store|Settlement-Structures#GeneralStore>>

**Upgrade To** <<magic shop|Settlement-Structures#MagicShop>>

**Item Bonus** +1 item bonus to <<Establish Trade Agreement|Kingdom-Actions#EstablishTradeAgreement>>

**Effect** A luxury store must be built on a block that has either a <<mansion|Settlement-Structures#Mansion>> or a <<noble villa|Settlement-Structures#NobleVilla>>.
)

item(
# Magic Shop[[MagicShop]]
## Structure 8
-
; Building
These shops specialize in magic items and in connecting buyers with sellers of magical goods and services.
-

**Lots** 1; **Cost** 8 Lumber, 6 Luxuries, 6 Stone

**Monthly Cost** 4 RP / 11 Months

**XP** 40; **Population** 20; **Size** City

**Market Bonus** +2 Arcane, +2 Divine, +2 Occult, +2 Primal

**Construction** Magic (expert) DC 24

**Upgrade From** <<luxury store|Settlement-Structures#LuxuryStore>>

**Upgrade To** <<occult shop|Settlement-Structures#OccultShop>>

**Item Bonus** +1 item bonus to <<Prognostication|Kingdom-Actions#Prognostication>> and <<Supernatural Solution|Kingdom-Actions#SupernaturalSolution>>
)

item(
# Magical Streetlamps[[MagicalStreetlamps]]
## Structure 5
-
; Infrastructure
Magical streetlamps are everburning torches that have been fitted within lampposts along the streets. At your option, these magical lights might even be free-floating spheres of light or other unusual forms of illumination.
-

**Lots** —; **Cost** 20 <<RP|Kingdom-Rules#ResourcePoints>>

**Monthly Cost** 4 RP / 5 Months

**XP** 20; **Population** 10; **Size** City

**Construction** Magic (expert) DC 20

**Effect** Magical streetlamps provide nighttime illumination for an entire <<Urban Grid|Settlement-Rules#TheUrbanGrid>>. When you build magical streetlamps, check the magical streetlamps checkbox on your <<Urban Grid|Settlement-Rules#TheUrbanGrid>>. The first time you build magical streetlamps in a Kingdom turn, reduce Crime by 1.
)

item(
# Mansion[[Mansion]]
## Structure 5
-
; Building,Residential
This larger manor house houses a wealthy family.
-

**Lots** 1; **Cost** 6 Lumber, 6 Luxuries, 3 Stone

**Monthly Cost** 5 RP / 2 Months

**XP** 10; **Population** 30; **Size** Village

**Construction** Industry (trained) DC 20

**Upgrade From** <<houses|Settlement-Structures#Houses>>

**Upgrade To** <<noble villa|Settlement-Structures#NobleVilla>>

**Item Bonus** +1 item bonus to <<Improve Lifestyle|Kingdom-Actions#ImproveLifestyle>>
)

item(
# Marketplace[[Marketplace]]
## Structure 4
-
; Building,Residential
A marketplace is a large neighborhood of shops run by local vendors around an open area for traveling merchants and farmers to peddle their wares.
-

**Lots** 2; **Cost** 4 Lumber

**Monthly Cost** 6 RP / 8 Months

**XP** 40; **Population** 150; **Size** Town

**Market Bonus** +2 to all markets

**Construction** Trade (trained) DC 19

**Upgrade From** <<general store|Settlement-Structures#GeneralStore>>

**Item Bonus** +1 item bonus to <<Establish Trade Agreement|Kingdom-Actions#EstablishTradeAgreement>> and <<Trade Fair|Kingdom-Actions#TradeFair>>
)

item(
# Menagerie[[Menagerie]]
## Structure 12
-
; Building,Edifice,Fame
A menagerie is a large zoo that contains numerous enclosures, exhibits, tanks, or open preserves meant to display wildlife.
-

**Lots** 4; **Cost** 14 Lumber, 10 Ore, 10 Stone

**Monthly Cost** 7 RP / 4 Months

**XP** 20; **Population** 60; **Size** City

**Construction** Wilderness (expert) DC 30

**Upgrade From** <<park|Settlement-Structures#Park>>

**Item Bonus** +2 item bonus to <<Rest and Relax|Kingdom-Actions#RestAndRelax>> using Wilderness

**Effect** A menagerie typically contains a selection of level 5 or lower animals. If your party captures a living creature of level 6 or higher and can transport the creature back to a <<settlement|Settlement-Rules>> with a menagerie, you can add that creature to the menagerie as long as your kingdom level is at least 4 higher than the creature’s level. Each time such a creature is added to a menagerie, gain 1 <<Fame|Kingdom-Rules#FameAndInfamy>> or <<Infamy|Kingdom-Rules#FameAndInfamy>> point (as appropriate) or reduce one **Ruin of your choice by 1. Only creatures with Intelligence modifiers of –4 or –5 are appropriate to place in a menagerie. A kingdom gains 1 <<Unrest|Kingdom-Rules#Unrest>> at the start of a Kingdom turn for each sapient creature (anything with an Intelligence modifier of –3 or higher) on display in a menagerie.
)

item(
# Military Academy[[MilitaryAcademy]]
## Structure 12
-
; Building,Edifice,Fame
A military academy is dedicated to the study of war and the training of elite soldiers and officers.
-

**Lots** 2; **Cost** 12 Lumber, 6 Ore, 10 Stone

**Monthly Cost** 6 RP / 6 Months

**XP** 30; **Population** 100; **Size** Town

**Market Bonus** +3 Martial

**Construction** Warfare (expert) DC 30

**Upgrade From** <<academy|Settlement-Structures#Academy>>

**Item Bonus** +2 item bonus to <<Pledge of Fealty|Kingdom-Actions#PledgeOfFealty>> using Warfare, +2 item bonus to <<Train Army|Kingdom-Actions#TrainArmy>>
)

item(
# Mill[[Mill]]
## Structure 2
-
; Building
A mill grinds grain using the power of wind, water, or beasts of burden.
-

**Lots** 1; **Cost** 2 Lumber, 1 Stone

**Monthly Cost** 6 RP / 1 Months

**XP** 5; **Population** 20; **Size** Village

**Construction** Industry (trained) DC 16

**Item Bonus** +1 item bonus to <<Harvest Crops|Kingdom-Actions#HarvestCrops>>

**Effect** If a <<settlement|Settlement-Rules>> includes at least one mill built on a lot adjacent to a <<Water border|Settlement-Rules#WaterBorder>>, the increased efficiency of these mills reduces the <<settlement’s|Settlement-Rules>> <<Consumption|Settlement-Rules#Consumption>> by 1 (to a minimum of 0).
)

item(
# Mint[[Mint]]
## Structure 15
-
; Building,Edifice,Fame
A mint allows the kingdom to produce its own coinage to augment its economy. It can also include fortified underground chambers to help serve as a treasury.
-

**Lots** 1; **Cost** 12 Lumber, 20 Ore, 16 Stone

**Monthly Cost** 6 RP / 5 Months

**XP** 30; **Population** 30; **Size** City

**Market Bonus** +1 to all markets

**Construction** Trade (master) DC 34

**Item Bonus** +3 item bonus to <<Capital Investment|Kingdom-Actions#CapitalInvestment>>, <<Collect Taxes|Kingdom-Actions#CollectTaxes>>, and to <<Repair Reputation|Kingdom-Actions#RepairReputation>> (Crime)
)

item(
# Monastery[[Monastery]]
## Structure 3
-
; Building,Edifice
A cloister for meditation, study, and the pursuit of various other scholarly or religious paths.
-

**Lots** 2; **Cost** 4 Lumber, 6 Stone

**Monthly Cost** 4 RP / 4 Months

**XP** 10; **Population** 50; **Size** Village

**Market Bonus** +1 Divine

**Construction** Faith (trained) DC 23

**Item Bonus** +1 item bonus to <<Repair Reputation|Kingdom-Actions#RepairReputation>> (Corruption)

**Effect** The first time you build a monastery each Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1 and reduce Corruption by 1. Choose one type of Lore for your monastery to study; while in a <<settlement|Settlement-Rules>> containing a monastery, you gain a +1 item bonus to Lore checks of that type.
)

item(
# Monument[[Monument]]
## Structure 3
-
; Building,Edifice
A monument is an impressive stone <<structure|Settlement-Structures>> built to commemorate a historical event, honor a beloved leader, memorialize a tragedy, or simply serve as an artistic display.

**Lots** 1; **Cost** 1 Stone

**Monthly Cost** 6 RP / 1 Months

**XP** 5; **Population** 10; **Size** Village

**Construction** Arts (trained) DC 18

**Item Bonus** +1 to <<Create a Masterpiece|Kingdom-Actions#CreateAMasterpiece>>

**Effect** The first time you build a monument each Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1 and reduce one **Ruin of your choice by 1.
)

item(
# Museum[[Museum]]
## Structure 5
-
; Building,Fame
A museum displays art, objects of important cultural note, wonders of the natural world, and other marvels in a place where citizens can observe and learn.
-

**Lots** 2; **Cost** 6 Lumber, 2 Stone

**Monthly Cost** 6 RP / 5 Months

**XP** 30; **Population** 20; **Size** Town

**Construction** Exploration (trained) DC 20

**Item Bonus** +1 item bonus to <<Rest and Relax|Kingdom-Actions#RestAndRelax>> using Arts

**Effect** A magic item of level 6 or higher that has a particular import or bears significant historical or regional value (at the GM’s discretion) can be donated to a museum. Each time such an item is donated, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1. If that item is later removed from display, increase <<Unrest|Kingdom-Rules#Unrest>> by 1.
)

item(
# Noble Villa[[NobleVilla]]
## Structure 9
-
; Building,Residential,Fame
This sprawling manor has luxurious grounds. It houses a noble family and their staff, and includes several smaller support <<structures|Settlement-Structures>> such as servant’s quarters, stables, and groundskeeper’s cottages in addition to a manor.
-

**Lots** 2; **Cost** 10 Lumber, 6 Luxuries, 8 Stone

**Monthly Cost** 6 RP / 4 Months

**XP** 20; **Population** 50; **Size** Town

**Market Bonus** +1 Luxuries

**Construction** Politics (expert) DC 19

**Upgrade From** mansion

**Item Bonus** +1 item bonus to <<Improve Lifestyle|Kingdom-Actions#ImproveLifestyle>> and to <<Quell Unrest|Kingdom-Actions#QuellUnrest>> using Politics

**Effect** The first time you build a noble villa each Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 2.
)

item(
# Observatory[[Observatory]]
## Structure 7
-
; Building,Edifice
A specialized edifice designed for measuring the passage of time and observing the heavens. It may incorporate a tall tower and be equipped with lenses and mirrors, or an arrangement of standing stones.
-

**Lots** 1; **Cost** 2 Ore, 6 Stone

**Monthly Cost** 3 RP / 4 Months

**XP** 10; **Population** 10; **Size** City

**Market Bonus** +1 Occult

**Construction** Scholarship (trained) DC 23

**Item Bonus** +1 item bonus to <<Prognostication|Kingdom-Actions#Prognostication>>

**Effect** While in a <<settlement|Settlement-Rules>> with an observatory, you gain a +1 item bonus to Lore checks related to the suns and stars.
)

item(
# Occult Shop[[OccultShop]]
## Structure 13
-
; Building
An occult shop is usually a sprawling, mysterious store that specializes in buying and selling obscure magic and strange curios. It often provides access to supernatural services like fortune-telling.
-

**Lots** 1; **Cost** 12 Lumber, 12 Luxuries, 6 Stone

**Monthly Cost** 7 RP / 10 Months

**XP** 60; **Population** 30; **Size** City

**Market Bonus** +2 Arcane, +2 Divine, +2 Occult, +2 Primal

**Construction** Magic (master) DC 32

**Upgrade From** magic shop

**Item Bonus** +2 item bonus to <<Magical Construction|Kingdom-Actions#MagicalConstruction>>, <<Prognostication|Kingdom-Actions#Prognostication>>, and <<Supernatural Solution|Kingdom-Actions#SupernaturalSolution>>

**Effect** While in a <<settlement|Settlement-Rules>> with an occult shop, you gain a +2 item bonus to all checks made to <<Research|https://2e.aonprd.com/Rules.aspx?ID=3045>> esoteric subjects or to <<Recall Knowledge|https://2e.aonprd.com/Skills.aspx?ID=24&General=true>> about the same.
)

item(
# Opera House[[OperaHouse]]
## Structure 15
-
; Building,Edifice,Fame
An opera house functions well as a venue for operas, plays, and concerts, but also includes extensive facilities to aid in the training of all manner of bardic pursuits. Often, an opera house becomes a grandiose landmark, either due to its outlandish colors or eye-catching architecture.
-

**Lots** 2; **Cost** 20 Lumber, 18 Luxuries, 16 Stone

**Monthly Cost** 5 RP / 8 Months

**XP** 40; **Population** 50; **Size** City

**Construction** Arts (master) DC 34

**Upgrade From** <<theater|Settlement-Structures#Theater>>

**Item Bonus** +3 item bonus to <<Celebrate Holiday|Kingdom-Actions#CelebrateHoliday>> and <<Create a Masterpiece|Kingdom-Actions#CreateAMasterpiece>>

**Effect** The first time you build an opera house each Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 4. While in a <<settlement|Settlement-Rules>> with an opera house, you gain a +3 item bonus to Performance checks made to <<Earn Income|https://2e.aonprd.com/Skills.aspx?ID=21&General=true>>.
)

item(
# Orphanage[[Orphanage]]
## Structure 2
-
; Building,Residential
This sprawling residential building provides housing for orphans or even homeless citizens, but it can also help supply housing for refugees—but preferably not all at the same time, though!
-

**Lots** 1; **Cost** 2 Lumber

**Monthly Cost** 6 RP / 1 Months

**XP** 5; **Population** 50; **Size** City

**Construction** Industry DC 16

**Upgrade From** houses

**Effect** The first time you build an orphanage each Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1.
)

item(
# Palace[[Palace]]
## Structure 15
-
; Building,Edifice,Fame
A palace is a grand and splendid seat of government for your leaders and other political functionaries.
-

**Lots** 4; **Cost** 20 Lumber, 12 Luxuries, 15 Ore, 20 Stone

**Monthly Cost** 6 RP / 18 Months

**XP** 100; **Population** 200; **Size** City

**Market Bonus** +2 Luxuries, +1 to all others (except Contraband)

**Construction** Defense (master), Industry (master), Magic (master), or Statecraft (master) DC 34

**Upgrade From** <<castle|Settlement-Structures#Castle>>

**Item Bonus** +3 item bonus to <<Manage Trade Routes|Kingdom-Actions#ManageTradeAgreements>>, <<New Leadership|Kingdom-Actions#NewLeadership>>, <<Pledge of Fealty|Kingdom-Actions#PledgeOfFealty>>, <<Relocate Capital|Kingdom-Actions#RelocateCapital>>, and <<Send Diplomatic Envoy|Kingdom-Actions#SendDiplomaticEnvoy>>, and +3 item bonus to <<Garrison Army|Kingdom-Actions#GarrisonArmy>>, <<Recover Army|Kingdom-Actions#RecoverArmy>>, or <<Recruit Army|Kingdom-Actions#RecruitArmy>>

**Effect** A palace can only be built in your <<capital|Settlement-Rules#Capital>>. The first time you build a palace, reduce <<Unrest|Kingdom-Rules#Unrest>> by 10. If you <<Relocate your Capital|Kingdom-Actions#RelocateCapital>>, a palace left behind in that capital instead functions as a <<noble villa|Settlement-Structures#NobleVilla>> that takes up 4 lots. (If you represent this by placing two <<noble villas|Settlement-Structures#NobleVilla>> in these lots, make sure to note that they constitute a single building and aren’t two separate <<structures|Settlement-Structures>>.) A palace in a <<capital|Settlement-Rules#Capital>> allows PC leaders to take 3 <<Leadership activities|Kingdom-Actions#LeadershipPhase>> during the <<Activity phase|Kingdom-Turn#ActivityPhase>> of a Kingdom turn rather than just 2. In addition, once your kingdom has a palace, a PC in the <<Ruler leadership|Leadership-Roles#Ruler>> role gains a +3 item bonus to checks made to resolve <<Leadership activities|Kingdom-Actions#LeadershipPhase>>.
)

item(
# Park[[Park]]
## Structure 3
-
; Yard
A park is a plot of undeveloped land set aside for public use. This lot could be left as is, or the landscaping could be manipulated to have a specific look or type of terrain.
-

**Lots** 1; **Cost** 5 <<RP|Kingdom-Rules#ResourcePoints>>

**Monthly Cost** 5 RP / 1 Months

**XP** 5; **Population** 10; **Size** Town

**Construction** Wilderness DC 18

**Upgrade To** <<menagerie|Settlement-Structures#Menagerie>>

**Item Bonus** +1 item bonus to <<Rest and Relax|Kingdom-Actions#RestAndRelax>> using Wilderness checks

**Effect** The first time you build a park each Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1.
)

item(
# Paved Streets[[PavedStreets]]
## Structure 4
-
; Infrastructure
Brick or cobblestone streets speed transportation and ease the passage of people, mounts, and vehicles.
-

**Lots** —; **Cost** 6 Stone

**Monthly Cost** 4 RP / 3 Months

**XP** 10; **Population** 30; **Size** City

**Construction** Industry (trained) DC 19

**Effect** It takes a character only 5 minutes to move from one lot to an adjacent lot in an <<Urban Grid|Settlement-Rules#TheUrbanGrid>> when moving on paved streets. When you build paved streets, check the paved streets checkbox on your <<Urban Grid|Settlement-Rules#TheUrbanGrid>>.
)

item(
# Pier[[Pier]]
## Structure 3
-
; Yard
Several wooden piers allow easy access to fishing and provide a convenient place to moor boats.
-

**Lots** 1; **Cost** 2 Lumber

**Monthly Cost** 4 RP / 4 Months

**XP** 10; **Population** 20; **Size** Village

**Market Bonus** +1 to all

**Construction** Boating DC 18

**Upgrade To** <<waterfront|Settlement-Structures#Waterfront>>

**Item Bonus** +1 item bonus to <<Fishing Fleet|Kingdom-Actions#FishingFleet>>, <<Go Fishing|Kingdom-Actions#GoFishing>>

**Effect** A pier must be built in a lot next to a <<Water border|Settlement-Rules#WaterBorder>>.
)

item(
# Rubble[[Rubble]]
## Structure —
-
; Yard
An unsightly heap of rubble fills this lot.
-

**Lots** 1; **Cost** —

**Monthly Cost** - RP / - Months

**XP** 0; **Population** 0; **Size** Village

**Construction** —

**Effect** Rubble is created accidentally, such as from a result of certain kingdom events or failed <<Demolish|Kingdom-Actions#Demolish>> activity. You cannot build in a lot with rubble; it must be removed via a successful <<Demolish|Kingdom-Actions#Demolish>> activity.
)

item(
# Sacred Grove[[SacredGrove]]
## Structure 5
-
; Yard
This untouched land has been blessed by primal spirits, druids friendly with your <<settlement|Settlement-Rules>>, or allied fey creatures.
-

**Lots** 1; **Cost** 36 <<RP|Kingdom-Rules#ResourcePoints>>

**Monthly Cost** 6 RP / 6 Months

**XP** 30; **Population** 10; **Size** Village

**Market Bonus** +1 Primal

**Construction** Wilderness (trained) DC 20

**Item Bonus** +1 item bonus to <<Quell Unrest|Kingdom-Actions#QuellUnrest>> using Folklore
)

item(
# Secure Warehouse[[SecureWarehouse]]
## Structure 6
-
; Building
Secure warehouses are used to store valuables.
-

**Lots** 2; **Cost** 6 Lumber, 4 Ore, 6 Stone

**Monthly Cost** 8 RP / 3 Months

**XP** 20; **Population** 20; **Size** Town

**Construction** Industry (expert) DC 22

**Item Bonus** +1 item bonus to <<Craft Luxuries|Kingdom-Actions#CraftLuxuries>>

**Effect** Each secure warehouse in your kingdom increases your maximum Luxuries <<Commodity|Kingdom-Rules#Commodities>> capacity by 1.
)

item(
# Sewer System[[SewerSystem]]
## Structure 7
-
; Infrastructure
This underground sanitation system helps keep the <<settlement|Settlement-Rules>> clean and disease-free.
-

**Lots** —; **Cost** 8 Lumber, 8 Stone

**Monthly Cost** 4 RP / 6 Months

**XP** 20; **Population** 50; **Size** City

**Construction** Engineering (expert) DC 23

**Item Bonus** +1 item bonus to <<Clandestine Business|Kingdom-Actions#ClandestineBusiness>>

**Effect** A sewer system reduces the <<settlement’s|Settlement-Rules>> <<Consumption|Settlement-Rules#Consumption>> by 1. Having a sewer system can also affect certain kingdom events. When you build a sewer system, check the sewer system checkbox on its <<Urban Grid|Settlement-Rules#TheUrbanGrid>>. (For <<metropolises|Settlement-Rules#Metropolis>>, this infrastructure automatically applies to all of its <<Urban Grids|Settlement-Rules#TheUrbanGrid>>.)
)

item(
# Shrine[[Shrine]]
## Structure 1
-
; Building
A shrine is a small building devoted to the worship of a deity or faith. It can be attended by resident priests or visiting clergy.
-

**Lots** 1; **Cost** 2 Lumber, 1 Stone

**Monthly Cost** 4 RP / 2 Months

**XP** 5; **Population** 10; **Size** Village

**Market Bonus** +1 Divine

**Construction** Folklore (trained) DC 15

**Upgrade To** <<temple|Settlement-Structures#Temple>>

**Item Bonus** +1 item bonus to <<Celebrate Holiday|Kingdom-Actions#CelebrateHoliday>>
)

item(
# Smithy[[Smithy]]
## Structure 3
-
; Building
A smithy consists of workshops and forges.
-

**Lots** 1; **Cost** 2 Lumber, 1 Ore, 1 Stone

**Monthly Cost** 4 RP / 2 Months

**XP** 5; **Population** 10; **Size** Village

**Market Bonus** +1 Martial

**Construction** Industry (trained) DC 18

**Item Bonus** +1 item bonus to <<Clear Hex|Kingdom-Actions#ClearHex>> (Engineering), <<Trade Commodities|Kingdom-Actions#TradeCommodities>>, +1 item bonus to <<Outfit Army|Kingdom-Actions#OutfitArmy>>

**Effect** While in a <<settlement|Settlement-Rules>> with a smithy, you gain a +1 item bonus to <<Craft|https://2e.aonprd.com/Actions.aspx?ID=2385>> checks made to work with metal.
)

item(
# Smuggler’s Den[[Smuggler’sDen]]
## Structure 2
-
; Building
A meeting place for lowlifes and criminals looking to move illicit goods, whether fencing their spoils or purchasing things out of sight of the law.
-

**Lots** 1; **Cost** 2 Lumber

**Monthly Cost** 5 RP / 2 Months

**XP** 10; **Population** 10; **Size** Village

**Market Bonus** +1 Contraband

**Construction** Intrigue (trained) DC 16

**Upgrade To** <<Illicit Market|Settlement-Structures#IllicitMarket>>

**Ruin** Score +1 Crime

**Item Bonus** +1 item bonus to Manage Trade Agreements, and you can use Intrigue instead of Trade to Manage Trade Agreements.

**Effect** When you have a failure when using Intrigue to Manage Trade Agreements, you can treat it as a success instead, but you gain +1 Crime. If you have a critical failure when using Intrigue to Manage Trade Agreements, your smuggling is detected and you gain 1 <<Infamy|Kingdom-Rules#FameAndInfamy>> and 1 <<Unrest|Kingdom-Rules#Unrest>>, and you have a -1 penalty on checks to Manage Trade Agreements for 1d4 months.

**Special** A Smuggler’s Den must share a block with at least one Housing improvement and another <<Structure|Settlement-Structures>> with a Construction requirement of Community, Faith, Industry, or Trade as a front.
)

item(
# Specialized Artisan[[SpecializedArtisan]]
## Structure 4
-
; Building
These shops and homes are devoted to crafters who create fine jewelry, glassware, clockworks, and the like.
-

**Lots** 1; **Cost** 4 Lumber, 1 Luxury

**Monthly Cost** 5 RP / 2 Months

**XP** 10; **Population** 20; **Size** Town

**Market Bonus** +2 to any market (except Contraband)

**Construction** Trade (expert) DC 19

**Item Bonus** +1 item bonus to Craft Luxuries

**Effect** While in a <<settlement|Settlement-Rules>> with a specialized artisan, you gain a +1 item bonus to Craft checks made to craft specialized goods like jewelry.
)

item(
# Stable[[Stable]]
## Structure 3
-
; Yard
A stable consists of a yard and smaller <<structures|Settlement-Structures>> to house, train, and sell mounts.
-

**Lots** 1; **Cost** 2 Lumber

**Monthly Cost** 5 RP / 2 Months

**XP** 10; **Population** 10; **Size** Village

**Construction** Wilderness (trained) DC 18

**Item Bonus** +1 item bonus to Breed Livestock, Establish Trade Agreement and Supply Network
)

item(
# Stockyard[[Stockyard]]
## Structure 3
-
; Yard
A stockyard includes several barns and pens used to house livestock and prepare them for slaughter.
-

**Lots** 4; **Cost** 4 Lumber

**Monthly Cost** 5 RP / 4 Months

**XP** 20; **Population** 100; **Size** Village

**Construction** Industry DC 18

**Item Bonus** +1 item bonus to Breed Livestock, Gather Livestock

**Effect** A <<settlement|Settlement-Rules>> with at least one stockyard reduces its <<Consumption|Settlement-Rules#Consumption>> by 1.
)

item(
# Stonemason[[Stonemason]]
## Structure 3
-
; Building
A stonemason is a large building used to store and work quarried stone for preparation in building.
-

**Lots** 2; **Cost** 2 Lumber

**Monthly Cost** 8 RP / 2 Months

**XP** 10; **Population** 50; **Size** Village

**Construction** Industry (trained) DC 18

**Item Bonus** +1 item bonus to <<Establish Work Site|Kingdom-Actions#EstablishWorkSite>> (quarry).

**Effect** Each stonemason in your kingdom increases your maximum Stone <<Commodity|Kingdom-Rules#Commodities>> capacity by 1.
)

item(
# Tannery[[Tannery]]
## Structure 3
-
; Building
A tannery is a factory outfitted with racks, vats and tools for the preparation of hides and leather.
-

**Lots** 1; **Cost** 2 Lumber

**Monthly Cost** 6 RP / 1 Months

**XP** 5; **Population** 20; **Size** Village

**Construction** Industry (trained) DC 18

**Item Bonus** +1 to Breed Livestock, Trade <<Commodities|Kingdom-Rules#Commodities>>

**Effect** A tannery cannot share a block with any Residential <<structure|Settlement-Structures>> except tenements.
)

item(
# Tavern, Dive[[TavernDive]]
## Structure 1
-
; Building
A dive tavern is a rough-and-tumble establishment for entertainment, eating, and drinking.
-

**Lots** 1; **Cost** 1 Lumber

**Monthly Cost** 6 RP / 2 Months

**XP** 10; **Population** 20; **Size** Village

**Construction** Trade (trained) DC 15

**Upgrade To** tavern, popular

**Item Bonus** +1 to Clear Hex (Exploration)

**Effect** The first time you build a dive tavern in a Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1 but increase Crime by 1.
)

item(
# Tavern, Popular[[TavernPopular]]
## Structure 3
-
; Building
A popular tavern is a respectable establishment for entertainment, eating, and drinking.
-

**Lots** 1; **Cost** 6 Lumber, 2 Stone

**Monthly Cost** 6 RP / 4 Months

**XP** 20; **Population** 30; **Size** Village

**Construction** Trade (expert) DC 18

**Upgrade From** tavern, dive

**Upgrade To** tavern, luxury

**Item Bonus** +1 item bonus to Hire Adventurers, Reconnoiter Hex, and to Rest and Relax using Trade

**Effect** The first time you build a popular tavern in a Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 2. If you attempt a Performance check to Earn Income in a <<settlement|Settlement-Rules>> with a popular tavern, you gain a +1 item bonus to the check. All checks made to Gather Information in a <<settlement|Settlement-Rules>> with at least one popular tavern gain a +1 item bonus.
)

item(
# Tavern, Luxury[[TavernLuxury]]
## Structure 9
-
; Building,Fame
A luxury tavern is a high-class establishment for entertainment, eating, and drinking. It may even include a built-in stage for performers to use.
-

**Lots** 2; **Cost** 10 Lumber, 8 Luxuries, 8 Stone

**Monthly Cost** 8 RP / 6 Months

**XP** 40; **Population** 40; **Size** Town

**Construction** Trade (master) DC 26

**Upgrade From** tavern, popular

**Upgrade To** tavern, world-class

**Item Bonus** +2 item bonus to Hire Adventurers, Reconnoiter Hex, and to Rest and Relax using Trade

**Effect** The first time you build a luxury tavern in a Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1d4+1. If attempt a Performance check to Earn Income in a <<settlement|Settlement-Rules>> with a luxury tavern, you gain a +2 item bonus to the check. All checks made to Gather Information in a <<settlement|Settlement-Rules>> with at least one luxury tavern gain a +2 item bonus.
)

item(
# Tavern, World-Class[[TavernWorldClass]]
## Structure 15
-
; Building,Edifice,Fame
A World-Class Tavern is a legendary establishment for entertainment, eating, and drinking. It has at least one venue for performances—perhaps multiple ones.
-

**Lots** 2; **Cost** 18 Lumber, 15 Luxuries, 15 Stone

**Monthly Cost** 8 RP / 8 Months

**XP** 60; **Population** 60; **Size** City

**Construction** Trade (master) DC 34

**Upgrade From** tavern, luxury

**Item Bonus** +3 item bonus to Hire Adventurers, Reconnoiter Hex, Rest and Relax using Trade, and to Repair Reputation (Strife)

**Effect** The first time you build a world-class tavern in a Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 2d4. If you attempt a Performance check to Earn Income in a <<settlement|Settlement-Rules>> with a world-class tavern, you gain a +3 item bonus to the check. All checks made to Gather Information in a <<settlement|Settlement-Rules>> with a world-class tavern gain a +3 item bonus.
)

item(
# Temple[[Temple]]
## Structure 7
-
; Building
A temple is a building devoted to worshipping a deity or faith.
-

**Lots** 2; **Cost** 6 Lumber, 6 Stone

**Monthly Cost** 4 RP / 8 Months

**XP** 30; **Population** 50; **Size** Town

**Construction** Folklore (trained) DC 23

**Upgrade From** shrine

**Upgrade To** cathedral

**Item Bonus** +1 item bonus to Celebrate Holiday and Provide Care

**Effect** The first time you build a temple each Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 2.
)

item(
# Tenement[[Tenement]]
## Structure 0
-
; Building,Residential
Tenements are hastily built shantytowns of tightly packed, multi-family dwellings that are cheap and fast to build.
-

**Lots** 1; **Cost** 1 Lumber

**Monthly Cost** 1 RP / 0 Months

**XP** 5; **Population** 100; **Size** Town

**Construction** Industry DC 14

**Upgrade To** Houses

**Ruin** +1 to a <<Ruin|Kingdom-Rules#Ruin>> of your choice

**Effect** The first time you build tenements each Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1.
)

item(
# Theater[[Theater]]
## Structure 9
-
; Building
A theater is a venue for concerts, plays, and dances, but can double as a place for debates or other events.
-

**Lots** 2; **Cost** 8 Lumber, 3 Stone

**Monthly Cost** 4 RP / 6 Months

**XP** 20; **Population** 50; **Size** Town

**Construction** Arts (expert) DC 26

**Upgrade From** festival hall

**Upgrade To** opera house

**Item Bonus** +2 item bonus to Celebrate Holiday.

**Effect** The first time you build a theater each Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1. While in a <<settlement|Settlement-Rules>> with a theater, you gain a +2 item bonus to Performance checks made to Earn Income.
)

item(
# Thieves’ Guild[[Thieves’Guild]]
## Structure 5
-
; Building
The government knows this group exists but allows it to continue doing its business as long as the guild doesn’t overstep its bounds.
-

**Lots** 1; **Cost** 4 Lumber

**Monthly Cost** 5 RP / 5 Months

**XP** 20; **Population** 50; **Size** Town

**Construction** Intrigue (trained) DC 20

**Item Bonus** +1 item bonus to <<Infiltration|Kingdom-Actions#Infiltration>>

**Ruin** +1 Crime

**Effect** While in a <<settlement|Settlement-Rules>> with a thieves’ guild, you gain a +1 item bonus to <<Create Forgeries|https://2e.aonprd.com/Actions.aspx?ID=2402>>.
)

item(
# Town Hall[[TownHall]]
## Structure 2
-
; Building,Edifice
A town hall is a public venue for town meetings and a repository for town history and records.
-

**Lots** 2; **Cost** 4 Lumber, 4 Stone

**Monthly Cost** 6 RP / 4 Months

**XP** 20; **Population** 50; **Size** Town

**Construction** Defense (trained), Industry (trained), Magic (trained), or Statecraft (trained) DC 16

**Upgrade To** <<castle|Settlement-Structures#Castle>>

**Item Bonus** +1 to <<Manage Trade Agreements|Kingdom-Actions#ManageTradeAgreements>>

**Effect** The first time you build a town hall each Kingdom turn, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1. A town hall in a <<capital|Settlement-Rules#Capital>> allows PC leaders to take 3 <<Leadership activities|Kingdom-Actions#LeadershipPhase>> during the <<Activity phase|Kingdom-Turn#ActivityPhase>> of a Kingdom turn rather than just 2.
)

item(
# Trade Shop[[TradeShop]]
## Structure 3
-
; Building
A trade shop is a store that focuses on providing services.
-

**Lots** 1; **Cost** 2 Lumber

**Monthly Cost** 5 RP / 2 Months

**XP** 10; **Population** 10; **Size** Village

**Construction** Trade (trained) DC 18

**Upgrade To** <<guildhall|Settlement-Structures#Guildhall>>

**Item Bonus** +1 item bonus to <<Purchase Commodities|Kingdom-Actions#PurchaseCommodities>>

**Effect** When you build a trade shop, indicate the kind of shop it is, such as a bakery, carpenter, tailor, and so on. While in a <<settlement|Settlement-Rules>> with a trade shop, you gain a +1 item bonus to all associated <<Crafting|https://2e.aonprd.com/Actions.aspx?ID=2385>> checks.
)

item(
# University[[University]]
## Structure 15
-
; Building,Edifice,Fame
A university is a sprawling institution of higher learning.
-

**Lots** 4; **Cost** 18 Lumber, 18 Luxuries, 18 Stone

**Monthly Cost** 7 RP / 11 Months

**XP** 70; **Population** 200; **Size** City

**Construction** Scholarship (master) DC 34

**Upgrade From** <<academy|Settlement-Structures#Academy>>

**Item Bonus** +3 item bonus to <<Creative Solution|Kingdom-Actions#CreativeSolution>>

**Effect** While in a <<settlement|Settlement-Rules>> with a university, you gain a +3 item bonus to Lore checks made to <<Recall Knowledge|https://2e.aonprd.com/Skills.aspx?ID=24&General=true>> while Investigating, to <<Research|https://2e.aonprd.com/Rules.aspx?ID=3045>> checks, and to <<Decipher Writing|https://2e.aonprd.com/Skills.aspx?ID=20&General=true>>.
)

item(
# Wall, Stone[[WallStone]]
## Structure 5
-
; Infrastructure
Stone walls provide solid defenses to a <<settlement’s|Settlement-Rules>> borders.
-

**Lots** —; **Cost** 8 Stone

**Monthly Cost** 2 RP / 2 Months

**XP** 5; **Population** 40; **Size** Village

**Construction** Defense (trained) DC 20

**Upgrade From** <<wooden wall|Settlement-Structures#WallWooden>>

**Effect** A stone wall is built along the border of your <<settlement|Settlement-Rules>>. The first time you build a stone wall in each <<settlement|Settlement-Rules>>, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1. When you build a stone wall, choose a border on your <<Urban Grid|Settlement-Rules#TheUrbanGrid>> and check the appropriate checkbox; if you’re upgrading from a <<wooden wall|Settlement-Structures#WallWooden>>, uncheck that box.
)

item(
# Wall, Wooden[[WallWooden]]
## Structure 1
-
; Infrastructure
Wooden walls provide serviceable defenses to a <<settlement|Settlement-Rules>>.
-

**Lots** —; **Cost** 4 Lumber

**Monthly Cost** 2 RP / 1 Months

**XP** 5; **Population** 20; **Size** Village

**Construction** Defense DC 15

**Upgrade To** stone wall

**Effect** A wooden wall is built along the border of your <<settlement|Settlement-Rules>>. The first time you build a wooden wall in each <<settlement|Settlement-Rules>>, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1. When you build a wooden wall, choose a border on your <<Urban Grid|Settlement-Rules#TheUrbanGrid>> and check the appropriate checkbox.
)

item(
# Watchtower[[Watchtower]]
## Structure 3
-
; Building
A watchtower serves as a guard post that grants a <<settlement|Settlement-Rules>> advance warning to upcoming dangerous events.
-

**Lots** 1; **Cost** 4 Lumber or 4 Stone

**Monthly Cost** 6 RP / 2 Months

**XP** 20; **Population** 20; **Size** Village

**Construction** Defense (trained) DC 18

**Item Bonus** +1 item bonus to checks to resolve events affecting the <<settlement|Settlement-Rules>>.

**Effect** The first time you build a watchtower each Kingdom turn, decrease <<Unrest|Kingdom-Rules#Unrest>> by 1.
)

item(
# Waterfront[[Waterfront]]
## Structure 8
-
; Yard
A waterfront serves as a bustling port for waterborne passengers and cargo. It’s supported by facilities for shipping and shipbuilding, but also features boardwalks for foot traffic and fishers to ply their trade as well.
-

**Lots** 4; **Cost** 10 Lumber

**Monthly Cost** 9 RP / 10 Months

**XP** 60; **Population** 200; **Size** City

**Construction** Boating (expert) DC 24

**Upgrade From** <<pier|Settlement-Structures#Pier>>

**Item Bonus** +1 item bonus to <<Fishing Fleet|Kingdom-Actions#FishingFleet>>, <<Go Fishing|Kingdom-Actions#GoFishing>>, and to <<Establish Trade Agreement|Kingdom-Actions#EstablishTradeAgreement>> and <<Rest and Relax|Kingdom-Actions#RestAndRelax>> using Boating

**Effect** A waterfront must be constructed next to a <<Water Border|Settlement-Rules#WaterBorder>>.
)

item(
# Watergate[[Watergate]]
## Structure 6
-
; Infrastructure
A reinforced culvert or conduit for allowing water to pass through your fortifications.
-

**Lots** 0; **Cost** 1 Ore, 1 Lumber, 1 Stone

**Monthly Cost** 2 RP / 1 Months

**XP** 5; **Population** 0; **Size** Town

**Construction** Defense (expert) DC 22

**Effect** When you have built a <<stone wall|Settlement-Structures#WallStone>>, a watergate allows water (including a natural river or an artificial waterway or aqueduct) to enter the <<settlement|Settlement-Rules>>, while still having defenses on the surface and below the water, such as booms, jetties, harbor chains, and the like, to provide protection against aquatic assault.

**Special** You can build a watergate as part of the same <<Build Structure|Kingdom-Actions#BuildStructure>> activity to build a <<stone wall|Settlement-Structures#WallStone>>, using the higher DC for the watergate and paying the <<RP|Kingdom-Rules#ResourcePoints>> cost for both <<structures|Settlement-Structures>>.
)

item(
# Waterway[[Waterway]]
## Structure 1
-
; Infrastructure
An artificial waterway dug into the earth within the boundaries of your <<settlement|Settlement-Rules>>.
-

**Lots** 1; **Cost** 1 Lumber or 1 Stone

**Monthly Cost** 3 RP / 1 Months

**XP** 5; **Population** 10; **Size** Town

**Construction** Engineering DC 15

**Item Bonus** +1 item bonus to <<Build Structure|Kingdom-Actions#BuildStructure>> when you construct a <<baths|Settlement-Structures#Baths>>, <<cistern|Settlement-Structures#Cistern>>, or <<park|Settlement-Structures#Park>> adjacent to the waterway.

**Effect** You transform a square on your building hex into a canal. All squares directly adjacent to that square (not including diagonally adjacent squares) are considered to have a <<water border|Settlement-Rules#WaterBorder>>. A waterway must be adjacent to a water border or another waterway. Water cannot pass through a wall unless the wall has a <<Watergate|Settlement-Structures#Watergate>>.
)

item(
# Windmill[[Windmill]]
## Structure 3
-
; Building
A windmill harnesses the power of the wind to grind grain or perform similar tasks.
-

**Lots** 1; **Cost** 1 Ore, 2 Lumber

**Monthly Cost** 8 RP / 2 Months

**XP** 10; **Population** 10; **Size** Village

**Construction** Industry (trained) DC 18

**Item Bonus** +1 item bonus to <<Harvest Crops|Kingdom-Actions#HarvestCrops>>

**Effect** If a <<settlement|Settlement-Rules>> has at least one windmill built adjacent to a <<Cistern|Settlement-Structures#Cistern>> or <<Granary|Settlement-Structures#Granary>>, the increased efficiency reduces the <<settlement’s|Settlement-Rules>> <<Consumption|Settlement-Rules#Consumption>> by 1 (to a minimum of 0).
)
