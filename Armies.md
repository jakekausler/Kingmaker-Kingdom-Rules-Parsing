# Army Stat Block[[ArmyStatBlock]]

Armies have one of four type traits. <<Infantry|#Infantry>> consists of soldiers or creatures that move on foot. <<Cavalry|#Cavalry>> consists of mounted combat units. <<Skirmishers|#Skirmishers>> consist of a small number of highly mobile units. <<Siege armies|#SiegeEngines>> focus on the deployment of siege engines rather than personal combat.

item(
# Army Name[[SampleArmyStatBlock]]
## Army (level)
-
; Rarity Trait,Type Trait

[[ScoutingDC]]**Scouting** This entry lists the modifier for an army's initiative—typically equal to the Perception modifier of the army's individual creatures—or the Scouting DC to detect an army that lies in ambush in a hex (to generate a Scouting DC, add 10 to the Scouting modifier).

[[RecruitmentDC]]**Recruitment DC** This lists the DC required to <<recruit the army|Kingdom-Actions#RecruitArmy>> (as a general rule, this DC is equal to the standard DC for the army's level)—see <<Recruiting an Army|Kingdom-Actions#RecruitArmy>> below; <<Consumption|Settlement-Rules#Consumption>> This lists the number of Food <<Commodities|Kingdom-Rules#Commodities>> the army consumes during the Kingdom turn's <<Upkeep Phase|Kingdom-Turn#UpkeepPhase>>; see <<Pay Consumption|Kingdom-Turn#PayConsumption>>. If you fail to pay <<Consumption|Settlement-Rules#Consumption>> during a Kingdom turn, all of your armies increase their <<shaken|Army-Conditions#Shaken>> and <<weary|Army-Conditions#Weary>> conditions by 1. An army whose <<shaken|Army-Conditions#Shaken>> and <<weary|Army-Conditions#Weary>> conditions reach 4 or higher as a result of this increase immediately disbands; this causes the kingdom to gain 1d4 <<Unrest|Kingdom-Rules#Unrest>> and increases one <<Ruin|Kingdom-Rules#Ruin>> of the party's choice by 1.

**Description** This gives a brief description of the army.
-
**AC** This lists the army's Armor Class; **Saves** Armies have two saving throws: a Maneuver save and a Morale save. **Maneuver** This modifier applies to all checks made by the army to maneuver, be it to execute a complex <<tactic|Army-Tactics>> or to minimize damage and effects from unusual physical dangers; **Morale** This modifier applies to all checks made by the army to avoid becoming <<shaken|Army-Conditions#Shaken>> or to resist effects that undermine cooperation, bravery, loyalty, and such.

**HP** This lists the army's Hit Points. When an army's Hit Points reach zero, it becomes <<defeated|Army-Conditions#Defeated>>. An army cannot be reduced to fewer than 0 Hit Points. The army's Rout Threshold (RT) is listed in parenthesis after its Hit Points. RT is typically half its maximum HP. An army that is resistant to fear or is particularly brave generally has a lower RT, while the rare army composed of creatures that are entirely immune to fear won't have an RT listed at all.

**Melee** The name of the attack the army uses for a melee Strike, followed by the attack modifier. An army inflicts 1 point of damage on a hit and 2 points on a critical hit. Melee Strikes can only be used against <<engaged|Army-Conditions#Engaged>> armies.

**Ranged** The name of the attack the army uses for a ranged Strike, followed by the attack modifier. An army inflicts 1 point of damage on a hit and 2 points on a critical hit. An army can use its ranged Strike up to 5 times in each <<war encounter|War-Encounters>> before its ammunition is depleted (unless it has the <<Increased Ammunition|Army-Tactics#IncreasedAmmunition>> tactic). An army automatically replenishes its ranged Strike shots at the end of a <<war encounter|War-Encounters>>.

**Tactics** Any <<tactics|Army-Tactics>> known by the army are listed here.

**Gear** Any <<gear|Army-Gear>> outfitted by the army is listed here.

**Special Abilities** Additional unique abilities possessed by the army are detailed here.
)

# Basic Armies[[BasicArmies]]

The statistics for each of the basic armies present them at their minimum level.

item(
# Infatry[[Infantry]]
## Army 1
-
; Infantry

**Scouting** +7

**Recruitment** DC 15; **Consumption** 1

**Description** This is a platoon of armored soldiers armed with melee weapons.

**AC** 16; **Maneuver** +4 (low); **Morale** +10 (high)

**HP** 4 (RT 2)

**Melee** weapons +9
)

item(
# Cavalry[[Cavalry]]
## Army 3
-
; Infantry

**Scouting** +9

**Recruitment** DC 18; **Consumption** 2

**Description** Cavalry consists of armored soldiers armed with melee weapons and mounted on horses.

**AC** 19; **Maneuver** +12 (high); **Morale** +6 (low)

**HP** 4 (RT 2)

**Melee** weapons +12

[[Overrun]]**Overrun** Cavalry armies gain a +1 status bonus on weapon attacks against <<infantry|#Infantry>> and <<skirmisher|#Skirmishers>> armies, but they suffer a –1 status penalty on Maneuver and Morale saves against area attacks and mental attacks.
)

item(
# Skirmishers[[Skirmishers]]
## Army 5
-
; Skirmisher

**Scouting** +12

**Recruitment** DC 20; **Consumption** 1

**Description** Skirmishers are lightly armored, but their ability to move quickly and to focus on individual tactics rather than working as a unit make them more resilient in other ways. A skirmisher army's AC is two lower than normal for its level, but its Maneuver and Morale are two higher than normal for its level.

**AC** 20; **Maneuver** +17 (high); **Morale** +11 (low)

**HP** 4 (RT 2)

**Melee** weapons +15
)

item(
# Siege Engines[[SiegeEngines]]
## Army 7
-
; Siege

**Scouting** +15

**Recruitment** DC 23; **Consumption** 1

**Description** A siege engine army consists of several catapults, ballistae, trebuchets, or other mechanized engines of war.

**AC** 25; **Maneuver** +12 (low); **Morale** +18 (high)

**HP** 6 (RT 3)

**Ranged** siege engine +15 (5 shots)

[[EnginesOfWar]]**Engines of War** Siege engines cannot be outfitted with <<gear|Army-Gear>>. They cannot attack <<engaged|Army-Conditions#Engaged>> armies. They are more difficult to <<destroy|Army-Conditions#Destroyed>> due to their higher hit points than other <<basic armies|#BasicArmies>>. A siege engine can attack and damage <<fortifications|War-Encounters#Fortifications>> with its ranged attacks as part of the <<Battle|War-Actions#Battle>> or <<Overwhelming Bombardment|War-Actions#OverwhelmingBombardment>> actions.
)

# Specialized Armies[[SpecializedArmies]]

To recruit a specialized army, you must first <<establish diplomatic relations|Kingdom-Rules#DiplomaticRelations>> with the associated group, after which you can attempt the <<Recruit Army|Kingdom-Actions#RecruitArmy>> activity using a Statecraft check. Only one specialized army can be recruited from each group. The level listed for each army indicates the minimum kingdom level at which the army can be recruited. The GM has the stat blocks for each specialized army.

**DC and Modifier Adjustments** As with <<basic armies|#BasicArmies>>, specialized armies immediately adjust upward in level to match the level of the PCs' kingdom, but unlike basic armies, the DCs and checks for specialized armies have different baselines. In stat blocks for specialized armies, the DCs and modifiers are given for that army at its minimum level, followed by an adjustment value in parenthesis. When the PCs recruit a specialized army at a level above its minimum, calculate its DCs and modifiers by starting with the values for a <<basic army of that level from the table|Warfare-Rules#BasicArmiesByLevelTable>> then applying the adjustment values given here.

**Darkvision** Many of the specialized armies possess the <<Darkvision|Army-Tactics#Darkvision>> <<tactic|Army-Tactics>> —they gain this <<tactic|Army-Tactics>> for free, and it does not count against the maximum <<tactics|Army-Tactics>> they can possess.

**Unique Tactics** Specialized armies possess at least one unique <<tactic|Army-Tactics>>. These tactics count against the maximum <<tactics|Army-Tactics>> the army can know, and these unique <<tactics|Army-Tactics>> cannot be replaced.