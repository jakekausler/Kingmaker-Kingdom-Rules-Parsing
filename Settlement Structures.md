# Settlement Structures[[SettlementStructures]]

You build structures using the Build Structure activity during the Civic Activities step of the Activity phase of the Kingdom turn.

When you build in a lot within one of your settlements, you’re rarely literally constructing a single building. While an arena or cathedral might stand alone as a towering edifice, most lots represent a number of buildings whose focus is to support the type of improvement that lot supports. For example, a brewery could represent a collection of brewers and bottlers and the families who support them, while a luxury merchant would represent several specialized stores. Even sprawling, sizable improvements like dumps, cemeteries, or parks might include nearby dwellings or cottages for those who tend and manage the area or live along its margins.

**Residential Lots and Overcrowding** While almost every structure presumably includes a small amount of lodging, you need to build Residential lots in order to give your citizens enough places to live. You do so by building a structure that has the Residential trait in a chosen lot. Settlements require a number of Residential lots equal to the number of blocks that have any structures built within them, although these residential lots need not be located one per block. For example, when a village expands to a town, it initially occupies 2 blocks. It needs 2 Residential lots in total among those 2 blocks, either both in one block or one in each block. A settlement without this minimum number of Residential lots is Overcrowded and generates 1 Unrest for the kingdom during the Upkeep phase of each Kingdom turn.

**Reduced to Rubble** It’s possible for structures in a settlement to be reduced to rubble by a failed attempt to Demolish a structure or a poor result from a kingdom event. When a structure is reduced to rubble, replace the lots the structure once occupied on the Urban Grid with rubble. Having rubble in a lot doesn’t itself impact a kingdom’s Unrest or other statistics negatively, but it does prevent you from building in those lots. You must Demolish that lot before you can build there again. When a single lot that contains part of a multi-lot structure is reduced to rubble, each of the lots that contained that structure are replaced with individual lots of rubble.

## Structure Descriptions[[StructureDescriptions]]

Structures are described in the following format.

item(
# STRUCTURE NAME[[ExampleStructure]]
## LEVEL
-
; Building
A structure’s level indicates the minimum kingdom level required to build it. Each structure has traits that convey its properties.
**Building** indicates the structure is a collection of indoor sites.

**Yard** indicates the structure is primarily an outdoor site.

**Infrastructure** indicates that the structure benefits all lots in an Urban Grid without occupying a lot. (For a metropolis, this means you’ll need to build Infrastructure separately for each Urban Grid that makes up the settlement.)

**Edifice** structures grants its benefits to a settlement only once; if you build that structure an additional time in the same settlement, it’s purely cosmetic.

**Residential** structures help house the settlement’s citizens; a settlement requires at least one Residential lot per block to avoid being Overcrowded.

**Fame** indicates that the building generates one Fame when the building is constructed, but it also increases the settlement's Consumption by 1.
A short textual description rounds out the top of the structure stat block.
-
**Lots** The number of contiguous lots that the structure occupies on the Urban Grid; **Cost** The cost in Commodities (if any) you must spend before attempting the Build Structure check.

**Monthly Cost** The number of RP you must spend per turn to advance production, and how many turns you must spend them before the building applies its effects and bonuses. You advance structure production during the Upkeep phase of a kingdom turn, and you can advance as many as you choose a single month during this time. When the cost has been paid the listed number of times, the structure is complete.
The cost is not paid on the turn you use the Build Structure activity unless the structure takes 0 months. In this case, you can choose to pay to complete the structure during the Structure Production phase of the same turn.
If you have not advanced all your structures that are currently under construction during the Structure Production phase, you might gain unrest. You gain 1 unrest for each structure that you did not advance above the number of settlements. For example, if you had two settlements and you did not advance five structures that were under construction, you would gain 3 unrest. This represents your citizens worrying you are undergoing more work than the kingdom can afford.

**XP** Lists the XP value of the structure. At the end of each turn, you receive XP for the highest XP building you began construction on; **Population** Represents the estimated population increase adding this structure. This is purely cosmetic; **Size** The minimum settlement size (village, town, city) in which this structure can be built.

**Market Bonus** The amount this structure adds to the settlement's market level in one or more markets. Some structures will let you choose one or more markets or have exceptions. If you can choose more than one market, you cannot choose the same market for the same structure more than once.

**Construction** This entry lists the required skill, proficiency rank, and DC for the Build Structure check.

**Upgrade From/Upgrade To** Some structures can be upgraded into a more advanced form of the existing structure, such as upgrading a Shrine into a Temple. If you upgrade a structure, subtract the RP and Commodity cost used to build the original structure from the cost of the new structure. When the new structure is complete, its effects replace those of the previous structure. You can’t upgrade a structure to one that occupies more lots if there isn’t space in the block for the new structure’s size. (You do not need to build the lesser form of a structure before you build the advanced form.)

**Item Bonus** This entry indicates any item bonuses the structure grants to activities made within the settlement’s influence. These bonuses are item bonuses, but if you build multiple structures that grant an Item Bonus to a specific Kingdom Activity, their item bonuses stack up to the settlement's Maximum Item Bonus.

**Ruin** Some structures negatively impact society. If this structure does so, it will increase one or more of your kingdom’s Ruins when constructed; this increase only happens once, when the structure is built. Increases to Ruin in this way aren’t removed if the structure is later demolished.

**Effect** All additional game effects the structure grants to your kingdom are listed here. In many cases, these effects grant item bonuses to PCs while they are in the settlement, but unlike those granted by the Item Bonus above, item bonuses found in this section of the stat block do not stack with other item bonuses. Unless stated otherwise, effects in this section apply only within this settlement; they do not apply to areas influenced by this settlement.
)

## Settlement Structures[[SettlementStructures]]

Presented below are stat blocks for a wide range of structures that serve a variety of purposes in settlements, both to bolster kingdom statistics and PC resources. Encourage your PCs to come up with flavorful specific names for individual structures they create!


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

**Upgrade From** library

**Upgrade To** military academy, university

**Item Bonus** +2 item bonus to Creative Solution

**Effect** While in a settlement with an Academy, you gain a +2 item bonus to Lore checks made to Recall Knowledge while Investigating, to all checks made while Researching (Gamemastery Guide 154), and to Decipher Writing.
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

**Item Bonus** +1 item bonus to Clandestine Business and Send Diplomatic Envoy

        **Effect** If you have an aerie in the same city as a castle, garrison, keep, or watchtower, you gain a +1 item bonus on Defense checks made to resolve a Monster Activity event, or a +2 item bonus if the monsters involved are flying creatures
)

item(
# Alchemy Laboratory[[AlchemyLaboratory]]
## Structure 3
-
; Building
An alchemy laboratory serves as a factory for alchemists and their apprentices for the crafting of potions, elixirs, and all manner of alchemical items. An infamous kingdom’s laboratory might specialize in poisons as well.
-

**Lots** 1; **Cost** 2 Ore, 5 Stone

**Monthly Cost** 6 RP / 3 Months

**XP** 20; **Population** 10; **Size** Town

**Market Bonus** +2 Alchemical

**Construction** Industry (trained) DC 16

**Item Bonus** +1 item bonus to Demolish

**Effect** Checks attempted to Identify Alchemy in any settlement with at least one alchemy laboratory gain a +1 item bonus.
)

item(
# Arcanist’s Tower[[Arcanist’sTower]]
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

**Item Bonus** +1 item bonus to Magical Construction and Quell Unrest using Magic

**Effect** Checks made to Borrow an Arcane Spell or Learn a Spell in any settlement with at least one arcanist’s tower gain a +1 item bonus.
)

item(
# Arena[[Arena]]
## Structure 9
-
; Edifice,Fame,Yard
An Arena is a large public structure, traditionally open to the air, surrounded by seating and viewing areas. It’s used for staging competitions, athletics, gladiatorial combats, and elaborate entertainments and spectacles.
-

**Lots** 4; **Cost** 6 Lumber, 12 Stone

**Monthly Cost** 4 RP / 10 Months

**XP** 40; **Population** 100; **Size** City

**Construction** Warfare (expert) DC 26

**Item Bonus** +2 item bonus to Celebrate Holiday and to Warfare checks made to Quell Unrest

**Effect** An arena lets you to retrain combat-themed feats more efficiently while in the settlement; doing so takes only 5 days rather than a week of downtime.
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

**Item Bonus** +1 item bonus to New Leadership and Pledge of Fealty using Statecraft

**Effect** When you use a Build Roads or Establish Farmland activity in a hex adjacent to a settlement with an assembly, or a Build Structure activity in a settlement with an assembly, you can take one kingdom activity of the same type in that settlement or a hex adjacent to it.
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

**Item Bonus** +1 item bonus to Capital Investments, Collect Taxes, and Tap Treasury

**Effect** The Capital Investment Leadership activity can be used only within the influence area of a settlement with a bank.
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

**Item Bonus** +2 item bonus to Rest and Relax using Arts and to Create a Masterpiece. While in a settlement with a Bardic college, you gain a +3 item bonus to Lore and Occultism checks made to Recall Knowledge while Investigating and to all art or music-related checks while Researching (see the Pathfinder Gamemastery Guide).
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

**Item Bonus** +1 item bonus to Garrison Army, Recover Army, or Recruit Army (see Appendix 3)
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

**Item Bonus** +1 item bonus to Provide Care and on Defense checks made to resolve a Plague event
)

item(
# Brewery[[Brewery]]
## Structure 1
-
; Building
A brewery is devoted to crafting alcohol, be it beer, wine, or spirits. This building can represent bottlers, vineyards, or even structures that produce nonalcoholic drinks.
-

**Lots** 1; **Cost** 2 Lumber

**Monthly Cost** 6 RP / 1 Months

**XP** 5; **Population** 20; **Size** Village

**Construction** Agriculture DC 15

**Item Bonus** +1 item bonus to Establish Trade Agreement

**Effect** When you build a brewery, reduce Unrest by 1 as long as you have fewer than 4 breweries in the settlement at that time.
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

**Item Bonus** +1 item bonus to Establish Work Site (quarry)

**Effect** You can build quarries within the settlement's influence in desert, plains, or coastal terrain, reducing the RP cost to build them by 1.
)

item(
# Bridge[[Bridge]]
## Structure 2
-
; Building
A reinforced span designed to cross waterways and ease public transportation.
-

**Lots** 0 or 1; **Cost** 3 Lumber or 3 Stone

**Monthly Cost** 6 RP / 1 Months

**XP** 5; **Population** 0; **Size** Town

**Construction** Engineering DC 16

**Effect** People within the settlement can freely move across squares occupied by a waterway that also has a bridge.

**Special** A bridge can share the same space as a waterway inside a city. Alternatively, if the settlement has a water border but nearby land, a bridge can be built occupying one square but serving as a causeway to connect the settlement to dry land beyond the city.
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

**Item Bonus** +1 *circumstance* bonus to any one Focus.

**Effect** The first time you build a bureau each Kingdom turn, reduce one Ruin of your choice by 1.

**Special** You can build multiple Bureaus in a settlement, but each must select a different Focus (such as a Bureau of Agriculture and a Bureau of Trade).
)

item(
# Castle[[Castle]]
## Structure 9
-
; Building,Edifice,Fame
A castle is a fortified structure that often serves as the seat of government for a kingdom.
-

**Lots** 4; **Cost** 12 Lumber, 12 Stone

**Monthly Cost** 5 RP / 11 Months

**XP** 50; **Population** 200; **Size** Town

**Market Bonus** +1 Luxuries, +1 Martial

**Construction** Defense (expert), Industry (expert), Magic (expert), or Statecraft (expert) DC 26

**Upgrade From** town hall

**Upgrade To** palace
**Item Bonus** +2 item bonus to Manage Trade Agreements, Relocate Capital, New Leadership, Pledge of Fealty, Send Diplomatic Envoy, and +2 item bonus to Garrison Army, Recover Army, or Recruit Army

**Effect** The first time you build a castle each Kingdom turn, reduce Unrest by 1d4. A castle in a capital allows PC leaders to take 3 Leadership activities during the Activity phase of a Kingdom turn rather than 2.
)

item(
# Cathedral[[Cathedral]]
## Structure 15
-
; Building,Edifice,Fame
A cathedral serves as a focal point of spiritual worship in the settlement and the seat of regional power for a religion. Most cathedrals are astounding works of art and eye‑catching marvels of architecture.
-

**Lots** 4; **Cost** 20 Lumber, 20 Stone

**Monthly Cost** 5 RP / 12 Months

**XP** 60; **Population** 100; **Size** City

**Market Bonus** +4 Divine

**Construction** Folklore (master) DC 34

**Upgrade From** temple

**Item Bonus** +3 item bonus to Celebrate Holiday, Provide Care, and Repair Reputation (Corruption)

**Effect** The first time you build a cathedral in a turn, reduce Unrest by 4. While in a settlement with a cathedral, you gain a +3 item bonus to Lore and Religion checks made to Recall Knowledge while Investigating, and to all faith-themed checks made while Researching (Gamemastery Guide 154).
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

**Effect** Giving the citizens a place to bury and remember their departed loved ones helps to temper Unrest gained from dangerous events. If you have at least one cemetery in a settlement, reduce Unrest gained from any dangerous settlement events in that particular settlement by 1 (to a maximum of 4 for four cemeteries). The presence of a cemetery provides additional effects during certain kingdom events.
)

item(
# Cistern[[Cistern]]
## Structure 1
-
; Building
A safe supply of fresh water for a settlement, usually stored underground.
-

**Lots** 1; **Cost** 2 Stone

**Monthly Cost** 8 RP / 1 Months

**XP** 5; **Population** 10; **Size** Town

**Construction** Industry DC 15

**Item Bonus** +1 item bonus to resolve a Crop Failure, Food Shortage, or Local Disaster event.

**Effect** If a settlement has a Cistern adjacent to a Granary, that Granary increases your kingdom’s Food Commodity capacity by 2 instead of by 1.

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

**Upgrade From** Monument

**Item Bonus** +2 item bonus to Celebrate Holiday and to Garrison Army, Recover Army, or Recruit Army in a settlement with a colossus. You gain a +4 item bonus to Relocate Capital to a settlement with a colossus.

**Effect** The first time you build a colossus each Kingdom turn, reduce Unrest by 2 and reduce one Ruin of your choice by 2. Your armies gain a +2 item bonus to Morale of armies when in a settlement with a colossus, or a +1 item bonus to Morale if they are in the same hex or an adjacent hex. This bonus to Morale checks stacks with the bonus granted by the Fortified condition.

**Special** A colossus can share the same space on the urban grid with a lighthouse or observatory (but not both).
)

item(
# Construction Yard[[ConstructionYard]]
## Structure 10
-
; Yard
A construction yard supports the building of structures by providing a centralized place to gather supplies and craft components for larger projects.
-

**Lots** 4; **Cost** 10 Lumber, 10 Stone

**Monthly Cost** 10 RP / 4 Months

**XP** 40; **Population** 30; **Size** Town

**Construction** Engineering DC 27

**Item Bonus** +1 item bonus to Build Housing, Build Roads, Build Structure, Irrigation, Repair, and to Repair Reputation (Decay)
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

**Item Bonus** +1 item bonus to Repair Reputation and on checks to resolve a Justice Prevails event.

**Effect** The first time you build a courthouse in a Kingdom turn, reduce your Corruption and Crime Ruin scores by 1 each. While in a settlement with a courthouse, you gain a +1 item bonus to Lore checks related to the law and legal matters.
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

**Item Bonus** +1 item bonus to Demolish

**Effect** You gain a +1 item bonus on checks to resolve Plague events or Monster Activity involving undead. If built adjacent to a cemetery, it negates any additional effects that cemetery would normally have during certain kingdom events.

**Special** A crematorium must be built adjacent to a cemetery or dump.
)

item(
# Dump[[Dump]]
## Structure 2
-
; Yard
A dump is a centralized place for the disposal of refuse, often including a shack for a caretaker to live in.
-

**Lots** 1; **Cost** 4 RP

**Monthly Cost** 4 RP / 1 Months

**XP** 5; **Population** 10; **Size** Town

**Construction** Industry DC 16

**Item Bonus** +1 item bonus to Demolish

**Effect** Certain events have a more dangerous impact on settlements that don’t include a dump. A dump can’t be located in a block with any Residential structures.
located in a block with any Residential structures.
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

**Item Bonus** +1 item bonus to Send Diplomatic Envoy and Request Foreign Aid
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

**Effect** You increase your kingdom’s maximum Food Commodity storage capacity by 1.

**Special** Can share a lot with a castle, cathedral, monument, park, sacred grove, shrine, or temple.
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

**Upgrade To** theater

**Item Bonus** +1 item bonus to Celebrate Holiday and Quell Unrest (Arts)
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

**Item Bonus** +1 item bonus to Establish Work Site (mine)

**Effect** By processing ore in a foundry, your settlements grow more efficient at storing your kingdom’s Commodities. Each foundry in your kingdom increases your maximum Ore Commodity capacity by 1. A foundry cannot share a block with a Residential structure.
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

**Item Bonus** +1 item bonus to Clandestine Business

**Effect** The first time you build a gambling den on your kingdom turn, you can make an Intrigue check against your kingdom’s control DC. If the check succeeds, you gain a bonus Resource Die for economy, or two Resource Dice on a critical success. If the check fails, you lose 1 RP from all four ability score pools, or one Resource Die from each on a critical failure. In addition, you can use Intrigue for the Rest and Relax kingdom activity.
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

**Item Bonus** +1 item bonus to Fortify, Fortify Hex, Outfit Army, or Train Army

**Effect** A garrison helps outfit armies with new gear or trains them. When you build a garrison, reduce Unrest by 1.
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

**Upgrade To** luxury store, marketplace
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

**Item Bonus** +1 item bonus to Establish Farmland

**Effect** Each granary in your kingdom increases your maximum Food Commodity capacity by 1.
)

item(
# Guildhall[[Guildhall]]
## Structure 5
-
; Building
A guildhall serves as the headquarters for a trade guild or similar organization. It includes offices for its leaders and functionaries as well as workshops for its craftspeople and a storefront for customers. Guildhalls always specialize in a certain type of trade or pursuit, but typically, only the largest cities have multiple guildhalls. Smaller settlements tend to focus on one particular trade.
-

**Lots** 2; **Cost** 8 Lumber

**Monthly Cost** 6 RP / 6 Months

**XP** 30; **Population** 100; **Size** Town

**Market Bonus** +2 to any one market (except contraband)

**Construction** Trade (expert) DC 20

**Upgrade From** trade shop

**Item Bonus** +1 item bonus to Tap Treasury

**Effect** When you build a guildhall, indicate what sort of organization (such as bakers, grocers, smiths, etc.) it serves as a headquarters for. While in a settlement with a guildhall, you gain a +1 item bonus to all related skill checks to Earn Income or to Repair.
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

**Upgrade From** park

**Item Bonus** +2 item bonus to Celebrate Holiday and to Garrison Army, Recover Army, or Recruit Army in a settlement with a colossus. You gain a +4 item bonus to Relocate Capital to a settlement with a hanging gardens.

**Effect** The first time you build hanging gardens each Kingdom turn, reduce Unrest by 2 and reduce Decay by 2. A settlement with hanging gardens reduces its Consumption by 2. In addition, you can use Agriculture for the Rest and Relax kingdom activity. While in a settlement with hanging gardens, you gain a +2 item bonus to Lore checks related to plants, agriculture, and medicine.
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

**Upgrade To** hospital

**Item Bonus** +1 item bonus to Provide Care
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

**Upgrade From** herbalist

**Item Bonus** +1 item bonus to Provide Care and Quell Unrest

**Effect** While in a settlement with a hospital, you gain a +2 item bonus to Medicine checks to Treat Disease and Treat Wounds.
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

**Upgrade From** tenement

**Upgrade To** mansion or orphanage

**Effect** The first time you build houses each Kingdom turn, reduce Unrest by 1.
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

**Item Bonus** +1 item bonus to Clandestine Business

**Ruin** +1 Crime
)

item(
# Inn[[Inn]]
## Structure 1
-
; Building,Residential
An inn provides a safe and secure place for a settlement’s visitors to rest.
-

**Lots** 1; **Cost** 2 Lumber

**Monthly Cost** 5 RP / 2 Months

**XP** 10; **Population** 30; **Size** Village

**Construction** Trade DC 15

**Item Bonus** +1 Item bonus to Clear Hex (Exploration) and Hire Adventurers
)

item(
# Jail[[Jail]]
## Structure 2
-
; Building
A jail is a fortified structure that houses criminals, prisoners, or dangerous monsters separate from the rest of society.
-

**Lots** 1; **Cost** 4 Lumber, 2 Ore, 4 Stone

**Monthly Cost** 7 RP / 2 Months

**XP** 10; **Population** 20; **Size** Village

**Construction** Defense DC 16

**Item Bonus** +1 item bonus to Quell Unrest using Intrigue

**Effect** The first time you build a jail each a Kingdom turn, reduce Crime by 1.
)

item(
# Keep[[Keep]]
## Structure 3
-
; Building,Edifice
A keep is a high-walled defensive structure that guards the heart of a settlement. It includes practice and marshaling yards as well as a refuge for your leaders should danger strike the settlement.
-

**Lots** 2; **Cost** 8 Lumber, 8 Stone

**Monthly Cost** 8 RP / 4 Months

**XP** 30; **Population** 100; **Size** Village

**Market Bonus** +1 Martial

**Construction** Defense (trained) DC 18

**Item Bonus** +1 item bonus to Deploy Army, Garrison Army, or Train Army

**Effect** The first time you build a keep each Kingdom turn, reduce Unrest by 1.
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

**Upgrade To** academy

**Item Bonus** +1 item bonus to Creative Solution and Rest and Relax using Scholarship checks

**Effect** While in a settlement with a library, you gain a +1 item bonus to Lore checks made to Recall Knowledge while Investigating, as well as to Researching checks (Gamemastery Guide 154), and to Decipher Writing checks.
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

**Item Bonus** +1 item bonus to Establish Work Site (lumber camp)

**Effect** Each lumberyard in your kingdom increases maximum Lumber Commodity capacity by 1. A lumberyard must be built in a lot next to a Water border, both to give the yard a source of power to run saws to process timber, but more importantly to facilitate the shipment of trees to the yard.
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

**Upgrade From** general store

**Upgrade To** magic shop

**Item Bonus** +1 item bonus to Establish Trade Agreement

**Effect** A luxury store must be built on a block that has either a mansion or a noble villa.
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

**Upgrade From** luxury store

**Upgrade To** occult shop

**Item Bonus** +1 item bonus to Prognostication and Supernatural Solution
)

item(
# Magical Streetlamps[[MagicalStreetlamps]]
## Structure 5
-
; Infrastructure
Magical streetlamps are everburning torches that have been fitted within lampposts along the streets. At your option, these magical lights might even be free-floating spheres of light or other unusual forms of illumination.
-

**Lots** —; **Cost** 20 RP

**Monthly Cost** 4 RP / 5 Months

**XP** 20; **Population** 10; **Size** City

**Construction** Magic (expert) DC 20

**Effect** Magical streetlamps provide nighttime illumination for an entire Urban Grid. When you build magical streetlamps, check the magical streetlamps checkbox on your Urban Grid. The first time you build magical streetlamps in a Kingdom turn, reduce Crime by 1.
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

**Upgrade From** houses

**Upgrade To** noble villa

**Item Bonus** +1 item bonus to Improve Lifestyle
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

**Upgrade From** general store

**Item Bonus** +1 item bonus to Establish Trade Agreement and Trade Fair
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

**Upgrade From** park

**Item Bonus** +2 item bonus to Rest and Relax using Wilderness

**Effect** A menagerie typically contains a selection of level 5 or lower animals. If your party captures a living creature of level 6 or higher and can transport the creature back to a settlement with a menagerie, you can add that creature to the menagerie as long as your kingdom level is at least 4 higher than the creature’s level. Each time such a creature is added to a menagerie, gain 1 Fame or Infamy point (as appropriate) or reduce one Ruin of your choice by 1. Only creatures with Intelligence modifiers of –4 or –5 are appropriate to place in a menagerie. A kingdom gains 1 Unrest at the start of a Kingdom turn for each sapient creature (anything with an Intelligence modifier of –3 or higher) on display in a menagerie.
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

**Upgrade From** academy

**Item Bonus** +2 item bonus to Pledge of Fealty using Warfare, +2 item bonus to Train Army
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

**Item Bonus** +1 item bonus to Harvest Crops

**Effect** If a settlement includes at least one mill built on a lot adjacent to a Water border, the increased efficiency of these mills reduces the settlement’s Consumption by 1 (to a minimum of 0).
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

**Item Bonus** +3 item bonus to Capital Investment, Collect Taxes, and to Repair Reputation (Crime)
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

**Item Bonus** +1 item bonus to Repair Reputation (Corruption)

**Effect** The first time you build a monastery each Kingdom turn, reduce Unrest by 1 and reduce Corruption by 1. Choose one type of Lore for your monastery to study; while in a settlement containing a monastery, you gain a +1 item bonus to Lore checks of that type.
)

item(
# Monument[[Monument]]
## Structure 3
-
; Building,Edifice
A monument is an impressive stone structure built to commemorate a historical event, honor a beloved leader, memorialize a tragedy, or simply serve as an artistic display.

**Lots** 1; **Cost** 1 Stone

**Monthly Cost** 6 RP / 1 Months

**XP** 5; **Population** 10; **Size** Village

**Construction** Arts (trained) DC 18

**Item Bonus** +1 to Create a Masterpiece

**Effect** The first time you build a monument each Kingdom turn, reduce Unrest by 1 and reduce one Ruin of your choice by 1.
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

**Item Bonus** +1 item bonus to Rest and Relax using Arts

**Effect** A magic item of level 6 or higher that has a particular import or bears significant historical or regional value (at the GM’s discretion) can be donated to a museum. Each time such an item is donated, reduce Unrest by 1. If that item is later removed from display, increase Unrest by 1.
)

item(
# Noble Villa[[NobleVilla]]
## Structure 9
-
; Building,Residential,Fame
This sprawling manor has luxurious grounds. It houses a noble family and their staff, and includes several smaller support structures such as servant’s quarters, stables, and groundskeeper’s cottages in addition to a manor.
-

**Lots** 2; **Cost** 10 Lumber, 6 Luxuries, 8 Stone

**Monthly Cost** 6 RP / 4 Months

**XP** 20; **Population** 50; **Size** Town

**Market Bonus** +1 Luxuries

**Construction** Politics (expert) DC 19

**Upgrade From** mansion

**Item Bonus** +1 item bonus to Improve Lifestyle and to Quell Unrest using Politics

**Effect** The first time you build a noble villa each Kingdom turn, reduce Unrest by 2.
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

**Item Bonus** +1 item bonus to Prognostication

**Effect** While in a settlement with an observatory, you gain a +1 item bonus to Lore checks related to the suns and stars.
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

**Item Bonus** +2 item bonus to Magical Construction, Prognostication, and Supernatural Solution

**Effect** While in a settlement with an occult shop, you gain a +2 item bonus to all checks made to Research esoteric subjects or to Recall Knowledge about the same.
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

**Upgrade From** theater

**Item Bonus** +3 item bonus to Celebrate Holiday and Create a Masterpiece

**Effect** The first time you build an opera house each Kingdom turn, reduce Unrest by 4. While in a settlement with an opera house, you gain a +3 item bonus to Performance checks made to Earn Income.
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

**Effect** The first time you build an orphanage each Kingdom turn, reduce Unrest by 1.
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

**Upgrade From** castle

**Item Bonus** +3 item bonus to Manage Trade Routes, New Leadership, Pledge of Fealty, Relocate Capital, and Send Diplomatic Envoy, and +3 item bonus to Garrison Army, Recover Army, or Recruit Army

**Effect** A palace can only be built in your capital. The first time you build a palace, reduce Unrest by 10. If you Relocate your Capital, a palace left behind in that capital instead functions as a noble villa that takes up 4 lots. (If you represent this by placing two noble villas in these lots, make sure to note that they constitute a single building and aren’t two separate structures.) A palace in a capital allows PC leaders to take 3 Leadership activities during the Activity phase of a Kingdom turn rather than just 2. In addition, once your kingdom has a palace, a PC in the Ruler leadership role gains a +3 item bonus to checks made to resolve Leadership activities.
)

item(
# Park[[Park]]
## Structure 3
-
; Yard
A park is a plot of undeveloped land set aside for public use. This lot could be left as is, or the landscaping could be manipulated to have a specific look or type of terrain.
-

**Lots** 1; **Cost** 5 RP

**Monthly Cost** 5 RP / 1 Months

**XP** 5; **Population** 10; **Size** Town

**Construction** Wilderness DC 18

**Upgrade To** menagerie

**Item Bonus** +1 item bonus to Rest and Relax using Wilderness checks

**Effect** The first time you build a park each Kingdom turn, reduce Unrest by 1.
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

**Effect** It takes a character only 5 minutes to move from one lot to an adjacent lot in an Urban Grid when moving on paved streets. When you build paved streets, check the paved streets checkbox on your Urban Grid.
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

**Upgrade To** waterfront

**Item Bonus** +1 item bonus to Fishing Fleet, Go Fishing

**Effect** A pier must be built in a lot next to a Water border.
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

**Effect** Rubble is created accidentally, such as from a result of certain kingdom events or failed Demolish activity. You cannot build in a lot with rubble; it must be removed via a successful Demolish activity.
)

item(
# Sacred Grove[[SacredGrove]]
## Structure 5
-
; Yard
This untouched land has been blessed by primal spirits, druids friendly with your settlement, or allied fey creatures.
-

**Lots** 1; **Cost** 36 RP

**Monthly Cost** 6 RP / 6 Months

**XP** 30; **Population** 10; **Size** Village

**Market Bonus** +1 Primal

**Construction** Wilderness (trained) DC 20

**Item Bonus** +1 item bonus to Quell Unrest using Folklore
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

**Item Bonus** +1 item bonus to Craft Luxuries

**Effect** Each secure warehouse in your kingdom increases your maximum Luxuries Commodity capacity by 1.
)

item(
# Sewer System[[SewerSystem]]
## Structure 7
-
; Infrastructure
This underground sanitation system helps keep the settlement clean and disease-free.
-

**Lots** —; **Cost** 8 Lumber, 8 Stone

**Monthly Cost** 4 RP / 6 Months

**XP** 20; **Population** 50; **Size** City

**Construction** Engineering (expert) DC 23

**Item Bonus** +1 item bonus to Clandestine Business

**Effect** A sewer system reduces the settlement’s Consumption by 1. Having a sewer system can also affect certain kingdom events. When you build a sewer system, check the sewer system checkbox on its Urban Grid. (For metropolises, this infrastructure automatically applies to all of its Urban Grids.)
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

**Upgrade To** temple

**Item Bonus** +1 item bonus to Celebrate Holiday
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

**Item Bonus** +1 item bonus to Clear Hex (Engineering), Trade Commodities, +1 item bonus to Outfit Army

**Effect** While in a settlement with a smithy, you gain a +1 item bonus to Craft checks made to work with metal.
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

**Upgrade To** Illicit Market

**Ruin** Score +1 Crime

**Item Bonus** +1 item bonus to Manage Trade Agreements, and you can use Intrigue instead of Trade to Manage Trade Agreements.

**Effect** When you have a failure when using Intrigue to Manage Trade Agreements, you can treat it as a success instead, but you gain +1 Crime. If you have a critical failure when using Intrigue to Manage Trade Agreements, your smuggling is detected and you gain 1 Infamy and 1 Unrest, and you have a -1 penalty on checks to Manage Trade Agreements for 1d4 months.

**Special** A Smuggler’s Den must share a block with at least one Housing improvement and another Structure with a Construction requirement of Community, Faith, Industry, or Trade as a front.
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

**Effect** While in a settlement with a specialized artisan, you gain a +1 item bonus to Craft checks made to craft specialized goods like jewelry.
)

item(
# Stable[[Stable]]
## Structure 3
-
; Yard
A stable consists of a yard and smaller structures to house, train, and sell mounts.
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

**Effect** A settlement with at least one stockyard reduces its Consumption by 1.
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

**Item Bonus** +1 item bonus to Establish Work Site (quarry).

**Effect** Each stonemason in your kingdom increases your maximum Stone Commodity capacity by 1.
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

**Item Bonus** +1 to Breed Livestock, Trade Commodities

**Effect** A tannery cannot share a block with any Residential structure except tenements.
)

item(
# Tavern, Dive[[Tavern,Dive]]
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

**Effect** The first time you build a dive tavern in a Kingdom turn, reduce Unrest by 1 but increase Crime by 1.
)

item(
# Tavern, Popular[[Tavern,Popular]]
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

**Effect** The first time you build a popular tavern in a Kingdom turn, reduce Unrest by 2. If you attempt a Performance check to Earn Income in a settlement with a popular tavern, you gain a +1 item bonus to the check. All checks made to Gather Information in a settlement with at least one popular tavern gain a +1 item bonus.
)

item(
# Tavern, Luxury[[Tavern,Luxury]]
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

**Effect** The first time you build a luxury tavern in a Kingdom turn, reduce Unrest by 1d4+1. If attempt a Performance check to Earn Income in a settlement with a luxury tavern, you gain a +2 item bonus to the check. All checks made to Gather Information in a settlement with at least one luxury tavern gain a +2 item bonus.
)

item(
# Tavern, World-Class[[Tavern,WorldClass]]
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

**Effect** The first time you build a world-class tavern in a Kingdom turn, reduce Unrest by 2d4. If you attempt a Performance check to Earn Income in a settlement with a world-class tavern, you gain a +3 item bonus to the check. All checks made to Gather Information in a settlement with a world-class tavern gain a +3 item bonus.
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

**Effect** The first time you build a temple each Kingdom turn, reduce Unrest by 2.
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

**Ruin** +1 to a Ruin of your choice

**Effect** The first time you build tenements each Kingdom turn, reduce Unrest by 1.
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

**Effect** The first time you build a theater each Kingdom turn, reduce Unrest by 1. While in a settlement with a theater, you gain a +2 item bonus to Performance checks made to Earn Income.
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

**Item Bonus** +1 item bonus to Infiltration

**Ruin** +1 Crime

**Effect** While in a settlement with a thieves’ guild, you gain a +1 item bonus to Create Forgeries.
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

**Upgrade To** castle

**Item Bonus** +1 to Manage Trade Agreements

**Effect** The first time you build a town hall each Kingdom turn, reduce Unrest by 1. A town hall in a capital allows PC leaders to take 3 Leadership activities during the Activity phase of a Kingdom turn rather than just 2.
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

**Upgrade To** guildhall

**Item Bonus** +1 item bonus to Purchase Commodities

**Effect** When you build a trade shop, indicate the kind of shop it is, such as a bakery, carpenter, tailor, and so on. While in a settlement with a trade shop, you gain a +1 item bonus to all associated Crafting checks.
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

**Upgrade From** academy

**Item Bonus** +3 item bonus to Creative Solution

**Effect** While in a settlement with a university, you gain a +3 item bonus to Lore checks made to Recall Knowledge while Investigating, to Research checks (Gamemastery Guide 154), and to Decipher Writing.
)

item(
# Wall, Stone[[Wall,Stone]]
## Structure 5
-
; Infrastructure
Stone walls provide solid defenses to a settlement’s borders.
-

**Lots** —; **Cost** 8 Stone

**Monthly Cost** 2 RP / 2 Months

**XP** 5; **Population** 40; **Size** Village

**Construction** Defense (trained) DC 20

**Upgrade From** wooden wall

**Effect** A stone wall is built along the border of your settlement. The first time you build a stone wall in each settlement, reduce Unrest by 1. When you build a stone wall, choose a border on your Urban Grid and check the appropriate checkbox; if you’re upgrading from a wooden wall, uncheck that box.
)

item(
# Wall, Wooden[[Wall,Wooden]]
## Structure 1
-
; Infrastructure
Wooden walls provide serviceable defenses to a settlement.
-

**Lots** —; **Cost** 4 Lumber

**Monthly Cost** 2 RP / 1 Months

**XP** 5; **Population** 20; **Size** Village

**Construction** Defense DC 15

**Upgrade To** stone wall

**Effect** A wooden wall is built along the border of your settlement. The first time you build a wooden wall in each settlement, reduce Unrest by 1. When you build a wooden wall, choose a border on your Urban Grid and check the appropriate checkbox.
)

item(
# Watchtower[[Watchtower]]
## Structure 3
-
; Building
A watchtower serves as a guard post that grants a settlement advance warning to upcoming dangerous events.
-

**Lots** 1; **Cost** 4 Lumber or 4 Stone

**Monthly Cost** 6 RP / 2 Months

**XP** 20; **Population** 20; **Size** Village

**Construction** Defense (trained) DC 18

**Item Bonus** +1 item bonus to checks to resolve events affecting the settlement.

**Effect** The first time you build a watchtower each Kingdom turn, decrease Unrest by 1.
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

**Upgrade From** pier

**Item Bonus** +1 item bonus to Fishing Fleet, Go Fishing, and to Establish Trade Agreement and Rest and Relax using Boating

**Effect** A waterfront must be constructed next to a Water Border.
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

**Effect** When you have built a stone wall, a watergate allows water (including a natural river or an artificial waterway or aqueduct) to enter the settlement, while still having defenses on the surface and below the water, such as booms, jetties, harbor chains, and the like, to provide protection against aquatic assault.

**Special** You can build a watergate as part of the same Build Structure activity to build a stone wall, using the higher DC for the watergate and paying the RP cost for both structures.
)

item(
# Waterway[[Waterway]]
## Structure 1
-
; Infrastructure
An artificial waterway dug into the earth within the boundaries of your settlement.
-

**Lots** 1; **Cost** 1 Lumber or 1 Stone

**Monthly Cost** 3 RP / 1 Months

**XP** 5; **Population** 10; **Size** Town

**Construction** Engineering DC 15

**Item Bonus** +1 item bonus to Build Structure when you construct a baths, cistern, or park adjacent to the waterway.

**Effect** You transform a square on your building hex into a canal. All squares directly adjacent to that square (not including diagonally adjacent squares) are considered to have a water border. A waterway must be adjacent to a water border or another waterway. Water cannot pass through a wall unless the wall has a Watergate.
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

**Item Bonus** +1 item bonus to Harvest Crops

**Effect** If a settlement has at least one windmill built adjacent to a Cistern or Granary, the increased efficiency reduces the settlement’s Consumption by 1 (to a minimum of 0).
)