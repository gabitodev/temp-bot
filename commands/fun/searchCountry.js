const { default: axios } = require('axios');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('buscar-pais')
    .setDescription('Busca un pais')
    .addStringOption(option => option
      .setName('nombre-pais')
      .setDescription('El nombre del pais a buscar')
      .setRequired(true),
    ),
  async execute(interaction) {
    const countryName = interaction.options.getString('nombre-pais');
    const { data } = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
    console.log(data);
    await interaction.reply('Chao!');
  },
};