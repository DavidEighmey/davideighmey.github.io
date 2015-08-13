
$(window).load(function(){
        $('nav-bar, #search').keyup(function(){
          console.log("here2222");
            $(".jumbotron").hide();
            $(".col-md-8").hide();
            $(".col-md-4").hide();
            $("#questionBackground").hide();
            $(".question-tabs").hide();
            $(".tab-content").hide();
            $(".row").hide();
            $(".badges").hide();
            $(".users").hide();
            $(".tagStuff").hide();
            $(".searchAnswer").show();

        });
      });

$(document).ready(function() {
  $('search-questions, .tagWow, .tagHearthStone, .tagHearthStoneDeck, .tagHearthStoneArena, .tagHearthStoneAdventure, .tagHearthStoneEsports, .tagHearthStoneStream, .tagOverwatch, .tagOverwatchHeroes, .tagOverwatchRoles, .tagOverwatchCompetitive, .tagOverwatchMaps, .tagHeroesoftheStorm, .tagHeroesoftheStormRoles, .tagHeroesoftheStormUniverse, .tagHeroesoftheStormTournament, .tagHeroesoftheStormSkins, .tagHeroesoftheStormMap, .tagStarcraft2, .tagStarcraft2Terrian, .tagStarcraft2Zerg, .tagStarcraft2BuildOrder, .tagStarcraft2Campaign, .tagStarcraft2Esports, .tagStarcraft2CustomGame, .tagDiablo3, .tagDiablo3Class, .tagDiablo3SkillBuild, .tagDiablo3Follower, .tagDiablo3Crafting,.tagDiablo3Campaign, .tagDiablo3Lore, .tagDiablo3Items, .tagDiablo3Adventure, .tagDiablo3Console, .tagDiablo3Patch, .tagDiablo3Hardcore, .tagWowHorde, .tagWowAlliance, .tagWowRaids, .tagWowProfessions, .tagWowFarming, .tagWowQuest, .tagWowAchievement, .tagWowGear, .tagWowTransmorg, .tagWowPvp, .tagWowRoles, .tagWowGarrison, .tagWowLore, .tagWowRp, .panel-heading').click(function(){
    console.log("clicked1");
    $(this).closest('.ng-scope').find('.answer').slideToggle("slow"); 

  });
 


  $('#wowButton').click(function(){
    console.log("wowGen")

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").show();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
    $(".tagWowPets").hide();
 });
$('#wowHordeButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").show();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
    $(".tagwowPets").hide();
 });
$('#wowAllianceButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").show();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagwowPets").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#wowRaidsButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").show();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagwowPets").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#wowProfessionsButton').click(function(){

    $(".tagHearthStone").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").show();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagwowPets").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#wowRolesButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagwowPets").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").show();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });

$('#wowFarmingButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").show();
    $(".tagWowQuest").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagwowPets").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#wowTransmorgButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").show();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagwowPets").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });

$('#wowAchievementButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagWowAchievement").show(); 
    $(".tagWowGear").hide();
    $(".tagwowPets").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#wowGearButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").show();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagwowPets").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#wowPetsButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").show();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#wowPvpButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").show();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#wowGarrisonButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").show();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });

$('#wowLoreButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").show();
    $(".tagWowRp").hide();
 });

$('#wowRpButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").show();
 });
$('#sc2Button').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").show();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").show();
 });

$('#sc2ZergButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").show();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#sc2ProtosButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#sc2TerrianButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").show();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });

$('#sc2CampaignButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").show();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });

$('#sc2BuildOrderButton').click(function(){

    $(".tagHearthStone").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").show();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#sc2EsportsButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").show();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#sc2CustomButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").show();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#hearthstoneButton').click(function(){

    $(".tagHearthStone").show();
    $(".tagHearthStoneDeck").hide();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#hearthstoneAdventureButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").show();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#hearthstoneArenaButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").show();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#hearthstoneDecksButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").show();
        $(".tagHearthStoneArena").hide();

    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#hearthstoneStreamsButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").show();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#hearthstoneEsportsButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").show();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").show();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#d3Button').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").show();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#d3ClassesButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").show();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#d3SkillBuildButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").show();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#d3FollowersButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").show();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#d3LoreButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").show();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#d3AdventureButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").show();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#d3CraftingButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").show();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#d3ConsoleButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").show();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#d3CampaignButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").show();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#d3PatchButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").show();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#d3AschievmentsButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").show();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#d3ItemsButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").show();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


$('#d3HardcoreButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").show();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });

$('#hotsButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").show();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#hotsUniverseButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").show();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#hotsTournamentButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").show();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#hotsSkinsButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").show();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#hotsMapsButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").show();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#hotsHeroesButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").show();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#owButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").show();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#owRolesButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").show();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#owCompetativButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchHeroes").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").show();
    $(".tagOverwatchMaps").hide();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });
$('#owMapsButton').click(function(){

    $(".tagHearthStone").hide();
    $(".tagHearthStoneDeck").hide();
    $(".tagHearthStoneArena").hide();
    $(".tagHearthStoneAdventure").hide();
    $(".tagHearthStoneEsports").hide();
    $(".tagHearthStoneStream").hide();

    $(".tagOverwatch").hide();
    $(".tagOverwatchRoles").hide();
    $(".tagOverwatchCompetitive").hide();
    $(".tagOverwatchMaps").show();

    $(".tagHeroesoftheStorm").hide();
    $(".tagHeroesoftheStormRoles").hide();
    $(".tagHeroesoftheStormUniverse").hide();
    $(".tagHeroesoftheStormTournament").hide();
    $(".tagHeroesoftheStormSkins").hide();
    $(".tagHeroesoftheStormMap").hide();

    $(".tagStarcraft2").hide();
    $(".tagStarcraft2Terrian").hide();
    $(".tagStarcraft2Zerg").hide();
    $(".tagStarcraft2BuildOrder").hide();
    $(".tagStarcraft2Campaign").hide();
    $(".tagStarcraft2Esports").hide();
    $(".tagStarcraft2CustomGame").hide();

    $(".tagDiablo3").hide();
    $(".tagDiablo3Class").hide();
    $(".tagDiablo3SkillBuild").hide();
    $(".tagDiablo3Follower").hide();
    $(".tagDiablo3Crafting").hide();
    $(".tagDiablo3Campaign").hide();
    $(".tagDiablo3Lore").hide();
    $(".tagDiablo3Items").hide();
    $(".tagDiablo3Adventure").hide();
    $(".tagDiablo3Console").hide();
    $(".tagDiablo3Patch").hide();
    $(".tagDiablo3Hardcore").hide();

    $(".tagWow").hide();
    $(".tagWowHorde").hide();
    $(".tagWowAlliance").hide();
    $(".tagWowRaids").hide();
    $(".tagWowProfessions").hide();
    $(".tagWowFarming").hide();
    $(".tagWowQuest").hide();
    $(".tagwowPets").hide();
    $(".tagWowAchievement").hide(); 
    $(".tagWowGear").hide();
    $(".tagWowTransmorg").hide();
    $(".tagWowPvp").hide();
    $(".tagWowRoles").hide();
    $(".tagWowGarrison").hide();
    $(".tagWowLore").hide();
    $(".tagWowRp").hide();
 });


});


