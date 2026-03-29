// English translations overlay for VtM V5 discipline/power data
// Applied over the Spanish base data when language is set to English

type PowerTranslation = {
  name: string
  cost: string
  dicePool: string
  duration: string
  description: string
  amalgama?: string
}

type DisciplineTranslation = {
  name: string
  description: string
  tipo: string
  amenaza: string
  resonancia: string
  clanes?: string[]
  powers: Record<string, PowerTranslation>
}

export const EN: Record<string, DisciplineTranslation> = {

  // ── ANIMALISM ────────────────────────────────────────────────────────────────
  animalismo: {
    name: 'Animalism',
    description: 'A Discipline that allows the vampire to connect with animals and with the inner Beast. Masters of Animalism become one with their Beasts and can control animals, suppress the Beast of other vampires, and more.',
    tipo: 'Mental',
    amenaza: 'Low to medium. Although talking to animals may seem eccentric, only the more violent applications of the Discipline provoke more than a few raised eyebrows.',
    resonancia: 'Animal blood, preferably wild.',
    powers: {
      'sentir-a-la-bestia': {
        name: 'Sense the Beast',
        cost: 'None',
        dicePool: 'Resolve + Animalism vs. Composure + Subterfuge',
        duration: 'Passive',
        description: 'Detects the predatory nature and hostility level of any nearby creature. Identifies vampires, werewolves, and other supernaturals. A critical win reveals exact type and current Hunger level.',
      },
      'vinculo-con-famulus': {
        name: 'Bond Famulus',
        cost: 'The animal must be fed the user\'s Blood on three separate nights, each requiring a Rouse Check from the user.',
        dicePool: 'Charisma + Animal Ken',
        duration: 'Only death frees a famulus once Bonded.',
        description: 'Creates a permanent mental bond with an animal, turning it into a familiar (famulus). Only one may be held. The famulus does not age while receiving Blood and can be used at no cost with Feral Whispers and Subsume the Spirit.',
      },
      'susurros-salvajes': {
        name: 'Feral Whispers',
        cost: 'One Rouse Check per animal type chosen for the scene. No cost if used on the famulus.',
        dicePool: 'Manipulation + Animalism, Charisma + Animalism',
        duration: 'One scene',
        description: 'Two-way communication with animals and summoning of the same. Difficulty varies with the complexity of the order or the scarcity of the animal summoned.',
      },
      'colmena-no-muerta': {
        name: 'Unliving Hive',
        cost: 'No additional cost',
        dicePool: 'N/A',
        duration: 'Passive',
        description: '(Amalgam: Obfuscation 2) Extends all Animalism powers to insect swarms. Can be bonded as a famulus and nest inside the vampire\'s own body.',
        amalgama: 'Obfuscation 2',
      },
      'reprimir-a-la-bestia': {
        name: 'Quell the Beast',
        cost: 'One Rouse Check',
        dicePool: 'Charisma + Animalism vs. Stamina + Resolve',
        duration: 'One scene or as many turns as the margin of victory +1',
        description: 'Suppresses the inner Beast of another creature, stopping it mid-Frenzy or calming its savage nature. Can also be used on oneself to calm one\'s own Frenzy.',
      },
      'suculencia-animal': {
        name: 'Animal Succulence',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'Allows sating Hunger by feeding on animals, normally ineffective. The amount sated depends on Blood Potency; the higher the level, the more Hunger recovered per animal.',
      },
      'comunion-de-espiritus': {
        name: 'Subsume the Spirit',
        cost: 'One Rouse Check. None if used on the famulus.',
        dicePool: 'Manipulation + Animalism',
        duration: 'One scene / indefinitely (on a critical win)',
        description: 'Transfers the vampire\'s consciousness into an animal\'s body, controlling it completely and using all its senses. The vampiric body remains unconscious during the possession.',
      },
      'control-animal': {
        name: 'Animal Dominion',
        cost: 'Two Rouse Checks',
        dicePool: 'Charisma + Animalism',
        duration: 'A single scene or until the order is fulfilled, whichever is shorter',
        description: 'Dominates entire herds or groups of animals simultaneously as if they were a single entity. On a critical win, control is absolute with no additional roll needed.',
      },
      'expulsar-a-la-bestia': {
        name: 'Drawing Out the Beast',
        cost: 'One Rouse Check',
        dicePool: 'Wits + Animalism vs. Composure + Resolve',
        duration: 'The duration of the Frenzy',
        description: 'At the moment of a Frenzy, projects one\'s own Beast onto a nearby target, immediately triggering a Frenzy in them. The vampire is temporarily free of their Beast.',
      },
    },
  },

  // ── AUSPEX ───────────────────────────────────────────────────────────────────
  auspex: {
    name: 'Auspex',
    description: 'Among the greatest gifts and worst curses of vampires, Auspex allows Kindred to discern truth from lies, probe the minds of those around them, and perceive reality at a level different from other beings.',
    tipo: 'Mental',
    amenaza: 'Low. Auspex never manifests visibly to the naked eye or causes effects that cannot be rationalized.',
    resonancia: 'Phlegmatic. Artists (especially photographers) and visionaries, certain schizophrenics, users of psychoactive substances, detectives.',
    powers: {
      'sentidos-agudizados': {
        name: 'Heightened Senses',
        cost: 'None',
        dicePool: 'Wits + Resolve',
        duration: 'Until deactivated',
        description: 'Vision in total darkness, superhuman hearing and smell. Adds Auspex dots as extra dice to all Perception rolls.',
      },
      'sentir-lo-invisible': {
        name: 'Sense the Unseen',
        cost: 'None',
        dicePool: 'Wits + Auspex or Resolve + Auspex',
        duration: 'Passive',
        description: 'Detects presences hidden by Obfuscation, spirits, and the spirit world. A direct countermeasure against all levels of Obfuscation.',
      },
      premonicion: {
        name: 'Premonition',
        cost: 'None or one Rouse Check',
        dicePool: 'Resolve + Auspex',
        duration: 'Passive',
        description: 'Receives flashes of intuition, hunches, or visions about immediate dangers. The Storyteller may grant passive clues without the player requesting them.',
      },
      'compartir-los-sentidos': {
        name: 'Shared Senses',
        cost: 'One Rouse Check',
        dicePool: 'Resolve + Auspex',
        duration: 'One scene',
        description: 'Accesses another person\'s senses (sight, hearing, touch) at a distance without them noticing. The target notices nothing unusual.',
      },
      'escudriñar-el-alma': {
        name: 'Scry the Soul',
        cost: 'One Rouse Check',
        dicePool: 'Intelligence + Auspex vs. Composure + Subterfuge',
        duration: 'One turn or at the Storyteller\'s discretion',
        description: 'Perceives a person\'s aura, revealing their current emotions, character traits, supernatural status, and whether they are lying.',
      },
      'toque-del-espiritu': {
        name: 'Spirit\'s Touch',
        cost: 'One Rouse Check',
        dicePool: 'Intelligence + Auspex',
        duration: 'One turn',
        description: 'By touching an object or place, relives the emotions and impressions left by those who used it (psychometry). The more intense the original emotion, the clearer the vision.',
      },
      clarividencia: {
        name: 'Clairvoyance',
        cost: 'One Rouse Check',
        dicePool: 'Intelligence + Auspex',
        duration: 'A few minutes to gather information, up to one night for surveillance',
        description: 'Projects the senses to any known location or one that can be visualized, observing remotely without being physically present.',
      },
      posesion: {
        name: 'Possession',
        cost: 'Two Rouse Checks',
        dicePool: 'Resolve + Auspex vs. Resolve + Intelligence',
        duration: 'Until ended, voluntarily or otherwise',
        description: '(Amalgam: Dominate 3) Takes full control of a mortal\'s body, displacing their will. The vampire directs the mortal like a puppet while their own body remains inert.',
        amalgama: 'Dominate 3',
      },
      telepatia: {
        name: 'Telepathy',
        cost: 'One Rouse Check (plus 1 Willpower with unwilling vampires)',
        dicePool: 'Resolve + Auspex vs. Wits + Subterfuge',
        duration: 'Approximately one minute per Rouse Check. Extended to a full scene with willing subjects.',
        description: 'Reads minds and projects one\'s own thoughts. Can extract specific memories, communicate without words, or detect lies directly from the source.',
      },
    },
  },

  // ── CELERITY ─────────────────────────────────────────────────────────────────
  celeridad: {
    name: 'Celerity',
    description: 'Celerity allows vampires to move faster than any natural creature. It does more than grant supernatural speed: vampires who employ it truly seem to think almost as fast as they act.',
    tipo: 'Physical',
    amenaza: 'Medium to high. Most Celerity powers are clearly inhuman, and the only thing saving it is that they are very hard to capture on film or photograph.',
    resonancia: 'Choleric. Absolute fear and terror, runners, athletes, users of alkaloids and amphetamines, regular players of first-person shooters and other fast-action games.',
    powers: {
      'gracia-felina': {
        name: 'Cat\'s Grace',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'Superhuman balance and elegance. Never trips or falls involuntarily; can move over unstable, narrow, or slippery surfaces without difficulty.',
      },
      'reflejos-rapidos': {
        name: 'Rapid Reflexes',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'Reacts instantaneously to any danger. Adds Celerity to Initiative and allows defending against surprise attacks that would normally be unavoidable.',
      },
      presteza: {
        name: 'Fleetness',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'Adds the Celerity rating as extra dice to all physical action pools for a full scene.',
      },
      pestañeo: {
        name: 'Blink',
        cost: 'One Rouse Check',
        dicePool: 'Dexterity + Athletics or as needed',
        duration: 'One turn',
        description: 'Moves in a straight line at invisible speed, repositioning in combat or escaping before anyone can react. Witnesses only see the start and end points.',
      },
      recorrido: {
        name: 'Traversal',
        cost: 'One Rouse Check',
        dicePool: 'Dexterity + Athletics',
        duration: 'One turn',
        description: 'Runs across any surface — vertical, ceilings, liquid surfaces — at astonishing speed. Movement speed is multiplied drastically.',
      },
      'punteria-certera': {
        name: 'Unerring Aim',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One attack',
        description: '(Amalgam: Auspex 2) Time slows perceptibly, allowing shots or throws of impossible precision even against moving targets.',
        amalgama: 'Auspex 2',
      },
      'sorbo-de-elegancia': {
        name: 'Draught of Elegance',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One night; for vampires, until next feeding or Hunger 5',
        description: 'The Blood is saturated with Celerity. Whoever drinks from them temporarily gains the benefits of Cat\'s Grace and Rapid Reflexes.',
      },
      'golpe-relampago': {
        name: 'Lightning Strike',
        cost: 'One Rouse Check',
        dicePool: 'Normal combat pool (Dexterity + Athletics or Brawl)',
        duration: 'One attack',
        description: 'Strikes an enemy at invisible speed before they can react. The target cannot spend defense dice; they receive the hit as if caught off-guard.',
      },
      'segundo-quebrado': {
        name: 'Split Second',
        cost: 'One Rouse Check',
        dicePool: 'Normal action pool according to activity',
        duration: 'Approximately one action, at Storyteller\'s discretion',
        description: 'Can act at the same instant they are attacked, interrupting the attacker\'s action before it completes. Can use this action to attack, escape, or perform any quick action.',
      },
    },
  },

  // ── DOMINATE ─────────────────────────────────────────────────────────────────
  dominacion: {
    name: 'Dominate',
    description: 'Dominate is a Discipline of mental control, primarily used to bend mortals to the vampire\'s will. At higher levels it can affect even other Kindred. Dominate requires direct eye contact to function.',
    tipo: 'Mental',
    amenaza: 'Low to medium. Dominate\'s effects are subtle by design; its victims rarely know they\'ve been used.',
    resonancia: 'Melancholic. Accountants, mathematicians, writers, obsessives, introverted types.',
    powers: {
      compeler: {
        name: 'Compel',
        cost: 'None',
        dicePool: 'Charisma + Dominate vs. Intelligence + Resolve',
        duration: 'No more than one scene',
        description: 'Imposes a simple, irresistible one-word command through eye contact: one phrase, one action. The victim executes it immediately even if against their interests.',
      },
      'nublar-la-memoria': {
        name: 'Cloud Memory',
        cost: 'None',
        dicePool: 'Charisma + Dominate vs. Wits + Resolve',
        duration: 'Indefinite',
        description: 'Erases the last few minutes of the victim\'s memory with a single word (Forget!). The victim does not remember the vampire or what occurred.',
      },
      dementacion: {
        name: 'Dementation',
        cost: 'One Rouse Check per scene',
        dicePool: 'Manipulation + Dominate vs. Composure + Intelligence',
        duration: 'One scene',
        description: '(Amalgam: Obfuscation 2) Plants seeds of madness through casual conversation. The victim develops irrationalities and phobias that persist long afterward.',
        amalgama: 'Obfuscation 2',
      },
      mesmerismo: {
        name: 'Mesmerize',
        cost: 'One Rouse Check',
        dicePool: 'Manipulation + Dominate vs. Intelligence + Resolve',
        duration: 'Until the order is executed or the scene ends, whichever comes first',
        description: 'Hypnotizes the victim by implanting complex commands they will execute as if their own. Requires prolonged eye contact and relative silence.',
      },
      'directriz-sumergida': {
        name: 'Submerged Directive',
        cost: 'No additional cost',
        dicePool: 'As Mesmerize',
        duration: 'Passive (never expires)',
        description: 'Extends Mesmerize to implant orders with conditional triggers: the command lies dormant until a specific event set by the vampire occurs.',
      },
      'mente-olvidadiza': {
        name: 'Forgetful Mind',
        cost: 'One Rouse Check',
        dicePool: 'Manipulation + Dominate vs. Intelligence + Resolve',
        duration: 'Indefinite',
        description: 'Rewrites or erases entire fragments of the victim\'s memory, replacing them with detailed and coherent false memories.',
      },
      racionalizar: {
        name: 'Rationalize',
        cost: 'No additional cost',
        dicePool: 'N/A',
        duration: 'Indefinite',
        description: 'Victims of Dominate firmly believe they acted of their own free will. They cannot be convinced otherwise by mundane means.',
      },
      'decreto-terminal': {
        name: 'Terminal Decree',
        cost: 'No additional cost for Hunger, but the Humanity cost can be severe',
        dicePool: 'As the Dominate power used',
        duration: 'Passive',
        description: 'Extends any Dominate power to include commands that lead to the victim\'s death. No dice penalty for survival instinct, but violates Humanity severely.',
      },
      'manipulacion-en-masa': {
        name: 'Mass Manipulation',
        cost: 'One Rouse Check plus the cost of the amplified power',
        dicePool: 'As the Dominate power used, with a dice penalty equal to the number of extra targets',
        duration: 'As the amplified power',
        description: 'Extends any Dominate power to entire groups of mortals simultaneously. A dice penalty applies for each additional target beyond the first.',
      },
    },
  },

  // ── FORTITUDE ────────────────────────────────────────────────────────────────
  fortaleza: {
    name: 'Fortitude',
    description: 'Fortitude is the Discipline of physical and mental resilience. It allows vampires to shrug off blows that would destroy others and resist mental assault.',
    tipo: 'Physical',
    amenaza: 'Low to medium. Fortitude\'s passive effects are invisible and the active ones easy to rationalize as adrenaline or toughness.',
    resonancia: 'Phlegmatic. Stubborn or stoic individuals, soldiers, abuse survivors, the deeply principled.',
    powers: {
      'mente-imperturbable': {
        name: 'Unswayable Mind',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'Mystical resistance to mundane mental manipulation: coercion, drugs, torture, interrogation. Adds Fortitude to all resistance rolls against such effects.',
      },
      resiliencia: {
        name: 'Resilience',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'Adds the Fortitude rating directly as extra Health boxes. Passive and permanent; immediately increases the vampire\'s total resilience.',
      },
      'bestias-resistentes': {
        name: 'Enduring Beasts',
        cost: 'None (for famulus); one Rouse Check (for other animals)',
        dicePool: 'Stamina + Animalism (for animals other than famulus)',
        duration: 'One scene',
        description: '(Amalgam: Animalism 1) Shares part of the vampire\'s supernatural toughness with the animals under their control, increasing their resistance to damage.',
        amalgama: 'Animalism 1',
      },
      dureza: {
        name: 'Toughness',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'When spending Blood after receiving aggravated damage, automatically converts 1 level of aggravated to superficial per Fortitude dot. No roll; activation only.',
      },
      'desafiar-prohibicion': {
        name: 'Defy Bane',
        cost: 'One Rouse Check',
        dicePool: 'Wits + Survival (to activate reflexively)',
        duration: 'One scene or until it expires, whichever comes first',
        description: 'Temporary resistance to fire, sunlight, and other clan-specific weaknesses. Duration and intensity depend on the margin obtained.',
      },
      'fortificar-la-fachada-interior': {
        name: 'Fortify the Inner Façade',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'Protects the mind against Dominate, Auspex, and other mental powers. Adds Fortitude to resistance rolls against powers that affect the mind.',
      },
      'sorbo-de-aguante': {
        name: 'Draught of Endurance',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One night; for vampires, until next feeding or Hunger 5',
        description: 'The Blood is saturated with Fortitude. Whoever drinks from them temporarily gains the benefits of Unswayable Mind and Resilience.',
      },
      'arrojo-por-el-dolor': {
        name: 'Prowess from Pain',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'Each point of aggravated damage received adds an extra die to all the vampire\'s action pools. Pain makes them more lethal.',
      },
      'carne-de-marmol': {
        name: 'Flesh of Marble',
        cost: 'Two Rouse Checks',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'The skin hardens like marble. Grants an Armor rating equal to the Fortitude level that is subtracted from each physical hit received. Lasts a full scene.',
      },
    },
  },

  // ── OBFUSCATION ──────────────────────────────────────────────────────────────
  ofuscacion: {
    name: 'Obfuscation',
    description: 'Obfuscation is the Discipline of concealment and misdirection, allowing vampires to hide themselves, others, or objects from perception.',
    tipo: 'Mental',
    amenaza: 'Low to medium. When used subtly, Obfuscation is essentially undetectable by mundane means.',
    resonancia: 'Phlegmatic. Shy, introverted, or easily overlooked people; spies, private investigators, and the deeply secretive.',
    powers: {
      'capa-de-sombras': {
        name: 'Cloak of Shadows',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'When still and with some cover, the vampire blends into the environment. Practically invisible to anyone who does not know exactly where to look.',
      },
      'silencio-de-la-muerte': {
        name: 'Silence of Death',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'Cancels all sound generated by the user: footsteps, clothing, breathing. Moves in supernatural absolute silence.',
      },
      'paso-invisible': {
        name: 'Unseen Passage',
        cost: 'One Rouse Check',
        dicePool: 'Wits + Stealth (to remain hidden while moving)',
        duration: 'One scene or until detected',
        description: 'The vampire can move freely while remaining completely invisible. Any violent or dramatic action automatically breaks the effect.',
      },
      'fantasma-en-la-maquina': {
        name: 'Ghost in the Machine',
        cost: 'No additional cost',
        dicePool: 'N/A',
        duration: 'As the power used',
        description: 'Transmits the invisibility to cameras and electronic devices. The vampire does not appear in recordings, live feeds, or security systems.',
      },
      'mascara-de-las-mil-caras': {
        name: 'Mask of a Thousand Faces',
        cost: 'One Rouse Check',
        dicePool: 'Manipulation + Subterfuge (to pass unnoticed actively)',
        duration: 'One scene',
        description: 'Instead of disappearing, adopts the appearance of a generic, unrecognizable passer-by. Nobody remembers their face or can describe it; appears as a different person to each observer.',
      },
      desvanecerse: {
        name: 'Vanish',
        cost: 'As the enhanced power',
        dicePool: 'Wits + Obfuscation vs. Wits + Awareness',
        duration: 'As the enhanced power',
        description: '(Prerequisite: Cloak of Shadows) Activates Cloak of Shadows or Unseen Passage even while under direct observation, without needing to move or take cover first.',
      },
      ocultar: {
        name: 'Conceal',
        cost: 'One Rouse Check',
        dicePool: 'Intelligence + Obfuscation',
        duration: 'One night, with one additional night per point of margin on the win',
        description: '(Amalgam: Auspex 3) Extends Obfuscation to inanimate objects: can hide doors, vehicles, corpses, or other objects up to a certain size.',
        amalgama: 'Auspex 3',
      },
      'disfraz-del-impostor': {
        name: 'Impostor\'s Guise',
        cost: 'One Rouse Check',
        dicePool: 'Wits + Obfuscation, Manipulation + Performance',
        duration: 'One scene',
        description: '(Prerequisite: Mask of a Thousand Faces) Adopts the exact appearance of a specific known person, including voice and mannerisms.',
      },
      'encubrimiento-de-la-concurrencia': {
        name: 'Cloak the Gathering',
        cost: 'One Rouse Check plus the cost of the extended power',
        dicePool: 'N/A',
        duration: 'As the extended power',
        description: 'Extends their mantle of Obfuscation to nearby companions, hiding everyone with them as long as they remain close.',
      },
    },
  },

  // ── POTENCE ──────────────────────────────────────────────────────────────────
  potencia: {
    name: 'Potence',
    description: 'Potence is the Discipline of physical power, granting supernatural strength that allows vampires to perform feats no mortal could match.',
    tipo: 'Physical',
    amenaza: 'High. Potence\'s effects are often obvious and difficult to explain away.',
    resonancia: 'Choleric. Angry, violent, or passionate individuals; athletes, soldiers, abusers.',
    powers: {
      'cuerpo-letal': {
        name: 'Lethal Body',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'Unarmed blows cause aggravated damage to mortals, tearing flesh and breaking bones. Against vampires it remains superficial damage.',
      },
      'salto-vertiginoso': {
        name: 'Soaring Leap',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'Leaps heights and distances impossible for any human, proportional to their Potence level. Can be used to scale buildings in a single bound.',
      },
      bravura: {
        name: 'Prowess',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'Saturates the body with muscular Vitae. Adds the Potence rating as extra dice to all physical action pools (melee, athletics, strength) for a scene.',
      },
      'agarre-asombroso': {
        name: 'Uncanny Grip',
        cost: 'One Rouse Check',
        dicePool: 'Strength + Athletics (climbing); Strength + Brawl (immobilize, vs. Strength + Athletics)',
        duration: 'One scene',
        description: 'Drives fingers and feet into any hard surface, allowing climbing of completely smooth walls. In combat can immobilize a target with supernatural Strength.',
      },
      'alimentacion-brutal': {
        name: 'Brutal Feed',
        cost: 'None',
        dicePool: 'Strength + Potence vs. Dexterity + Athletics of the target',
        duration: 'One feeding',
        description: 'Can feed from a distance of several meters, tearing the blood from the victim\'s body without physical contact. The victim suffers damage. Known as the "Savage Kiss."',
      },
      'chispa-de-ira': {
        name: 'Spark of Rage',
        cost: 'One Rouse Check',
        dicePool: 'Manipulation + Potence',
        duration: 'One scene',
        description: '(Amalgam: Presence 3) Transmits supernatural rage to nearby creatures, potentially triggering Frenzies in other vampires or brutality in mortals.',
        amalgama: 'Presence 3',
      },
      'sorbo-de-poderio': {
        name: 'Draught of Might',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One night; for vampires, until next feeding or Hunger 5',
        description: 'The Blood is saturated with Potence. Whoever drinks from them temporarily gains supernatural strength and the benefits of Lethal Body.',
      },
      'puño-de-cain': {
        name: 'Fist of Caine',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'Unarmed blows cause aggravated damage even to vampires, potentially dismembering. The damage is devastating against any type of creature.',
      },
      'temblor-de-tierra': {
        name: 'Earthshock',
        cost: 'Two Rouse Checks',
        dicePool: 'Strength + Athletics vs. Dexterity + Athletics of each target',
        duration: 'One use',
        description: 'Strikes the ground generating a shockwave that knocks down and stuns all opponents within a nearby radius. Those affected fall to the ground and lose their next action.',
      },
    },
  },

  // ── PRESENCE ─────────────────────────────────────────────────────────────────
  presencia: {
    name: 'Presence',
    description: 'Presence is a Discipline that expresses the vampire\'s bipolar existence. It serves to attract victims or scatter them in terror. It allows crowd control, emotional manipulation, and forced devotion. Presence affects the emotions of those subjected to it, not their minds.',
    tipo: 'Mental',
    amenaza: 'Low to medium. Being a subtle power, people rarely realize they have been affected by Presence.',
    resonancia: 'Sanguine. The beautiful and lustful, those completely infatuated with the vampire, models, actors and movie stars, convincing public speakers, YouTube stars and Instagram influencers.',
    powers: {
      atemorizar: {
        name: 'Daunt',
        cost: 'None',
        dicePool: 'Charisma + Presence vs. Composure + Resolve',
        duration: 'One scene or until ended intentionally',
        description: 'Emanates a threatening aura of supernatural predator. Those who fail the roll feel instinctive panic: they flee, submit, or freeze depending on the margin.',
      },
      fascinacion: {
        name: 'Awe',
        cost: 'None',
        dicePool: 'Manipulation + Presence vs. Composure + Intelligence',
        duration: 'One scene or until ended intentionally',
        description: 'Every nearby person feels an inexplicable and irresistible attraction to the vampire. Adds Presence as extra dice to social rolls.',
      },
      'beso-persistente': {
        name: 'Lingering Kiss',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Until successfully resisted',
        description: 'Mortals fed upon become addicted to the vampire\'s Kiss, actively seeking to repeat the experience and becoming easily manageable.',
      },
      encantamiento: {
        name: 'Entrancement',
        cost: 'One Rouse Check',
        dicePool: 'Charisma + Presence vs. Composure + Wits',
        duration: 'One hour plus one more per point of margin',
        description: 'Focuses the supernatural charm on a single person, inducing an intense fascination similar to deep infatuation.',
      },
      'mirada-aterradora': {
        name: 'Dread Gaze',
        cost: 'One Rouse Check',
        dicePool: 'Charisma + Presence vs. Composure + Resolve',
        duration: 'One turn',
        description: 'With a single gaze, instills absolute terror in a target. The subject flees, freezes, or submits completely depending on the margin obtained.',
      },
      invocacion: {
        name: 'Summon',
        cost: 'One Rouse Check',
        dicePool: 'Manipulation + Presence vs. Composure + Intelligence',
        duration: 'One night',
        description: 'Mentally summons someone on whom Presence has already been used. The target feels an irresistible need to come, without necessarily knowing why.',
      },
      'voz-irresistible': {
        name: 'Irresistible Voice',
        cost: 'No additional cost',
        dicePool: 'N/A',
        duration: 'Passive',
        description: '(Amalgam: Dominate 1) Dominate commands work with voice alone, without needing direct eye contact.',
        amalgama: 'Dominate 1',
      },
      'magnetismo-de-estrella': {
        name: 'Star Magnetism',
        cost: 'One additional Rouse Check',
        dicePool: 'N/A',
        duration: 'As the power used',
        description: 'The effects of Presence extend to whoever sees them in live broadcasts or hears them on the radio. Does not require physical presence.',
      },
      majestad: {
        name: 'Majesty',
        cost: 'Two Rouse Checks',
        dicePool: 'Charisma + Presence vs. Composure + Resolve',
        duration: 'One scene',
        description: 'Their presence becomes so overwhelming that no one can attack them, contradict them, or ignore them without passing a very high difficulty test.',
      },
    },
  },

  // ── PROTEAN ──────────────────────────────────────────────────────────────────
  protean: {
    name: 'Protean',
    description: 'Protean is the Discipline of shapeshifting and physical transformation. It allows vampires to take on animal forms, meld with the earth, and transform their bodies in various ways.',
    tipo: 'Physical',
    amenaza: 'High. Physical transformation is difficult to explain away under any circumstances.',
    resonancia: 'Varies. Gangrel and other feral types; those deeply connected to nature.',
    powers: {
      'ojos-de-la-bestia': {
        name: 'Eyes of the Beast',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'As long as desired',
        description: 'Generates a supernatural red glow in the eyes that allows vision in absolute darkness with perfect clarity. Visible to others in the dark.',
      },
      'peso-de-la-pluma': {
        name: 'Weight of the Feather',
        cost: 'None',
        dicePool: 'Wits + Survival',
        duration: 'As long as desired',
        description: 'Reduces effective mass. Falls without injury from any height, does not trigger pressure sensors, and can climb surfaces without leaving a mark.',
      },
      'armas-salvajes': {
        name: 'Feral Weapons',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'Extends claws and fangs to monstrous proportions. They cause aggravated damage to mortals and vampires. The claws can also scale surfaces.',
      },
      'cambiar-de-forma': {
        name: 'Shapechange',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene, unless one wishes to end it sooner',
        description: 'Adopts the form of a similarly sized animal (wolf, panther, large reptiles), acquiring all their natural physical capabilities.',
      },
      'fusion-con-la-tierra': {
        name: 'Earth Meld',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One day or more, or until disturbed',
        description: 'Sinks into the earth or any natural surface to sleep the day safely and undetectably. Only dawn or serious danger awakens them.',
      },
      metamorfosis: {
        name: 'Metamorphosis',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene, unless one wishes to end it sooner',
        description: '(Prerequisite: Shapechange) Can assume additional animal forms and combine traits from different forms into a single one.',
      },
      'corazon-liberado': {
        name: 'The Unfettered Heart',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'The heart detaches and is stored outside the body. While separated, the vampire is immune to being staked through the chest.',
      },
      'forma-de-niebla': {
        name: 'Mist Form',
        cost: 'One to three Rouse Checks',
        dicePool: 'N/A',
        duration: 'One scene, unless one wishes to end it sooner',
        description: 'Transforms into a cloud of mist: completely untouchable, intangible, and unable to suffer physical damage. Cannot attack in this state.',
      },
    },
  },

  // ── BLOOD SORCERY ────────────────────────────────────────────────────────────
  'hechiceria-de-sangre': {
    name: 'Blood Sorcery',
    description: 'Blood Sorcery is a Discipline of mystical blood manipulation. Tremere and Banu Haqim practitioners can sense, alter, and weaponize Vitae in ways that defy natural explanation.',
    tipo: 'Sorcery',
    amenaza: 'High. The effects of Blood Sorcery are visible, unnatural, and undeniably supernatural.',
    resonancia: 'Varies. Occultists, scholars, and those with strong spiritual connections.',
    powers: {
      'sabor-de-la-sangre': {
        name: 'A Taste for Blood',
        cost: 'None',
        dicePool: 'Resolve + Blood Sorcery',
        duration: 'N/A',
        description: 'By tasting a drop of blood, identifies the owner: clan, approximate generation, Blood Potency, and current Hunger level.',
      },
      'vitae-corrosiva': {
        name: 'Corrosive Vitae',
        cost: 'One or more Rouse Checks',
        dicePool: 'Resolve + Blood Sorcery (to control corrosion precisely)',
        duration: 'N/A',
        description: 'Alters their Blood making it corrosive on contact with dead materials: dissolves cloth, wood, metal, locks, or shackles. The Hunger spent determines the acid\'s potency.',
      },
      'extinguir-vitae': {
        name: 'Extinguish Vitae',
        cost: 'One Rouse Check',
        dicePool: 'Intelligence + Blood Sorcery vs. Stamina + Composure',
        duration: 'N/A',
        description: 'Eliminates the undead properties of another vampire\'s blood at range, drastically increasing their Hunger without the need for contact.',
      },
      'sangre-de-potencia': {
        name: 'Blood of Potency',
        cost: 'One Rouse Check',
        dicePool: 'Resolve + Blood Sorcery',
        duration: 'One scene or one night',
        description: 'Concentrates their Blood to temporarily raise their effective Blood Potency, improving all associated benefits.',
      },
      'toque-de-escorpion': {
        name: 'Scorpion\'s Touch',
        cost: 'One or more Rouse Checks',
        dicePool: 'Strength + Blood Sorcery vs. Stamina + Occult or Fortitude',
        duration: 'The poison retains its potency for one scene',
        description: 'Transmutes their Blood into a paralyzing poison. Paralyzes mortals and weakens vampires. Can be applied to bladed weapons.',
      },
      'robo-de-vitae': {
        name: 'Theft of Vitae',
        cost: 'One Rouse Check',
        dicePool: 'Wits + Blood Sorcery vs. Wits + Occult',
        duration: 'One feeding',
        description: 'Opens an artery at range in a victim and draws their blood to the user without physical contact. The victim suffers the damage of being force-fed upon.',
      },
      'caldero-de-sangre': {
        name: 'Cauldron of Blood',
        cost: 'One Rouse Check and gaining one (or more) Stains',
        dicePool: 'Resolve + Blood Sorcery vs. Composure + Occult or Fortitude',
        duration: 'One turn',
        description: 'Boils the victim\'s blood within their own veins, causing massive aggravated damage. One of the most lethal powers of Blood Sorcery.',
      },
      'caricia-de-baal': {
        name: 'Baal\'s Caress',
        cost: 'One or more Rouse Checks',
        dicePool: 'Strength + Blood Sorcery vs. Stamina + Occult or Fortitude',
        duration: 'The poison retains its potency for one scene',
        description: 'Transmutes their Blood into an extremely aggressive and lethal poison. Can be applied to objects, used by contact, or ingested. Deadly to mortals and vampires alike.',
      },
    },
  },

  // ── THIN-BLOOD ALCHEMY ───────────────────────────────────────────────────────
  'alquimia-de-sangre-debil': {
    name: 'Thin-Blood Alchemy',
    description: 'The Thin Blood of the last Generations has almost no power of its own, but certain Thin-Bloods have learned to use it as a catalyst. By mixing strongly resonant human blood and sometimes other substances with their own Vitae, alchemists can simulate a wide range of powers from other Disciplines and create some unique powers of their own.',
    tipo: 'Special (Thin-Blood only)',
    amenaza: 'Varies according to the powers it mimics and the method used.',
    resonancia: 'The Resonance required for each formula, so it varies accordingly.',
    clanes: ['Thin-Blood'],
    powers: {
      'alcance-lejano': {
        name: 'Far Reach',
        cost: 'One Rouse Check',
        dicePool: 'Resolve + Alchemy vs. Strength + Athletics',
        duration: 'One turn, unless sustained',
        description: 'Moves objects or people at a distance through alchemical telekinesis. Force and range depend on the roll\'s margin.',
      },
      'hieros-gamos-profano': {
        name: 'Profane Hieros Gamos',
        cost: 'One Rouse Check (distillation)',
        dicePool: 'Stamina/Manipulation/Intelligence + Alchemy (by method)',
        duration: 'Permanent until performed again',
        description: 'Allows changing biological sex, taking advantage of the fluid nature of the Thin-Blood condition. The process takes hours and requires distillation.',
      },
      neblina: {
        name: 'Haze',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene or until voluntarily ended',
        description: 'Generates a persistent mist cloud around the user that conceals their identity, hinders attacks against them, and reduces visibility.',
      },
      envolver: {
        name: 'Envelop',
        cost: 'One Rouse Check',
        dicePool: 'Wits + Alchemy vs. Stamina + Survival',
        duration: 'Until the scene ends or the alchemist ends the effect voluntarily',
        description: 'The mist adheres to a chosen victim, blinding them completely. Mortals also begin to suffocate inside the cloud.',
      },
      defraccionar: {
        name: 'Defractionate',
        cost: 'One Rouse Check (distillation)',
        dicePool: 'Stamina/Manipulation/Intelligence + Alchemy (by method)',
        duration: 'N/A',
        description: 'Produces an elixir that, added to fractionated medical blood, temporarily converts it into Vitae usable by any vampire.',
      },
      'impetu-aereo': {
        name: 'Aerial Impulse',
        cost: 'One Rouse Check',
        dicePool: 'Strength + Alchemy vs. Strength + Athletics (if resisted)',
        duration: 'One scene',
        description: 'Allows levitating and flying at considerable speed. Can fly in any direction and carry objects or persons of limited weight.',
      },
      'despertar-al-durmiente': {
        name: 'Awaken the Sleeper',
        cost: 'One Rouse Check (distillation)',
        dicePool: 'Stamina/Manipulation/Intelligence + Alchemy (by method)',
        duration: 'N/A',
        description: 'Creates an elixir that, mixed with human blood and administered to a vampire in Torpor, awakens them without needing to feed them directly.',
      },
    },
  },
}
