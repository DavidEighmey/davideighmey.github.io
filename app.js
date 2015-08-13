(function() {
  var app = angular.module('blizz', [ ]);

    //controllers to play with the data!
    app.controller('StoreController', function() {
      
   	  console.log("here");
      this.products = questions;
      this.usrs = us;
      this.tagClick = function(tag){
        this.query = tag;
      }
     
 	  });

    app.controller("ReviewController", function(){
      
    this.answer = {};
    this.addAnswer = function(product){
      this.answer.createdOn = Date.now();
      product.answers.push(this.answer);
      this.answer = {};
    };
  });


    //directives!    
    app.directive("navBar", function() {
    return {
      restrict: 'E',
      templateUrl: "nav-bar.html"
      };
    });

    app.directive("tagQuestions", function() {
    return {
      restrict: 'E',
      templateUrl: "tag-questions.html"
      };
    });

  app.directive("searchQuestions", function() {
      return {
        restrict: 'E',
        templateUrl: "search-questions.html"
      };
    });


    





    //mock data!
   var questions= [
  {
      question: "What is the best deck in Hearthstone?",
      votes: 15,
      askedBy: "Diablo",
      askedOn: 1439395341297,
      tag: "hearthstone deck",
      answers: [
        {
          upVotes: 10,
          body: "The best deck is the Grim Warrior Deck",
          author: "Garrosh",
          createdOn: 1439395341297
        }, {
          upVotes: 1,
          body: "I persionally love the control mage. You are able to destroy an the oposition",
          author: "Jaina",
          createdOn: 1439395341297
        }
      ]
    }, {
      question: "Who is your favorite boss in adventure mode?",
      votes: 20,
      askedBy: "Thrall",
      askedOn: 1439395341297,
      tag: "hearthstone adventure",
      answers: [
        {
          upVotes: 2,
          body: "My favorite boss to kill has to be Kel'Thuzad",
          author: "Uther",
          createdOn: 1439395341297
        }, {
          upVotes: 5,
          body: "I would say Nefarian. It was super hard to kill him but what a blast!",
          author: "Arthas",
          createdOn: 1439395341297
        }
      ]
    }, {
      question: "How can I beat Gothik on heroic?",
      votes: 15,
      askedBy: "Jaina",
      askedOn: 1439395341297,
      tag: "hearthstone adventure",
      answers: [
        {
          upVotes: 2,
          body: "The best way to kill Gothik is shown here: https://www.youtube.com/watch?v=3w13f-QkiD0",
          author: "Medivh",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is the best deck in the arena?",
      votes: 50,
      askedBy: "Jaina",
      askedOn: 1439395341297,
      tag: "hearthstone arena",
      answers: [
        {
          upVotes: 10,
          body: "I love the Grim Warrior deck",
          author: "Garrosh",
          createdOn: 1439395341297
        }, {
          upVotes: 4,
          body: "CONTROL MAGE!!!",
          author: "Medivh",
          createdOn: 1439395341297
        },{
          upVotes: 45,
          body: "You Have to try the shockadin deck!",
          author: "Uther",
          createdOn: 1439395341297
        },{
          upVotes: 1,
          body: "Shaman Decks are very very OP",
          author: "Thrall",
          createdOn: 1439395341297
        }
      ]
    },
{
      question: "What is the biggest event for hearthstone in eSports?",
      votes: 50,
      askedBy: "Jaina",
      askedOn: 1439395341297,
      tag: "hearthstone esports",
      answers: [
        {
          upVotes: 10,
          body: "There is a challenge cup! and also the esl!",
          author: "DeathWing",
          createdOn: 1439395341297
        }, {
          upVotes: 5,
          body: "BlizzCon!",
          author: "Jim Raynor",
          createdOn: 1439395341297
        }
      ]
    },

    {
      question: "Who won the latest tournament in Hearthstone and what deck was used?",
      votes: 75,
      askedBy: "Diablo",
      askedOn: 1439395341297,
      tag: "hearthstone esports",
      answers: [
        {
          upVotes: 1,
          body: "http://www.liquidhearth.com/forum/hearthstone/470976-all-of-the-decklists-from-blizzcon-top-16",
          author: "Arthas",
          createdOn: 1439395341297
        }, {
          upVotes: 20,
          body: "BlizzCon Fire Bat used a druid deck in the final",
          author: "Li Li",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What video stream should I watch if I am a new player and want to learn to play?",
      votes: 50,
      askedBy: "Thrall",
      askedOn: 1439395341297,
      tag: "hearthstone stream",
      answers: [
        {
          upVotes: 20,
          body: "Forsen has the best streams",
          author: "Kerrigan",
          createdOn: 1397490987821
        }, {
          upVotes: 4,
          body: "You gotta say Trump has the best!",
          author: "Tyreal",
          createdOn: 1439395341297
        }, {
          upVotes: 2,
          body: "Savjz is pretty good too",
          author: "DeathWing",
          createdOn: 1439395341297
        },
      ]
    },
    {
      question: "Who has the most entertaining stream for Hearthstone?",
      votes: 55,
      askedBy: "Illidan",
      askedOn: 1439395341297,
      tag: "hearthstone stream",
      answers: [
        {
          upVotes: 6,
          body: "Trump!!!!!!",
          author: "Elite Tauren Chieften",
          createdOn: 1439395341297
        }, {
          upVotes: 4,
          body: "gnumme is awesome!!",
          author: "Medivh",
          createdOn: 1439395341297
        }
      ]
    },

{
      question: "From what you've seen, who is your favorite hero?",
      votes: 5,
      askedBy: "Uther",
      askedOn: 1439395341297,
      tag: "overwatch heroes",
      answers: [
        {
          upVotes: 1,
          body: "The Reaper looks awesome! I cant wait to play him",
          author: "Diablo",
          createdOn: 1439395341297
        }, {
          upVotes: 3,
          body: "McCree looks fun! we will see though!",
          author: "DeathWing",
          createdOn: 1439395341297
        }
      ]
    },

{
      question: "How will the different roles play in Overwatch?",
      votes: 150,
      askedBy: "Medivh",
      askedOn: 1439395341297,
      tag: "overwatch roles",
      answers: [
        {
          upVotes: 50,
          body: "There is offense, defense, tank and support. I think it is kind of like if you would mix Heroes of The Storm and TF2",
          author: "Illidan",
          createdOn: 1439395341297
        }, {
          upVotes: 45,
          body: "I cant wait to try them all. I think the defense one will be so fun",
          author: "Uther",
          createdOn: 1439395341297
        }, {
          upVotes: 4,
          body: "support should interesting to try.",
          author: "Li Li",
          createdOn: 1439395341297
        }
      ]
    },

{
      question: "What is a support class and what do they do in Overwatch?",
      votes: 250,
      askedBy: "Uther",
      askedOn: 1439395341297,
      tag: "overwatch roles",
      answers: [
        {
          upVotes: 100,
          body: "I assume it will be kind of like TF2 where you will be able to heal and do a little bit of damage",
          author: "Zeratul",
          createdOn: 1439395341297
        }, {
          upVotes: 5,
          body: "Who knows !!! ",
          author: "Adria",
          createdOn: 1439395341297
        }
      ]
    },

{
      question: "When overwatch drops, who wants to join my competitive team?",
      askedBy: "Li Li",
      votes: 33,
      askedOn: 1439395341297,
      tag: "Overwatch competitive",
      answers: [
        {
          upVotes: 10,
          body: "Ill join it!",
          author: "Arthas",
          createdOn: 1439395341297
        }, {
          upVotes: 10,
          body: "Add me!",
          author: "Jaina",
          createdOn: 1439395341297
        }
      ]
    },


{
      question: "When will Overwatch be released?",
      votes: 40,
      askedBy: "DeathWing",
      askedOn: 1439395341297,
      tag: "overwatch",
      answers: [
        {
          upVotes: 1,
          body: "Blizzard Time",
          author: "Sylvannus",
          createdOn: 1439395341297
        }, {
          upVotes: 40,
          body: "It will be done when its ready. Knowing Blizzard they take their time but the games are always worth it!",
          author: "Uther",
          createdOn: 1439395341297
        }
      ]
    },

    {
      question: "Do the maps have different game play aspects?",
      askedBy: "Gul'dan",
      votes: 50,
      askedOn: 1439395341297,
      tag: "overwatch maps",
      answers: [
         {
          upVotes: 6,
          body: "Yes some are team based objectives and some capture type objectives",
          author: "Tychus",
          createdOn: 1439395341297
        }
      ]
    },

     {
      question: "Which character has the best DPS in Heroes of the Storm?",
      votes: 25,
      askedBy: "Jaina",
      askedOn: 1439395341297,
      tag: "heroes of the storm roles",
      answers: [
        {
          upVotes: 1,
          body: "Raynor is pretty good",
          author: "Kerrigan",
          createdOn: 1439395341297
        }, {
          upVotes: 5,
          body: "Tychus ofcourse! muhahah",
          author: "Tychus",
          createdOn: 1439395341297
        }, {
          upVotes: 2,
          body: "Jaina is pretty good to use!",
          author: "Medivh",
          createdOn: 1439395341297
        }
      ]
    },

 {
      question: "Which character is the tank in Heroes of the Storm?",
      votes: 2,
      askedBy: "Illidan",
      askedOn: 1439395341297,
      tag: "heroes of the storm roles",
      answers: [
        {
          upVotes: 1,
          body: "Arthas!!",
          author: "Arthas",
          createdOn: 1439395341297
        }
      ]
    },
{
      question: "What is your favorite universe?",
      votes: 100,
      askedBy: "Arthas",
      askedOn: 1439395341297,
      tag: "heroes of the storm universe",
      answers: [
        {
          upVotes: 5,
          body: "I love how they implemented the diablo universe",
          author: "Kerrigan",
          createdOn: 1439395341297
        }, {
          upVotes: 20,
          body: "Warcraft and Starcraft is pretty cool to fight against each other",
          author: "Tychus",
          createdOn: 1439395341297
        }, {
          upVotes: 0,
          body: "Warcraft",
          author: "Vol'jin",
          createdOn: 1439395341297
        }
      ]
    },

{
      question: "When is the next Heroes of the Storm tournament?",
      votes: 50,
      askedBy: "Diablo",
      askedOn: 1439395341297,
      tag: "heroes of the storm tournament",
      answers: [
        {
          upVotes: 30,
          body: "Blizzcon 2014!3",
          author: "Thrall",
          createdOn: 1439395341297
        }, {
          upVotes: 26,
          body: "go check it out http://www.gosugamers.net/heroesofthestorm",
          author: "Tychus",
          createdOn: 1439395341297
        }
      ]
    },
{
      question: "Who won the last tournament?",
      votes: 55,
      askedBy: "Anduin Wrynn",
      askedOn: 1439395341297,
      tag: "Heroes of the storm tournament",
      answers: [
        {
          upVotes: 22,
          body: "Cloud 9 won the last blizzcon tournament",
          author: "Kerrigan",
          createdOn: 1439395341297
        }, {
          upVotes: 11,
          body: "I did!!",
          author: "Tychus",
          createdOn: 1439395341297
        }
      ]
    },

{
      question: "What is the best looking skin for Uther?",
      votes: 78,
      askedBy: "Uther",
      askedOn: 1439395341297,
      tag: "heroes of the storm skins",
      answers: [
        {
          upVotes: 22,
          body: "I can't wait for the judgement skin to come out!",
          author: "Kerrigan",
          createdOn: 1439395341297
        }, {
          upVotes: 45,
          body: "you have to go with the master skin!",
          author: "Tychus",
          createdOn: 1439395341297
        }
      ]
    },

{
      question: "What is the best looking skin for Diablo?",
      votes: 33,
      askedBy: "Diablo",
      askedOn: 1439395341297,
      tag: "heroes of the storm skins",
      answers: [
        {
          upVotes: 6,
          body: "Archangel",
          author: "Illidan",
          createdOn: 1439395341297
        }, {
          upVotes: 7,
          body: "I like the default or the Lord of Terror!",
          author: "DeathWing",
          createdOn: 1439395341297
        }
      ]
    },

{
      question: "Who wants to join my team and play competitive?",
      votes: 2,
      askedBy: "Thrall",
      askedOn: 1439395341297,
      tag: "heroes of the storm skins",
      answers: [
        {
          upVotes: 1,
          body: "I will join you Thrall",
          author: "Li Li",
          createdOn: 1439395341297
        }
      ]
    },

    {
      question: "What is the best strategy for Sky Temple map?",
      votes: 400,
      askedBy: "Vol'jin",
      askedOn: 1439395341297,
      tag: "heroes of the storm map",
      answers: [
        {
          upVotes: 100,
          body: "check out this site! http://www.teamliquid.net/forum/heroes/481334-heroes-map-guide-sky-temple",
          author: "Garosh Helscream",
          createdOn: 1439395341297
        }, {
          upVotes: 43,
          body: "Blizzard has a guide http://us.battle.net/heroes/en/battlegrounds/sky-temple/!",
          author: "Maghda",
          createdOn: 1439395341297
        }
      ]
    },
     {
      question: "Whats your favorite build order for Terrian?",
      votes: 43,
      askedBy: "Jim Raynor",
      askedOn: 1439395341297,
      tag: "starcraft 2 terrian build order",
      answers: [
        {
          upVotes: 15,
          body: "I kind of invented my own build for TvT and it seems to work. 10 depot 12 rax (send scout just as you start) 14 depot (wall off early) 15 gas 16 marine 17 OC",
          author: "Tychus",
          createdOn: 1439395341297
        }
      ]
    },{
      question: "Whats your favorite build order for zerg?",
      votes: 250,
      askedBy: "Kerrigan",
      askedOn: 1439395341297,
      tag: "starcraft 2 zerg build order",
      answers: [
        {
          upVotes: 13,
          body: "It all depends on who is your oppenet",
          author: "Zeratul",
          createdOn: 1439395341297
        }, {
          upVotes: 15,
          body: "mine is: 10: overlord 15: hatch 16: pool 17: overlord 22: 2 queens 22: extractor 22: roach warren 22: 4 roaches 30: overlord 30: lair 38: 4 roaches 38: overlord   46: drones",
          author: "Jim Raynor",
          createdOn: 1439395341297
        }
      ]
    },

    {
      question: "Where will the campaign be headed in the new expansion?",
      votes: 443,
      askedBy: "Diablo",
      askedOn: 1439395341297,
      tag: "starcraft 2 campaign ",
      answers: [
        {
          upVotes: 18,
          body: "Experience Whispers of Oblivion — the stunning three-mission Prologue to Legacy of the Void",
          author: "Zeratul",
          createdOn: 1439395341297
        }, {
          upVotes: 88,
          body: "The campaign should be so fun! the protos ship looks awesome",
          author: "DeathWing",
          createdOn: 1439395341297
        }
      ]
    },

    {
      question: "Whats your favorite moment so far in SC2's campaign?",
      votes: 78,
      askedBy: "Tychus",
      askedOn: 1439395341297,
      tag: "starcraft 2 campaign ",
      answers: [
         {
          upVotes: 50,
          body: "It has to be the Jim and Kerrigan story. But we will see how it will end",
          author: "Illidan",
          createdOn: 1439395341297
        }
      ]
    },{
      question: "What is the biggest eSports event for SC2?",
      votes: 98,
      askedBy: "Tyreal",
      askedOn: 1439395341297,
      tag: "starcraft 2 esports",
      answers: [
        {
          upVotes: 33,
          body: "Twitch tournaments",
          author: "Kerrigan",
          createdOn: 1439395341297
        }, {
          upVotes: 54,
          body: "BlizzCon always has an amazing coverage!",
          author: "Arthas",
          createdOn: 1439395341297
        }
      ]
    },

    {
      question: "Who is the best SC2 player in eSports?",
      votes: 789,
      askedBy: "Maghda",
      askedOn: 1439395341297,
      tag: "starcraft 2 esports",
      answers: [
        {
          upVotes: 534,
          body: "its got to be herO or Hyrdra",
          author: "Kerrigan",
          createdOn: 1439395341297
        }, {
          upVotes: 17,
          body: "I am obviously",
          author: "Zeratul",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "Whats the most popular SC2 custom game?",
      votes: 252,
      askedBy: "Garrosh Helscream",
      askedOn: 1439395341297,
      tag: "starcraft 2 custom game",
      answers: [
        {
          upVotes: 1,
          body: "Left 2 Die is a fun one!",
          author: "Uther",
          createdOn: 1439395341297
        }, {
          upVotes: 12,
          body: "Haunted Forest is so addicting",
          author: "DeathWing",
          createdOn: 1439395341297
        },
        {
          upVotes: 15,
          body: "Warcraft RTS: Alliance and Horde for that old school feel",
          author: "Medivh",
          createdOn: 1439395341297
        }
      ]
    },

    {
      question: "What is the best class in D3?",
      votes: 245,
      askedBy: "Elite Tauren Chieften",
      askedOn: 1439395341297,
      tag: "diablo 3 class",
      answers: [
        {
          upVotes: 15,
          body: "You have to play the Crusader",
          author: "Uther",
          createdOn: 1439395341297
        }, {
          upVotes: 10,
          body: "Barbarian's are my favorite to play",
          author: "Garrosh Helscream",
          createdOn: 1439395341297
        }, {
          upVotes: 55,
          body: "Wizard's are hard to play at first, but they can do a ton of damage",
          author: "Garrosh Helscream",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is the best skill build for a demon hunter?",
      votes: 122,
      askedBy: "Jaina",
      askedOn: 1439395341297,
      tag: "diablo 3 skill build",
      answers: [
         {
          upVotes: 17,
          body: "Try this out http://diablo.somepage.com/popular/demon-hunter!",
          author: "Illidan",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "Who is the best follower in D3?",
      votes: 28,
      askedBy: "Illidan",
      askedOn: 1439395341297,
      tag: "diablo 3 follower",
      answers: [
        {
          upVotes: 13,
          body: "it all depends on your class",
          author: "Medivh",
          createdOn: 1439395341297
        }, {
          upVotes: 14,
          body: "Barb: Enchantress Wiz: Enchantress WD: Enchantress Monk: EnchantressDH: Enchantress...and sometimes Scoundrel",
          author: "Diablo",
          createdOn: 1439395341297
        }
      ]
    },
{
      question: "What is the best gear to craft in D3?",
      votes: 78,
      askedBy: "Arthas",
      askedOn: 1439395341297,
      tag: "diablo 3 crafting",
      answers: [
        {
          upVotes: 54,
          body: "Crafting is nice but the best gear comes from drops",
          author: "Tychus",
          createdOn: 1439395341297
        }
      ]
    },

    {
      question: "What is the best gem to craft in D3?",
      votes: 67,
      askedBy: "Uther",
      askedOn: 1439395341297,
      tag: "diablo 3 crafting",
      answers: [
        {
          upVotes: 40,
          body: "Crafting gems is a good thing that you should invest in",
          author: "Tyreal",
          createdOn: 1439395341297
        }, {
          upVotes: 1,
          body: "Gems are easily upgraded!",
          author: "Adria",
          createdOn: 1439395341297
        }
      ]
    },

    {
      question: "Which boss fight gave you the most trouble during the Diablo 3 campaign?",
      votes: 89,
      askedBy: "Belial",
      askedOn: 1439395341297,
      tag: "diablo 3 campaign",
      answers: [
        {
          upVotes: 83,
          body: "Ghom was the hardest fight it took me forever to kill him",
          author: "Illidan",
          createdOn: 1439395341297
        }, {
          upVotes: 2,
          body: "Diablo is pretty difficult",
          author: "Tychus",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is the timeline between Diablo 1 and Diablo 3?",
      votes: 75,
      askedBy: "Adria",
      askedOn: 1439395341297,
      tag: "diablo 3 lore",
      answers: [
        {
          upVotes: 40,
          body: "Check the diablo 3 website! they have a great timeline there! http://eu.battle.net/d3/en/game/the-story-of-diablo/",
          author: "Kerrigan",
          createdOn: 1439395341297
        }
      ]
    },

{
      question: "Where is the best place to farm legendary items?",
      votes: 89,
      askedBy: "Kerrigan",
      askedOn: 1439395341297,
      tag: "diablo 3 items",
      answers: [
        {
          upVotes: 55,
          body: "The rifts are awesome to farm. make sure to clear everything",
          author: "Kerrigan",
          createdOn: 1439395341297
        }, {
          upVotes: 1,
          body: "auction house!!! oh wait -.-!",
          author: "Diablo",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is adventure mode?",
      votes: 65,
      askedBy: "Uther",
      askedOn: 1439395341297,
      tag: "diablo 3 adventure",
      answers: [
        {
          upVotes: 6,
          body: "its where you just kill and kill and kill and kill",
          author: "Garrosh Helscream",
          createdOn: 1439395341297
        }, {
          upVotes: 43,
          body: "They took out most of the stroy driven events and all waypoints are unlocked. its basically a big battlefield",
          author: "Illidan",
          createdOn: 1439395341297
        }
      ]
    }, {
      question: "Can you transfer your computer character into the console Or do I have to start over?",
      votes: 65,
      askedBy: "Illidan",
      askedOn: 1439395341297,
      tag: "diablo 3 console",
      answers: [
        {
          upVotes: 45,
          body: "you have to start over /sadface",
          author: "Thrall",
          createdOn: 1439395341297
        }, {
          upVotes: 34,
          body: "yep no transfering",
          author: "Arthas",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What will be in patch 2.3",
      votes: 65,
      askedBy: "Medivh",
      askedOn: 1439395341297,
      tag: "diablo 3 patch",
      answers: [
        {
          upVotes: 17,
          body: "go check out the patch notes http://us.battle.net/d3/en/blog/19814212/patch-230-ptr-patch-notes-8-6-2015",
          author: "Kerrigan",
          createdOn: 1439395341297
        }
      ]
    },

    {
      question: "Has anyone beat the game on the inferno difficulty while doing hard core mode",
      votes: 123,
      askedBy: "Thrall",
      askedOn: 1439395341297,
      tag: "diablo 3 hardcore",
      answers: [
        {
          upVotes: 84,
          body: "nope not that i know of",
          author: "Diablo",
          createdOn: 1439395341297
        }, {
          upVotes: 9,
          body: "I will next week watch",
          author: "Tyreal",
          createdOn: 1439395341297
        }
      ]
    },

    {
      question: "Where is the best area to get the best drop rate for loot?",
      votes: 500,
      askedBy: "Diablo",
      askedOn: 1439395341297,
      tag: "diablo 3 items",
      answers: [
        {
          upVotes: 204,
          body: "The Rifts!!",
          author: "Kerrigan",
          createdOn: 1439395341297
        }, {
          upVotes: 4,
          body: "act 1 inferno! ",
          author: "Zeratul",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "As a barbarian, what abilities should I use?",
      votes: 67,
      askedBy: "Garrosh Helscream",
      askedOn: 1439395341297,
      tag: "diablo 3 class",
      answers: [
        {
          upVotes: 55,
          body: "check it! http://diablo.somepage.com/popular/barbarian",
          author: "Li Li",
          createdOn: 1439395341297
        }, {
          upVotes: 12,
          body: "Rend and call of the ancients",
          author: "Elite Tauren Chieften",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What are the best abilities as a wizard?",
      votes: 55,
      askedBy: "Jaina",
      askedOn: 1439395341297,
      tag: "diablo 3 class",
      answers: [
        {
          upVotes: 40,
          body: "go look at http://diablo.somepage.com/popular/wizard",
          author: "Medivh",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is the best server to play horde on?",
      votes: 45,
      askedBy: "Diablo",
      askedOn: 1439395341297,
      tag: "wow horde",
      answers: [
        {
          upVotes: 3,
          body: "Kil'Jaeden ",
          author: "Illidan",
          createdOn: 1439395341297
        }, {
          upVotes: 16,
          body: "Illidan!",
          author: "Uther",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is the best starting area for the horde?",
      votes: 25,
      askedBy: "Li Li",
      askedOn: 1439395341297,
      tag: "wow horde",
      answers: [
        {
          upVotes: 13,
          body: "Durotar is the best! ",
          author: "Thrall",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is the best race to play as an alliance?",
      votes: 54,
      askedBy: "Tyreal",
      askedOn: 1439395341297,
      tag: "wow alliance",
      answers: [
        {
          upVotes: 18,
          body: "Humans have the rep increase",
          author: "Arthas",
          createdOn: 1439395341297
        }, {
          upVotes: 22,
          body: "You have to go with gnomes",
          author: "Jaina",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is the best server to play alliance for PVP on?",
      votes: 78,
      askedBy: "Zeratul",
      askedOn: 1439395341297,
      tag: "wow alliance",
      answers: [
        {
          upVotes: 45,
          body: "Sargeras is fun",
          author: "Li Li",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "Should raids go back to 60 man raids?",
      votes: 40,
      askedBy: "Medivh",
      askedOn: 1439395341297,
      tag: "wow raids",
      answers: [
        {
          upVotes: 34,
          body: "Hell no the flex raids are so much better. imagine trying to tell 59 other people what to do ",
          author: "Uther",
          createdOn: 1439395341297
        }, {
          upVotes: 0,
          body: "They were kind of fun though",
          author: "Arthas",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is the best strategy to beat the hardest boss Archimonde?",
      votes: 434,
      askedBy: "Uther",
      askedOn: 1439395341297,
      tag: "wow raids",
      answers: [
        {
          upVotes: 328,
          body: "Check this http://www.wowhead.com/guides/raiding/hellfire-citadel/archimonde-strategy-guide",
          author: "Illidan",
          createdOn: 1439395341297
        }, {
          upVotes: 43,
          body: "Watch out for the doomfire spirits",
          author: "Tychus",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is the best way to level up jewel crafting?",
      votes: 37,
      askedBy: "Sylvannus",
      askedOn: 1439395341297,
      tag: "wow professions",
      answers: [
        {
          upVotes: 36,
          body: "Level up that JC by buying alot of ore from the AH",
          author: "Kerrigan",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is the best recipe for Cooking?",
      votes: 25,
      askedBy: "Elite Tauren Chieften",
      askedOn: 1439395341297,
      tag: "wow professions",
      answers: [
        {
          upVotes: 1,
          body: "its got to be the delicious chocolate cake",
          author: "Illidan",
          createdOn: 1439395341297
        }, {
          upVotes: 4,
          body: "Black pepper ribs & shrimp",
          author: "Sylvannus",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is the fastest way to level up?",
      votes: 2,
      askedBy: "Adria",
      askedOn: 1439395341297,
      tag: "wow farming",
      answers: [
        {
          upVotes: 0,
          body: "Buy a boost to 90 and use experience pots/heirlooms from 90 to 100.",
          author: "DeathWing",
          createdOn: 1439395341297
        }, {
          upVotes: 1,
          body: "Questing/BGS/Dungeons do a little mixture of each so you dont get bored!",
          author: "Uther",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is the fastest way to get gold?",
      votes: 89,
      askedBy: "Thrall",
      askedOn: 1439395341297,
      tag: "wow farming",
      answers: [
        {
          upVotes: 55,
          body: "AH flipping. buy low sell high",
          author: "Kerrigan",
          createdOn: 1439395341297
        }, {
          upVotes: 35,
          body: "Elite Tauren Chieften",
          author: "Tychus",
          createdOn: 1439395341297
        }, {
          upVotes: 1,
          body: "Quest rewards help",
          author: "Li Li",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "I need help on the thunderfurry sword quest, is it still possible to do it? If so, how?",
      votes: 78,
      askedBy: "Arthas",
      askedOn: 1439395341297,
      tag: "wow quest",
      answers: [
         {
          upVotes: 59,
          body: "Yes you need to just run MC alot ... alot alot alot",
          author: "Medivh",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is the hardest achievement to get?",
      votes: 45,
      askedBy: "Gul'dan",
      askedOn: 1439395341297,
      tag: "wow achievement",
      answers: [
        {
          upVotes: 33,
          body: "Loremaster ohh god the quest",
          author: "Thrall",
          createdOn: 1439395341297
        }, {
          upVotes: 1,
          body: "Professor is pretty hard !",
          author: "Anduin Wrynn",
          createdOn: 1439395341297
        }
      ]
    },
     {
      question: "Has anyone ever gotten all the achievements in WOW?",
      votes: 23,
      askedBy: "DeathWing",
      askedOn: 1439395341297,
      tag: "wow achievement",
      answers: [
        {
          upVotes: 20,
          body: "The highest i have seen is http://eu.battle.net/wow/en/character/gordunni/%D0%91%D0%B0%D0%BD%D0%B4%D0%B8%D1%82%D0%BE%D1%81%D1%8B%D1%87/achievement",
          author: "Illidan",
          createdOn: 1439395341297
        }
      ]
    },
         {
      question: "What is the best gear for an enhancement Shaman?",
      votes: 89,
      askedBy: "Thrall",
      askedOn: 1439395341297,
      tag: "wow gear",
      answers: [
        {
          upVotes: 33,
          body: "windfury + agility = DPS",
          author: "Kerrigan",
          createdOn: 1439395341297
        }, {
          upVotes: 68,
          body: "this site is a life savor http://www.icy-veins.com/wow/enhancement-shaman-pve-dps-gear-loot-best-in-slot",
          author: "Diablo",
          createdOn: 1439395341297
        }
      ]
    },
     {
      question: "What would the demon hunter gear look like?",
      votes: 172,
      askedBy: "Illidan",
      askedOn: 1439395341297,
      tag: "wow gear",
      answers: [
        {
          upVotes: 50,
          body: "The eyes look so cool so I hope they dont cover them with some weird masks",
          author: "Tychus",
          createdOn: 1439395341297
        }, {
          upVotes: 45,
          body: "They wear leather so maybe a DK mixed with a rogue",
          author: "Arthas",
          createdOn: 1439395341297
        }
      ]
    },

    {
      question: "What is the best looking transmorg in the game??",
      votes: 78,
      askedBy: "Anduin Wrynn",
      askedOn: 1439395341297,
      tag: "wow transmorg",
      answers: [
        {
          upVotes: 50,
          body: "You have to love the judgement armor",
          author: "Uther",
          createdOn: 1439395341297
        }, {
          upVotes: 25,
          body: "Cataclysm regalla is what i wear on special occasions day!",
          author: "Thrall",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is the best pet combo for the pet arena?",
      votes: 74,
      askedBy: "Zeratul",
      askedOn: 1439395341297,
      tag: "wow pets",
      answers: [
        {
          upVotes: 50,
          body: "Cheetah Cub",
          author: "Elite Tauren Chieften",
          createdOn: 1439395341297
        }, {
          upVotes: 20,
          body: "lil' rag is pretty strong!",
          author: "Diablo",
          createdOn: 1439395341297
        },  {
          upVotes: 22,
          body: "Pandaren Water Spirit + Chrominius is the best 1 2 combo",
          author: "Jim Raynor",
          createdOn: 1439395341297
        }, {
          upVotes: 13,
          body: "Nether Faerie Dragon is my favoritev",
          author: "Medivh",
          createdOn: 1439395341297
        }
      ]
    },

    {
      question: "What gives you the best gear arenas or battlegrounds?",
      votes: 79,
      askedBy: "Diablo",
      askedOn: 1439395341297,
      tag: "wow pvp",
      answers: [
         {
          upVotes: 78,
          body: "Arenas are alot of fun and usually give the best pvp gear",
          author: "Tychus",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What class is the best healer?",
      votes: 278,
      askedBy: "Tyreal",
      askedOn: 1439395341297,
      tag: "wow roles",
      answers: [
        {
          upVotes: 100,
          body: "its all your preferences but paladins and druids are always great",
          author: "Uther",
          createdOn: 1439395341297
        }, {
          upVotes: 10,
          body: "Preist have always been the best",
          author: "Adria",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What class is the best tank?",
      votes: 138,
      askedBy: "Garrosh Helscream",
      askedOn: 1439395341297,
      tag: "wow roles",
      answers: [
        {
          upVotes: 78,
          body: "its all about your preference! but Warriors always are awesome tanks",
          author: "DeathWing",
          createdOn: 1439395341297
        }, {
          upVotes: 34,
          body: "Hmmm I think druids are my favorite to play so easy",
          author: "Tyreal",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What class is the best dps?",
      votes: 321,
      askedBy: "Maghda",
      askedOn: 1439395341297,
      tag: "wow roles",
      answers: [
        {
          upVotes: 210,
          body: "right now it is enhancement shamans http://www.noxxic.com/wow/dps-rankings",
          author: "Thrall",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What build order should I build my buildings?",
      votes: 72,
      askedBy: "DeathWing",
      askedOn: 1439395341297,
      tag: "wow garrison",
      answers: [
        {
          upVotes: 34,
          body: "it depends on what you want from your garrison",
          author: "Kerrigan",
          createdOn: 1439395341297
        }, {
          upVotes: 61,
          body: "Check out this indetail guide on the garrisons http://www.wowhead.com/guides/garrisons/buildings/garrison-buildings-for-content-you-like ",
          author: "Tychus",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "Are we going back in time in the new expansion or is it taking place in the current time?",
      votes: 79,
      askedBy: "Diablo",
      askedOn: 1439395341297,
      tag: "wow lore",
      answers: [
        {
          upVotes: 32,
          body: "We shall see when it is released!",
          author: "Kerrigan",
          createdOn: 1439395341297
        }, {
          upVotes: 54,
          body: "I am pretty sure it is in current time",
          author: "Illidan",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "During the first war between the orcs and the humans, where were the night elves?",
      votes: 89,
      askedBy: "Tychus",
      askedOn: 1439395341297,
      tag: "wow lore",
      answers: [
        {
          upVotes: 40,
          body: "They were on kalimdor minding their own business :P ",
          author: "Li Li",
          createdOn: 1439395341297
        }, {
          upVotes: 3,
          body: "They were hiding",
          author: "Diablo",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is your favorite WoW memeory?",
      votes: 400,
      askedBy: "Thrall",
      askedOn: 1439395340097,
      tag: "wow",
      answers: [
        {
          upVotes: 123,
          body: "Leeeeeroy!!! clasic! ",
          author: "Kerrigan",
          createdOn: 1439395341297
        }, {
          upVotes: 111,
          body: "How about odd groups left even groups right that means",
          author: "Tychus",
          createdOn: 1439395341297
        }
      ]
    },
    {
      question: "What is the difference between a regular server and a role playing server?",
      votes: 25,
      askedBy: "Li Li",
      askedOn: 1439395341297,
      tag: "wow rp",
      answers: [
        {
          upVotes: 20,
          body: " If you wish to partake in creative storytelling by using WoW, RP realms are for you if not then join the normal servers",
          author: "Kerrigan",
          createdOn: 1439395341297
        }
      ]
    }
];

  var us =[
    {
      name: "Uther",
      reputation: 2500,
      image: "img/users/uther.jpg"
    }, {
      name: "Thrall",
      reputation: 6500,
      image: "img/users/thrall.jpg"
    }, {
      name: "Garrosh Helscream",
      reputation: 1045,
      image: "img/users/garrash.jpg"
    },{
      name: "Medivh",
      reputation: 500,
      image: "img/users/medivh.jpeg"
    },{
      name: "Arthas",
      reputation: 3000,
      image: "img/users/Arthas.jpg"
    },
    {
      name: "Gul'dan",
      reputation: 1000,
      image: "img/users/guldan.jpg"
    },
    {
      name: "Vol'jin",
      reputation: 20,
      image: "img/users/Vol'jin.jpg"
    },{
      name: "Illidan",
      reputation: 50000,
      image: "img/users/illidan.jpg"
    },{
      name: "Li Li",
      reputation: 145,
      image: "img/users/lili.jpg"
    },{
      name: "Deathwing",
      reputation: 684,
      image: "img/users/deathwing.jpg"
    },
    {
      name: "Sylvanas Windrunner",
      reputation: 500,
      image: "img/users/syl.jpg"
    },{
      name: "Elite Tauren Chieftian",
      reputation: 300,
      image: "img/users/elite.jpg"
    },{
      name: "Jaina Proudmoore",
      reputation: 250,
      image: "img/users/Jainaproudmoore.jpg"
    },{
      name: "Diablo",
      reputation: 450,
      image: "img/users/diablo.jpg"
    },{
      name: "Maghda",
      reputation: 20,
      image: "img/users/maghda.jpg"
    },{
      name: "Tyrael",
      reputation: 350,
      image: "img/users/tyrael.jpeg"
    },{
      name: "Belial",
      reputation: 200,
      image: "img/users/Belial.jpg"
    },{
      name: "Adria",
      reputation: 50,
      image: "img/users/Adria.jpg"
    },{
      name: "Kerrigan",
      reputation: 1500,
      image: "img/users/kerrigan.jpg"
    },
    {
      name: "Jim Raynor",
      reputation: 750,
      image: "img/users/Jim.jpg"
    },{
      name: "Zeratul",
      reputation: 800,
      image: "img/users/Zeratul.jpg"
    },{
      name: "Tychus",
      reputation: 400,
      image: "img/users/tychus.jpg"
    }, {
      name: "Anduin Wrynn",
      reputation: 150,
      image: "img/users/Anduin.png"
    }
  ];

  })();