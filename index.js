const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = ".";
client.on('ready', () => {
console.log(`Zalogowano jako ${client.user.tag}!`);
client.user.setActivity("...", {type: 'LISTENING'});

});
const args = message.content
 .slice(prefix.length)
 .trim()
 .split(/ +/g)

const cmd = args.shift().toLowerCase()
client.on('message', (msg) => {
  console.log(msg.content, msg.author.tag)
  const { author, guild, channel } = message

  if(author.bot || !guild){
    return
  }
if (message.content === '.liczbaksiążek') {
  let embed = new Discord.messageEmbed()
  .setTitle(`W bazie danych mamy 113 książek`)
  .setColor("#e8c500")
  .setDescription('© PheaServices 2021')
  .setTimestamp();
  message.channel.send(embed);
}
if (message.content === '.pomoc') {
  let embed = new Discord.messageEmbed()
  .setTitle(`Witamy w dziale pomocy`)
  .setColor("#e8c500")
  .setDescription('Komendy \n Komenda .liczbaksiążek pokazuje ile mamy w bazie danych książek. \n Komenda .join pozwala dołączyć botowi do kanału głosowego na którym jesteś.\n Komenda .book zaczyna losować książkę.\n Komenda .ciekawostka losuje ciekawostę dla Ciebie.\n © PheaServices 2021')
  .setTimestamp();
  message.channel.send(embed);
}


if (msg.content === `${prefix}book`) { 
  msg.channel.send("**Losowanie książki...**").then((m) => {    
    let choices = [
      "Dziennik Cwaniaczka Biała gorączka", 
      "Dziennik Cwaniaczka Stara bieda",
      "Dziennik Cwaniaczka Przykra prawda",
      "Dziennik Cwaniaczka No to lecimy",
      "Wojciech Cejrowski Gringo wśród dzikich plemion", 
      "Wojciech Cejrowski Rio Anaconda",
      "Wojciech Cejrowski Podróżnik WC",
      "Wojciech Cejrowski Piechotą do źródeł Orinoko",      
      "Wojciech Cejrowski Wyspa na Prerri",
      "Słownik Języka Polskiego",
      "Encyklopedia Historyczna",
      "Encyklopedia Biologiczna",
      "Encyklopedia Geograficzna",
      "Encyklopedia Język Polski",
      "Encyklopedia Fizyka",
      "Piraci z Karaibów Klątwa Czarnej Perły", 
      "Piraci z Karaibów Skrzynia Umarlaka",
      "Piraci z Karaibów Na krańcu Świata",
      "Piraci z Karaibów Na nieznanych wodach",
      "Piraci z Karaibów Zemsta Salazara", 
      "Pan Tadeusz", 
      "Konrad Wallenrod",
      "Ballady i romanse", 
      "Grażyna",
      "Dziady",
      "Oda do młodości", 
      "Świteź",
      "Pani Twardowska",
      "Quo vadis", 
      "Potop",
      "Ogniem i mieczem",
      "Krzyżacy",
      "W pustyni i w puszczy",
      "Pan Wołodyjowski",
      "Janko Muzykant",
      "Latarnik",
      "Hania",
      "Achaja",//inne
      "Pomnik Cesarzowej Achai",
      "Uczennica maga",
      "Kłamca",
      "Gambit Wielkopolskiego",
      "Nauka szachów",
      "Problem trzech ciał",
      "Mars Rafał Kosik",
      "Jesteś wędrówką Paulina Młynarska",
      "Otwórz oczy Rafał Gębura",
      "Mózg rządzi Kaja Nordengen",
      "Był sobie pies",
      "Andrzej Sapkowski Wiedźmin Tom 1",
      "Andrzej Sapkowski Wiedźmin Tom 2",
      "Andrzej Sapkowski Wiedźmin Tom 3",
      "Andrzej Sapkowski Wiedźmin Tom 4",
      "Andrzej Sapkowski Wiedźmin Tom 5",
      "Andrzej Sapkowski Wiedźmin Tom 6",
      "Andrzej Sapkowski Wiedźmin Tom 7",
      "Andrzej Sapkowski Wiedźmin Tom 8",
      "Andrzej Sapkowski Wiedźmin Tom 9",
      "Dla Ciebie lepiej jak zagrasz w gre.",
      "Koppel jest niemądry szansa na to to jest 1%",
      "Cudowny chłopak R.J. Palacio",
      "Stranger Things",
      "Felix, Net i Nika oraz gang niewidzialnych ludzi",
      "Felix, Net i Nika oraz Trzecia kuzynka",
      "Felix, Net i Nika oraz pułapka", //64 książki
      "Idź sobie lepiej zapaż heubatke",
      "Stephen King Jest krew... Zdobywca nagrody książka roku z kategori horror według https://lubimyczytac.pl/",
      "Stephen King Później",
      "Stephen King To",
      "Stephen King Bastion",
      "Stephen King Misery",
      "Położna z Auschwitz Magda Knedler Zdobywca nagrody książka roku z kategori historyczne według https://lubimyczytac.pl/",
      "Gorzko, gorzko Joanna Bator",
      "Powrót z Bambuko Katarzyna Nosowska",//73 książki
      "Ogarnij ten wielki, ekstremalny Challenge Ekipy",
      "tu miała być książka wersow ale jak zobaczyłem opinie 1,2 gwiazdki pomyślałem szanujmy się",//75
      "Biografia Adama Mickiewicza",
      "Niewidzialne życie Addie LaRue Victoria Schwab",
      "Była sobie rzeka",
      "10 minut i 38 skeund na tym dziwnym świecie",
      "Siedem sióstr",
      "Wyborny trup",//81
      "Kosmolisk",
      "Ktoś mnie pokochał",
      "Spalony",
      "Cień wiatru",
      "Gołąb i wąż",
      "Niech stanie się światłość",//87
      "Metro 2033",
      "Szklany tron",
      "Duma i uprzedzenie",//90
      "Czuła przewodniczka. Kobieca droga do siebie",
      "Obca",
      "Layla",
      "Zdążyć przed Panem Bogiem",
      "Służąca",//95
      "Włam się do mózgu",
      "Blood from Blood. Vito",
      "Dziewiąty dom",
      "Niespokojna krew",
      "Anna Karenina",//100
      "Magiczne drzewo Tom 1",
      "Magiczne drzewo Tom 2",
      "Magiczne drzewo Tom 3",
      "Magiczne drzewo Tom 4",
      "Magiczne drzewo Tom 5",
      "Magiczne drzewo Tom 6",
      "Magiczne drzewo Tom 7",
      "Magiczne drzewo Tom 8",
      "Magiczne drzewo Tom 9",
      "Magiczne drzewo Tom 10",
      "Magiczne drzewo Tom 11",
      "Magiczne drzewo Tom 12",
      "Folwarek Zwierzęcy",
    ];
    let response = choices[Math.floor(Math.random() * choices.length)];
    let embed = new Discord.MessageEmbed()
      .setTitle(`${response}`)
      .setColor("#e8c500")
      .setDescription('© PheaServices 2021')
      .setTimestamp();

    msg.channel.send(embed);
  });
}
if (msg.content === '.ciekawostka') {
  msg.channel.send("**Losowanie ciekawostki...**").then((m) => {
    let choices = [
      "Do wakacji pozostało tylko 2,62839289 miesiąca!",
      "W kasnynch w Las Vegas niema zegarów ani okien!",
      "Najbardziej zalesionym krajem świata jest Rosja (20%)!",
      "Arabia Saudyjska jest krajem bez rzek!",
      "W Chinach zakazane jest przytulanie drzew!",
      "Kobiety posiadają więcej kubków smakowych od mężczyzn.",
    ];
    let curiosity = choices[Math.floor(Math.random() * choices.length)];
    let embed = new Discord.MessageEmbed()
      .setTitle(`${curiosity}`)
      .setColor("#e8c500")
      .setDescription('© PheaServices 2021')
      .setTimestamp();

    msg.channel.send(embed);
  });
}
if (message.content === '.liczbaksiążek') {
    message.reply('W bazie danych mamy 113 książki.');
  }

});
client.login(`token`);
