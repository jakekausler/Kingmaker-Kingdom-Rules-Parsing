# Basic War Actions[[BasicWarActions]]

Basic war actions are available to all armies.

item(
# Advance [one-action][[Advance]]
-
; Maneuver

Your army attempts to close the distance with a target enemy army it is not <<engaged|Army-Conditions#Engaged>> with by attempting a Maneuver check.

**Critical Success** The enemy army becomes <<engaged|Army-Conditions#Engaged>> with your army, even if it previously had the <<distant|Army-Conditions#Distant>> condition (in which case it loses that condition and becomes <<engaged|Army-Conditions#Engaged>>).

**Success** If the target army is <<distant|Army-Conditions#Distant>>, it loses that condition; otherwise, it becomes <<engaged|Army-Conditions#Engaged>>.

**Failure** Your army's attempt to advance fails.

**Critical Failure** Your army's attempt to advance fails, and it becomes disorganized, becoming <<mired|Army-Conditions#Mired>> 1 until the start of its next turn.
)

item(
# Battle [one-action][[Battle]]
-
; Attack

Your army attacks an enemy army with a Strike against the enemy army's AC. You can do so with a melee Strike only if you are <<engaged|Army-Conditions#Engaged>> with the target army. Otherwise, you must use a ranged Strike. An army can attempt a maximum of 5 ranged Strikes per <<war encounter|War-Encounters>> (unless it has the <<Increased Ammunition|Army-Tactics#IncreasedAmmunition>> tactic). As with any attack, multiple Strikes in a single round suffer a multiple attack penalty. A <<siege engine|Armies#SiegeEngines>> can use the Battle action to attack and damage a <<fortification|War-Encounters#Fortifications>>.

**Critical Success** You deal 2 points of damage to the army.

**Success** You deal 1 point of damage to the army.
)

item(
# Disengage [two-actions][[Disengage]]
-
; Maneuver

Your army attempts to disengage from enemy armies to put some distance between itself and the enemy. Attempt a Maneuver check against each army your army is <<engaged|Army-Conditions#Engaged>> with.

**Critical Success** Your army is no longer <<engaged|Army-Conditions#Engaged>> with the target army. In addition, your army is automatically no longer <<engaged|Army-Conditions#Engaged>> with any armies you haven't yet rolled a Maneuver check against during this war action.

**Success** Your army breaks free and is no longer <<engaged|Army-Conditions#Engaged>> with the target army.

**Failure** Your army remains <<engaged|Army-Conditions#Engaged>> with the target army.

**Critical Failure** Your army remains <<engaged|Army-Conditions#Engaged>> with the target army and, for the remainder of this turn, your army cannot attempt to disengage from any army with which it is still <<engaged|Army-Conditions#Engaged>>.
)

item(
# Guard [one-action][[Guard]]
-
; Maneuver

Your army spends a war action to adopt a defensive pose— raising shields, focusing on parrying attacks, or seeking cover. Attempt a Maneuver check against a target army.

**Critical Success** Your army gains a +2 item bonus to its AC until the start of your next turn; this bonus applies to all attacks against this army, not just from the targeted army.

**Success** Your army gains a +2 item bonus to its AC until the start of your next turn against attacks from the target army.

**Failure** Your army fails to guard against the target army.

**Critical Failure** Your army fails spectacularly to guard against the target army and becomes <<mired|Army-Conditions#Mired>> 1.
)

item(
# Rally [two-actions][[Rally]]
-
; Morale

Your army's leaders attempt to bolster the soldiers' morale and fight back the effects of fear and panic. Attempt a Morale check against a target enemy army of your choice.

**Critical Success** If your army is <<routed|Army-Conditions#Routed>>, it loses the <<routed|Army-Conditions#Routed>> condition. Reduce your army's <<shaken|Army-Conditions#Shaken>> condition by 2.

**Success** Reduce your army's <<shaken|Army-Conditions#Shaken>> condition by 1.

**Critical Failure** Your attempt to rally backfires—increase your army's <<shaken|Army-Conditions#Shaken>> condition by 1.
)

item(
# Retreat [three-actions][[Retreat]]
-
; **Prerequisite** Your Army Is Not <<Engaged|Army-Conditions#Engaged>>.
-
Your army tries to escape from the battlefield. If your army is already <<distant|Army-Conditions#Distant>>, it flees the battlefield, is no longer part of the <<war encounter|War-Encounters>>, and becomes <<routed|Army-Conditions#Routed>>. Otherwise, your army gains the <<distant|Army-Conditions#Distant>> condition.

# Tactical War Actions[[TacticalWarActions]]

The following war actions are available only to armies with the appropriate tactic.
)

item(
# All-Out Assault [two-actions][[AllOutAssault]]
-
; Attack,Cavalry,Infantry

**Requirement** <<Merciless|Army-Tactics#Merciless>>
-
Your army attacks with frightening vigor. Attempt a melee Strike against an enemy army's AC.

**Critical Success** Your army inflicts 3 points of damage to the target army. If your army's next war action this turn is an attack war action against a different target army, you gain a +1 circumstance bonus to the Strike as your fury continues to the new target.

**Success** Your army deals 2 points of damage to the target army.

**Failure** Your army falters, but still deals 1 point of damage to the target army.

**Critical Failure** Your army deals no damage to the target army and becomes <<outflanked|Army-Conditions#Outflanked>> until the start of its next turn.
)

item(
# Battlefield Medicine [three-actions][[BattlefieldMedicine]]
-
; Infantry,Skirmisher

**Requirement** <<Field Triage|Army-Tactics#FieldTriage>>
-
Your army attempts to patch up an allied army's wounds during battle. Once you attempt this war action on an army, that army is temporarily immune to Battlefield Medicine for the remainder of the <<war encounter|War-Encounters>>. Attempt a DC 25 Scouting check to successfully sort the army's wounded and provide swift aid.

**Critical Success** You restore 2 HP to the target army.

**Success** You restore 1 HP to the target army

**Critical Failure** Your attempt to heal the army fails, and that army's <<weary|Army-Conditions#Weary>> condition value increases by 1.
)

item(
# Counterattack [reaction][[Counterattack]]
-
; Infantry,Skirmisher

**Requirement** <<Flexible Tactics|Army-Tactics#FlexibleTactics>>

**Trigger** An army you are <<engaged|Army-Conditions#Engaged>> with attempts a maneuver war action.
-
Your army lashes out at the foe as they attempt to perform a maneuver. Attempt a melee Strike against the triggering army's AC. Counterattack doesn't count toward your multiple attack penalty, and your multiple attack penalty doesn't apply to this Strike.

**Critical Success** You inflict 1 point of damage on the army and increase its <<shaken|Army-Conditions#Shaken>> condition value by 1.

**Success** You inflict 1 point of damage on the army.
)

item(
# Covering Fire [two-actions][[CoveringFire]]
-
; Attack,Cavalry,Infantry,Skirmisher

**Requirement** <<Sharpshooters|Army-Tactics#Sharpshooter>>
-
Your army's ranged fire provides cover and protection for an allied army to maneuver. Attempt a ranged Strike against a target army's AC.

**Critical Success** You inflict 2 points of damage to the target army, and it cannot take reactions triggered by maneuver war actions from any army until the start of your next turn.

**Success** You inflict 1 point of damage to the target army, and it can't take reactions triggered by maneuver war actions from any army until the start of your next turn.

**Failure** Your attack fails to provide covering fire, but you inflict 1 point of damage to the target army.

**Critical Failure** Your attempt fails.
)

item(
# Defensive Stance [two-actions][[DefensiveStance]]
-
; Infantry,Maneuver

**Requirement** <<Defensive Tactics|Army-Tactics#DefensiveTactics>>
-
Your army hunkers down behind its shields, presents pole arms in a wall of blades, or moves into position to protect a target allied army that is <<outflanked|Army-Conditions#Outflanked>>. Attempt a Maneuver check against an enemy army.

**Critical Success** The target allied army is no longer <<outflanked|Army-Conditions#Outflanked>> by any army.

**Success** The target allied army is no longer <<outflanked|Army-Conditions#Outflanked>> by the target army.

**Critical Failure** Your defensive stance fails, and your army is now <<outflanked|Army-Conditions#Outflanked>> by the target enemy army.
)

item(
# Dirty Fighting [one-action][[DirtyFighting]]
-
; Attack,Skirmisher

**Requirement** <<Flexible Tactics|Army-Tactics#FlexibleTactics>>
-
Your army uses trickery, deception, and unfair tactics to attempt a devastating attack against an <<outflanked|Army-Conditions#Outflanked>> army. Attempt a melee Strike or a ranged Strike against the AC of a target <<outflanked|Army-Conditions#Outflanked>> army that is not <<distant|Army-Conditions#Distant>>.

**Critical Success** The target army becomes <<weary|Army-Conditions#Weary>> 2 until the start of your next turn.

**Success** The target army becomes <<weary|Army-Conditions#Weary>> 1 until the start of your next turn.

**Critical Failure** Your attack deals no damage to the target army, which is emboldened by your failed attempt at dirty fighting. This reduces the target army's <<weary|Army-Conditions#Weary>> value by 1.
)

item(
# False Retreat [reaction][[FalseRetreat]]
-
; Infantry,Morale,Skirmisher

**Requirement** <<Flexible Tactics|Army-Tactics#FlexibleTactics>>

**Trigger** Your army succeeds at a morale check.
-
Your army feigns defeat to trick an enemy army. Attempt a Morale check against a target army.

**Critical Success** The target army is caught off guard by your army's deception. It becomes <<outflanked|Army-Conditions#Outflanked>> and is unable to take reactions until the start of your next turn.

**Success** The target army is caught off guard by your army's deception and is <<outflanked|Army-Conditions#Outflanked>> until the start of its next turn.

**Critical Failure** The enemy anticipated your tactic and moves to take advantage of the situation. Your army becomes <<outflanked|Army-Conditions#Outflanked>> until the start of your next turn.
)

item(
# Feint [one-action][[Feint]]
-
; Attack,Infantry,Skirmisher

**Requirement** <<Flexible Tactics|Army-Tactics#FlexibleTactics>>
-
Your army launches a probing attack meant to trick the enemy into thinking you are attacking from one quarter while your real thrust comes elsewhere.

**Critical Success** The target army's defenses are thrown off; it is <<outflanked|Army-Conditions#Outflanked>> until the end of your turn.

**Success** The target army is fooled, but only momentarily. It is <<outflanked|Army-Conditions#Outflanked>> against the next melee Strike your army attempts against it before the end of your current turn.

**Critical Failure** The enemy anticipates your feint and presses the advantage. You are <<outflanked|Army-Conditions#Outflanked>> by the target army until the end of your next turn.
)

item(
# Outflank [two-actions][[Outflank]]
-
; Cavalry,Maneuver,Skirmisher

**Requirement** <<Reckless Flankers|Army-Tactics#RecklessFlankers>>, you aren't <<engaged|Army-Conditions#Engaged>>
-
You send your army around an enemy's flank to get a better attacking position and to push your enemy into disorder. Attempt a Maneuver check against the target army.

**Critical Success** The target army becomes <<outflanked|Army-Conditions#Outflanked>> until the start of your next turn. You can choose to become <<engaged|Army-Conditions#Engaged>> with that army or not.

**Success** The target army is <<outflanked|Army-Conditions#Outflanked>> until the start of your next turn. You are now <<engaged|Army-Conditions#Engaged>> with that army.

**Critical Failure** You underestimate the target army's position, and the blunder causes your army to become <<outflanked|Army-Conditions#Outflanked>> until the start of your next turn.
)

item(
# Overwhelming Bombardment [two-actions][[OverwhelmingBombardment]]
-
; Attack,Siege

**Requirement** <<Explosive Shot|Army-Tactics#ExplosiveShot>>
-
Your <<siege engines|Armies#SiegeEngines>> focus all their fire on a <<fortification|War-Encounters#Fortifications>>. This war action counts as using two ranged Strikes for the purposes of depleting an army's shots. Attempt a ranged Strike against the target <<fortification|War-Encounters#Fortifications>>'s AC.

**Critical Success** You deal 2 points of damage to the <<fortification|War-Encounters#Fortifications>>. You also deal 1 point of damage to up to two armies of your choice that are within the <<fortification|War-Encounters#Fortifications>>.

**Success** You deal 1 point of damage to the <<fortification|War-Encounters#Fortifications>>, and an additional 1 point of damage either to the <<fortification|War-Encounters#Fortifications>> or to an army within the <<fortification|War-Encounters#Fortifications>> (your choice of which).

**Failure** You deal 1 damage to the <<fortification|War-Encounters#Fortifications>>.

**Critical Failure** You deal no damage, and your army becomes <<outflanked|Army-Conditions#Outflanked>> until the start of its next turn.
)

item(
# Taunt [one-action][[Taunt]]
-
; Morale

**Requirement** <<Focused Devotion|Army-Tactics#FocusedDevotion>>
-
Your army attempts to frighten and cow an enemy army. Attempt a Morale check against the target army.

**Critical Success** The target army becomes <<shaken|Army-Conditions#Shaken>> 2 until the start of your next turn.

**Success** The target army becomes <<shaken|Army-Conditions#Shaken>> 1 until the start of your next turn.

**Critical Failure** Your failed attempt bolsters the enemy's spirits. This reduces the target army's <<shaken|Army-Conditions#Shaken>> value by 1.
)