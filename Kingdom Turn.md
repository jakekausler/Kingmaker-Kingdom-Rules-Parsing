# Kingdom Turn[[KingdomTurn]]

Running a kingdom plays out as Kingdom turns that occur at the end of each in-game month. Each Kingdom turn is divided into phases, and these phases are divided into steps.

## Upkeep Phase[[UpkeepPhase]]

During the Upkeep phase, you adjust your kingdom’s statistics based on activities you have taken during the previous month.

### Step 1: Assign Leadership Roles[[AssignLeadershipRoles]]

To assign or change characters associated with <<leadership roles|Leadership-Roles>>, do so now using the <<New Leadership|Kingdom-Actions#NewLeadership>> kingdom activity. You can perform this activity as often as you wish during this step.

Next, determine if any <<vacancy penalties|Leadership-Roles#VacancyPenalty>> apply. Any unassigned roles incur their <<vacancy penalties|Leadership-Roles#VacancyPenalty>>. Also, if a character assigned to a <<leadership role|Leadership-Roles>> hasn’t spent the required week of downtime on that role since the end of the last Kingdom turn, they must either give up one of the three kingdom activities they would perform during the <<Leadership activities|Kingdom-Actions#LeadershipPhase>> step of the <<Activity phase|Kingdom-Turn#ActivityPhase>> of this Kingdom turn or apply the <<vacancy penalty|Leadership-Roles#VacancyPenalty>> for their role until the start of the next Kingdom turn. (NPCs cannot perform kingdom activities, so in the unusual case that they were unable to spend the required downtime—see <<Leadership Roles|Leadership-Roles>>—they must apply the <<vacancy penalty|Leadership-Roles#VacancyPenalty>>.) If a leader was replaced between Kingdom turns due to an unexpected vacancy, as long as a character currently holds the role and any characters assigned to the role collectively spent the required downtime, the <<vacancy penalty|Leadership-Roles#VacancyPenalty>> does not apply.

### Step 2: Resource Collection[[ResourceCollection]]

The exact amount of resources you have to draw upon each Kingdom turn varies, as each month there are countless unexpected boons and setbacks throughout each citizen’s life that can impact how they can bolster your national plans.

First, determine the number of <<Resource Dice|Kingdom-Rules#ResourceDice>> you are entitled to roll for the current Kingdom turn by adding your kingdom level + 4 to any bonus dice or penalty dice you gained from the previous turn. You cannot have fewer than 0 <<Resource Dice|Kingdom-Rules#ResourceDice>>.

Next, roll your <<Resource Dice|Kingdom-Rules#ResourceDice>> to determine how many <<Resource Points (RP)|Kingdom-Rules#ResourcePoints>> you have available during this turn. Your <<RP|Kingdom-Rules#ResourcePoints>> is equal to the roll result. (<<RP|Kingdom-Rules#ResourcePoints>> remaining at the end of your turn can be converted into kingdom <<Experience Points|Kingdom-Turn#XPPhase>>.)

Finally, if you have any <<Work Sites|Kingdom-Rules#WorkSite>> established in your kingdom, gather <<Commodities|Kingdom-Rules#Commodities>>. You gain 1 <<Commodity|Kingdom-Rules#Commodities>> from each <<Work Site|Kingdom-Rules#WorkSite>>, or double that if the <<Work Site|Kingdom-Rules#WorkSite>> is in a <<Resource|Kingdom-Rules#Resource>> hex. Any <<Commodities|Kingdom-Rules#Commodities>> gathered in excess of your <<storage capacity|Kingdom-Rules#Commodities>> are lost.

### Step 3: Structure Advancement[[StructuresAdvancement]]

On your first Kingdom turn, you have no structures under construction; skip to the next step.

You may advance any number of <<structures|Settlement-Structures>> that are under construction in your kingdom. When you do so, spend the monthly <<RP|Kingdom-Rules#ResourcePoints>> for the <<structure|Settlement-Structures>> and reduce the remaining <<construction time|Kingdom-Turn#StructuresAdvancement>> by 1 month. If the <<structure|Settlement-Structures>> is complete, its effects are applied immediately and any bonuses are applied.

If you have any buildings that were under construction that you did not advance, subtract the number of buildings you did not advance from the number of <<settlements|Settlement-Rules>> in your kingdom. If the number is greater than 0, you gain that much <<Unrest|Kingdom-Rules#Unrest>> as your citizens begin to think your kingdom is taking on too many projects. For example, if you have 3 <<settlements|Settlement-Rules>> and 5 buildings under construction that you did not advance, you gain 2 <<Unrest|Kingdom-Rules#Unrest>>.

### Step 4: Adjust Unrest[[AdjustUnrest]]

On your first Kingdom turn, your kingdom’s <<Unrest|Kingdom-Rules#Unrest>> score is 0; skip to the next step.

On all other turns, adjust your <<Unrest|Kingdom-Rules#Unrest>> score: Increase it by 1 for every <<settlement|Settlement-Rules>> in your kingdom that’s <<Overcrowded|Settlement-Structures#ResidentialLotsAndOvercrowding>>. If you are at war, increase it by 1. Other ongoing events may have ongoing <<Unrest|Kingdom-Rules#Unrest>> adjustments as well; make them at this time.

After making all adjustments, if your kingdom’s <<Unrest|Kingdom-Rules#Unrest>> is 10 or higher, the kingdom gains 1d10 points to its <<Ruins|Kingdom-Rules#Ruin>>. Distribute these points in any way you wish among the four <<Ruins|Kingdom-Rules#Ruin>>. In addition, attempt a DC 11 flat check. On a failure, one hex of your kingdom is lost; the PCs choose which hex. See <<Losing Hexes|Kingdom-Rules#LosingHexes>> in the <<Kingdom Rules|Kingdom-Rules>> for more information.

[[Anarchy]]If your kingdom’s <<Unrest|Kingdom-Rules#Unrest>> is 20 or higher, the entire nation also falls into anarchy. While in anarchy, you can only attempt <<Quell Unrest|Kingdom-Actions#QuellUnrest>> activities, and the results of all kingdom checks are worsened one degree.

### Step 5: Pay Consumption[[PayConsumption]]

Your <<settlements|Settlement-Rules>> and armies require a certain amount of provisions, supplies, and funding, as well as all the basic necessities of life.

On your first Kingdom turn, your kingdom’s <<Consumption|Settlement-Rules#Consumption>> score is 0; skip to the next step.

On all other turns, calculate your kingdom’s <<Consumption|Settlement-Rules#Consumption>> score. This is the total of your <<settlements’|Settlement-Rules>> <<Consumption|Settlement-Rules#Consumption>> scores plus your armies’ <<Consumption|Settlement-Rules#Consumption>> scores minus the number of <<Farmland|Kingdom-Rules#Farmland>> hexes you have within <<influence|Settlement-Rules#Influence>> range of your <<settlements|Settlement-Rules>>, plus any modifiers from kingdom events.

Spend Food <<Commodities|Kingdom-Rules#Commodities>> equal to your kingdom’s <<Consumption|Settlement-Rules#Consumption>>. If you can’t or choose not to spend this <<Commodity|Kingdom-Rules#Commodities>> cost, you can either spend 5 <<RP|Kingdom-Rules#ResourcePoints>> per point of unpaid <<Consumption|Settlement-Rules#Consumption>> or increase <<Unrest|Kingdom-Rules#Unrest>> by 1d4.

## Commerce Phase[[CommercePhase]]

The Commerce phase is when the kingdom generates revenue or makes <<trade agreements|Kingdom-Rules#TradeAgreements>>.

### Step 1: Collect Taxes[[CollectTaxes]]

You can <<Collect Taxes|Kingdom-Actions#CollectTaxes>> once per Kingdom turn to attempt to bolster your Economy-based checks for the remainder of the Kingdom turn. If you don’t attempt to <<Collect Taxes|Kingdom-Actions#CollectTaxes>>, you can instead attempt a DC 11 flat check; on a success, reduce <<Unrest|Kingdom-Rules#Unrest>> by 1.

### Step 2: Approve Expenses[[ApproveExpenses]]

You can draw upon the kingdom’s funds to enhance the standard of living for its citizens by attempting the <<Improve Lifestyle|Kingdom-Actions#ImproveLifestyle>> activity or you can attempt a withdrawal from the kingdom’s funds using the <<Tap Treasury|Kingdom-Actions#TapTreasury>> activity.

### Step 3: Tap Commodities[[TapCommodities]]

If your kingdom has any stockpiles of <<Commodities|Kingdom-Rules#Commodities>>, you can attempt the <<Trade Commodities|Kingdom-Actions#TradeCommodities>> activity to bolster your <<RP|Kingdom-Rules#ResourcePoints>> for the turn.

### Step 4: Manage Trade Agreements[[ManageTradeAgreements]]

If you’ve established trade agreements, you can use the <<Manage Trade Agreements|Kingdom-Actions#ManageTradeAgreements>> activity.

## Activity Phase[[ActivityPhase]]

The Activity phase is when you make proclamations on expanding your kingdom, declare holidays, and manage your territory and <<settlements|Settlement-Rules>>. It’s during this phase that the bulk of your kingdom’s growth occurs.

Each activity will need to decide which <<settlement|Settlement-Rules>> to use for determining <<item bonuses|Settlement-Rules#MaximumItemBonus>> from <<settlement|Settlement-Rules>> <<structures|Settlement-Structures>>. For each <<item bonus|Settlement-Rules#MaximumItemBonus>>, use the higher of the applicable <<settlement’s|Settlement-Rules>> item bonus or half the <<capital’s|Settlement-Rules#Capital>> <<item bonus|Settlement-Rules#MaximumItemBonus>>. If the applicable <<settlement|Settlement-Rules>> is the <<capital|Settlement-Rules#Capital>>, simply use the full <<capital’s|Settlement-Rules#Capital>> <<item bonus|Settlement-Rules#MaximumItemBonus>>.

### Step 1: Leadership Activities[[LeadershipActivities]]

Choose up to four <<leadership roles|Leadership-Roles>> which have a PC assigned to them. Each of those roles can perform up to 2 <<Leadership activities|Kingdom-Actions#LeadershipPhase>>, or 3 if your kingdom's <<capital|Settlement-Rules#Capital>> has a <<Castle|Settlement-Structures#Castle>>, <<Palace|Settlement-Structures#Palace>>, or <<Town Hall|Settlement-Structures#TownHall>>.

Your party chooses the order you go in when taking <<Leadership activities|Kingdom-Actions#LeadershipPhase>>. Unless an activity states otherwise, a leader cannot attempt the same <<Leadership activity|Kingdom-Actions#LeadershipPhase>> more than once per Kingdom turn.

For the purposes of determining which <<settlement|Settlement-Rules>> to use for determining <<item bonuses|Settlement-Rules#MaximumItemBonus>>, use the <<settlement|Settlement-Rules>> in which the leader spent the most of their time leading during the month.

### Step 2: Region Activities[[RegionActivities]]

The PC leaders may now collectively attempt up to three <<Region activities|Kingdom-Turn#RegionActivities>>. The players decide who rolls any skill checks needed to resolve these activities.

For the purposes of determining which <<settlement|Settlement-Rules>> to use for determining item bonuses, use the <<settlement|Settlement-Rules>> closest to the hex in which the <<Region activity|Kingdom-Turn#RegionActivities>> is located. The players may choose which <<settlement|Settlement-Rules>> to use in the case of a tie.

### Step 3: Civic Activities[[CivicActivities]]

Your party may now attempt one <<Civic activity|Kingdom-Actions#CivicPhase>> for each of the kingdom’s <<settlements|Settlement-Rules>>. You determine the order in which these activities are attempted and who rolls any skill checks.

For the purposes of determining which <<settlement|Settlement-Rules>> to use for determining <<item bonuses|Settlement-Rules#MaximumItemBonus>>, use the <<settlement|Settlement-Rules>> in which the <<Civic activity|Kingdom-Actions#CivicPhase>> is performed.

### Step 4: Army Activities[[ArmyActivities]]

Your party may now attempt one <<Army activity|Kingdom-Actions#ArmyPhase>> for each of the kingdom's armies. You determine the order in which these activities are attempted and who rolls any skill checks.

For the purposes of determining which <<settlement|Settlement-Rules>> to use for determining item bonuses, use the <<settlement|Settlement-Rules>> closest to the hex in which the <<Region activity|Kingdom-Turn#RegionActivities>> is located. The players may choose which <<settlement|Settlement-Rules>> to use in the case of a tie.

## Event Phase[[EventPhase]]

Events affect entire kingdom, single hexes, or a <<settlement|Settlement-Rules>>. Some are harmful, while some are beneficial. Certain events continue for multiple turns, and only come to an end once they’ve been properly handled by the PCs or their kingdom.

Each event will need to decide which <<settlement|Settlement-Rules>> to use for determining <<item bonuses|Settlement-Rules#MaximumItemBonus>> from <<settlement|Settlement-Rules>> <<structures|Settlement-Structures>>. For each <<item bonus|Settlement-Rules#MaximumItemBonus>>, use the higher of the applicable <<settlement’s|Settlement-Rules>> <<item bonus|Settlement-Rules#MaximumItemBonus>> or half the <<capital’s|Settlement-Rules#Capital>> <<item bonus|Settlement-Rules#MaximumItemBonus>>. If the applicable <<settlement|Settlement-Rules>> is the <<capital|Settlement-Rules#Capital>>, simply use the full <<capital’s|Settlement-Rules#Capital>> <<item bonus|Settlement-Rules#MaximumItemBonus>>. Use the <<settlement|Settlement-Rules>> closest to the hex in which the event is located for determining <<item bonuses|Settlement-Rules#MaximumItemBonus>>. If the event targets the entire kingdom, use the <<capital’s|Settlement-Rules#Capital>> <<item bonus|Settlement-Rules#MaximumItemBonus>>.

### Step 1: Check for a Random Event[[CheckForARandomEvent]]

Attempt a DC 16 flat check. On success, a random kingdom event occurs. If no random event occurs, the DC for this check in the next Kingdom turn is reduced by 5. Once an event occurs, the DC resets to 16.

### Step 2: Event Resolution[[EventResolution]]

Random events present opportunities to go forth in exploration or encounter mode to deal with a rampaging monster or the like; these are handled now.

In some chapters of the Kingmaker Adventure Path, specific story events are introduced outside of Kingdom turns; these are resolved when they occur.

## XP Phase[[XPPhase]]

The GM now awards any kingdom XP earned during turn. Full rules the various ways to earn kingdom XP are found on the following pages.

If your kingdom’s XP total is above 1,000, and your kingdom isn’t at its maximum level, increase your kingdom level by 1 and subtract 1,000 from your XP total. See <<Kingdom Advancement for the full rules for leveling up|Kingdom-Advancement>>.

# Gaining Kingdom Experience[[GainingKingdomExperience]]

A kingdom gains experience (XP) by <<claiming hexes|Kingdom-Actions#ClaimHex>>, <<reaching milestones|Kingdom-Turn#MilestoneXPAwards>> that occur during the course of a campaign, enduring random kingdom events, or converting surplus <<RP|Kingdom-Rules#ResourcePoints>> at the end of a Kingdom turn.

## Hex Claim XP Awards[[HexClaimXPAwards]]

Each time a kingdom <<claims a hex|Kingdom-Actions#ClaimHex>>, it earns kingdom XP. If this hex is <<lost|Army-Conditions#Lost>> at a later date, the kingdom does not lose the XP earned from <<claiming|Kingdom-Actions#ClaimHex>> it. Conversely, if the kingdom reclaims a lost hex, it does not gain XP from reclaiming it.

The XP earned depends on the kingdom's new <<size|Kingdom-Rules#KingdomPropertiesTable>> after they earn the hex.

New Size | XP Earned per hex claimed[[HexClaimXPAwardsTable]]
:---: | :---:
1-9 | 100 XP
10-24 | 50 XP
25-49 | 25 XP
50-99 | 10 XP
100+ | 5 XP

## Event XP Awards[[EventXPAwards]]

A kingdom earns 30 XP for experiencing a random event or more for a Story event, regardless of the event’s outcome.

## Surplus RP XP Awards[[SurplusRPXPAwards]]

Any <<RP|Kingdom-Rules#ResourcePoints>> remaining unspent at the end of a Kingdom turn is converted into XP. The amount of XP gained from each surplus <<RP|Kingdom-Rules#ResourcePoints>> depends on the level of your kingdom.

Level | RP to XP Conversion[[SurplusRPXPAwardsTable]]
:---: | :---:
1-5 | 7
6-10 | 5
11-15 | 3
16-20 | 1

## Structure XP Awards[[StructureXPAwards]]

Your kingdom gains experience by building <<structures|Settlement-Structures>> within its <<settlements|Settlement-Rules>>. Each <<structure|Settlement-Structures>> lists XP in its entry. Each turn, gain XP for the highest XP value of any <<structure|Settlement-Structures>> you built that turn.

## Improvement XP Awards[[ImprovementXPAwards]]

Similarly, your kingdom gains XP by building outside the borders of your <<settlements|Settlement-Rules>>. Each turn you do one or more of the following activities, gain the XP for the highest value activity you performed (for example, if you used both <<Build Roads|Kingdom-Actions#BuildRoads>> and <<Irrigation|Kingdom-Actions#Irrigation>>, you would gain 20 XP).

XP | Activity | Improvement[[ImprovementXPAwardsTable]]
:---: | :--- | :---
10 | <<Build Roads|Kingdom-Actions#BuildRoads>> | <<Roads|Kingdom-Actions#BuildRoads>>
10 | <<Establish Farmland|Kingdom-Actions#EstablishFarmland>> | <<Farmland|Kingdom-Rules#Farmland>>
10 | <<Fishing Fleets|Kingdom-Actions#FishingFleet>> | <<Fisheries|Kingdom-Rules#Fishery>>
10 | <<Breed Livestock|Kingdom-Actions#BreedLivestock>> | <<Ranch|Kingdom-Rules#Ranch>>
20 | <<Build Roads|Kingdom-Actions#BuildRoads>> | <<Roads|Kingdom-Actions#BuildRoads>> with a <<bridge|Kingdom-Rules#Bridge>>
20 | <<Establish Worksite|Kingdom-Actions#EstablishWorkSite>> | <<Quarry|Kingdom-Rules#WorkSite>>, <<mine|Kingdom-Rules#WorkSite>>, or <<lumber camp|Kingdom-Rules#WorkSite>>
20 | <<Irrigation|Kingdom-Actions#Irrigation>> | Canal or reservoir
30 | <<Build Fortification|Kingdom-Actions#BuildFortification>> | <<Watchtower|Settlement-Structures#Watchtower>>
30 | <<Build Fortification|Kingdom-Actions#BuildFortification>> | <<Keep|Settlement-Structures#Keep>> (upgraded)
60 | <<Build Fortification|Kingdom-Actions#BuildFortification>> | <<Keep|Settlement-Structures#Keep>>

## Milestone XP Awards[[MilestoneXPAwards]]

As the kingdom grows, the kingdom gains XP the first time it reaches a milestone. These XP awards are given only once, the first time each milestone is attained. The milestones are listed in the following table.

XP Award | Milestone[[MilestoneXPAwardsTable]]
:---: | :---
20 | <<Build Roads|Kingdom-Actions#BuildRoads>> for the first time
20 | <<Celebrate your first successful Holiday|Kingdom-Actions#CelebrateHoliday>>
20 | <<Claim your first new Hex|Kingdom-Actions#ClaimHex>> (2nd hex overall)
20 | Complete your First successful <<Infiltration|Kingdom-Actions#Infiltration>>
20 | <<Create your first Masterpiece|Kingdom-Actions#CreateAMasterpiece>>
20 | <<Establish your first Farmland|Kingdom-Actions#EstablishFarmland>>
20 | <<Establish your first Fishery|Kingdom-Actions#FishingFleet>>
20 | <<Establish your first Lumber Camp|Kingdom-Actions#EstablishWorkSite>>
20 | <<Establish your first Mine|Kingdom-Actions#EstablishWorkSite>>
20 | <<Establish your first Quarry|Kingdom-Actions#EstablishWorkSite>>
20 | <<Establish your first Ranch|Kingdom-Actions#BreedLivestock>>
20 | <<Build Fortififations|Kingdom-Actions#BuildFortification>> for the first time
20 | Successfully use your first <<Creative Solution|Kingdom-Actions#CreativeSolution>>
20 | Successfully use your first <<Supernatural Solution|Kingdom-Actions#SupernaturalSolution>>
40 | Build your first <<Structure|Settlement-Structures>> requiring Expert in a Kingdom Skill
40 | Build your first <<Famous|Kingdom-Rules#FameAndInfamy>> <<Structure|Settlement-Structures>>
40 | Build your first seat of government (<<Town Hall|Settlement-Structures#TownHall>>, <<Castle|Settlement-Structures#Castle>>, or <<Palace|Settlement-Structures#Palace>>)
40 | Claim your first <<Landmark|Kingdom-Rules#Landmark>> hex
40 | Claim your first <<Refuge|Kingdom-Rules#Refuge>> hex
40 | <<Establish your first Village|Kingdom-Actions#EstablishSettlement>>
40 | <<Establish your second Village|Kingdom-Actions#EstablishSettlement>>
40 | Reach Kingdom <<Size|Kingdom-Rules#KingdomPropertiesTable>> 10
40 | <<Recruit your first regular Army|Kingdom-Actions#RecruitArmy>>
40 | Successfully resolve a random Kingdom Event
60 | All eight <<leadership roles|Leadership-Roles>> are assigned
60 | Build your first <<Structure|Settlement-Structures>> requiring Master in a Kingdom Skill
60 | <<Establish diplomatic relations|Kingdom-Rules#DiplomaticRelations>> for the first time
60 | <<Expand a Village into your first Town|Settlement-Rules#Town>>
60 | Reach Kingdom <<size|Kingdom-Rules#KingdomPropertiesTable>> 25
60 | <<Recruit|Kingdom-Actions#RecruitArmy>> your first <<Specialized Army|Armies#SpecializedArmies>>
60 | Win your first <<War Encounter|War-Encounters>>
80 | Achieve your first successful <<Pledge of Fealty|Kingdom-Actions#PledgeOfFealty>>
80 | <<Establish your first Trade Agreement|Kingdom-Actions#EstablishTradeAgreement>>
80 | <<Expand a town into your first City|Settlement-Rules#City>>
80 | Reach Kingdom <<size|Kingdom-Rules#KingdomPropertiesTable>> 50
80 | Spend 100 <<RP|Kingdom-Rules#ResourcePoints>> during a Kingdom turn
120 | <<Expand a city into your first Metropolis|Settlement-Rules#Metropolis>>
120 | Reach Kingdom <<size|Kingdom-Rules#KingdomPropertiesTable>> 100
