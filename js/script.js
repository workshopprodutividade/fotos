// Lista das imagens (adicione os nomes das fotos que estão na pasta "fotos")
const imagens = [
  "foto (1).jpeg", "foto (2).jpeg", "foto (3).jpeg", "foto (4).jpeg", "foto (5).jpeg",
  "foto (6).jpeg", "foto (7).jpeg", "foto (8).jpeg", "foto (9).jpeg", "foto (10).jpeg",
  "foto (11).jpeg", "foto (12).jpeg", "foto (13).jpeg", "foto (14).jpeg", "foto (15).jpeg",
  "foto (16).jpeg", "foto (17).jpeg", "foto (18).jpeg", "foto (19).jpeg", "foto (20).jpeg",
  "foto (21).jpeg", "foto (22).jpeg", "foto (23).jpeg", "foto (24).jpeg", "foto (25).jpeg",
  "foto (26).jpeg", "foto (27).jpeg", "foto (28).jpeg", "foto (29).jpeg", "foto (30).jpeg",
  "foto (31).jpeg", "foto (32).jpeg", "foto (33).jpeg", "foto (34).jpeg", "foto (35).jpeg",
  "foto (36).jpeg", "foto (37).jpeg", "foto (38).jpeg", "foto (39).jpeg", "foto (40).jpeg",
  "foto (41).jpeg", "foto (42).jpeg", "foto (43).jpeg", "foto (44).jpeg", "foto (45).jpeg",
  "foto (46).jpeg", "foto (47).jpeg", "foto (48).jpeg", "foto (49).jpeg", "foto (50).jpeg",
  "foto (51).jpeg", "foto (52).jpeg", "foto (53).jpeg", "foto (54).jpeg", "foto (55).jpeg",
  "foto (56).jpeg", "foto (57).jpeg", "foto (58).jpeg", "foto (59).jpeg", "foto (60).jpeg",
  "foto (61).jpeg", "foto (62).jpeg", "foto (63).jpeg", "foto (64).jpeg", "foto (65).jpeg",
  "foto (66).jpeg", "foto (67).jpeg", "foto (68).jpeg", "foto (69).jpeg", "foto (70).jpeg",
  "foto (71).jpeg", "foto (72).jpeg", "foto (73).jpeg", "foto (74).jpeg", "foto (75).jpeg",
  "foto (76).jpeg", "foto (77).jpeg", "foto (78).jpeg", "foto (79).jpeg", "foto (80).jpeg",
  "foto (81).jpeg", "foto (82).jpeg", "foto (83).jpeg", "foto (84).jpeg", "foto (85).jpeg",
  "foto (86).jpeg", "foto (87).jpeg", "foto (88).jpeg", "foto (89).jpeg", "foto (90).jpeg",
  "foto (91).jpeg", "foto (92).jpeg", "foto (93).jpeg", "foto (94).jpeg", "foto (95).jpeg",
  "foto (96).jpeg", "foto (97).jpeg", "foto (98).jpeg", "foto (99).jpeg", "foto (100).jpeg",
  "foto (101).jpeg", "foto (102).jpeg", "foto (103).jpeg", "foto (104).jpeg", "foto (105).jpeg",
  "foto (106).jpeg", "foto (107).jpeg", "foto (108).jpeg", "foto (109).jpeg", "foto (110).jpeg",
  "foto (111).jpeg", "foto (112).jpeg", "foto (113).jpeg", "foto (114).jpeg", "foto (115).jpeg",
  "foto (116).jpeg", "foto (117).jpeg", "foto (118).jpeg", "foto (119).jpeg", "foto (120).jpeg",
  "foto (121).jpeg", "foto (122).jpeg", "foto (123).jpeg", "foto (124).jpeg", "foto (125).jpeg",
  "foto (126).jpeg", "foto (127).jpeg", "foto (128).jpeg", "foto (129).jpeg", "foto (130).jpeg",
  "foto (131).jpeg", "foto (132).jpeg", "foto (133).jpeg", "foto (134).jpeg", "foto (135).jpeg",
  "foto (136).jpeg", "foto (137).jpeg", "foto (138).jpeg", "foto (139).jpeg", "foto (140).jpeg",
  "foto (141).jpeg", "foto (142).jpeg", "foto (143).jpeg", "foto (144).jpeg", "foto (145).jpeg",
  "foto (146).jpeg", "foto (147).jpeg", "foto (148).jpeg", "foto (149).jpeg", "foto (150).jpeg",
  "foto (151).jpeg", "foto (152).jpeg", "foto (153).jpeg", "foto (154).jpeg", "foto (155).jpeg",
  "foto (156).jpeg", "foto (157).jpeg", "foto (158).jpeg", "foto (159).jpeg", "foto (160).jpeg",
  "foto (161).jpeg", "foto (162).jpeg", "foto (163).jpeg", "foto (164).jpeg", "foto (165).jpeg",
  "foto (166).jpeg", "foto (167).jpeg", "foto (168).jpeg", "foto (169).jpeg", "foto (170).jpeg",
  "foto (171).jpeg", "foto (172).jpeg", "foto (173).jpeg", "foto (174).jpeg", "foto (175).jpeg",
  "foto (176).jpeg", "foto (177).jpeg", "foto (178).jpeg", "foto (179).jpeg", "foto (180).jpeg",
  "foto (181).jpeg", "foto (182).jpeg", "foto (183).jpeg", "foto (184).jpeg", "foto (185).jpeg",
  "foto (186).jpeg", "foto (187).jpeg", "foto (188).jpeg", "foto (189).jpeg", "foto (190).jpeg",
  "foto (191).jpeg", "foto (192).jpeg", "foto (193).jpeg", "foto (194).jpeg", "foto (195).jpeg",
  "foto (196).jpeg", "foto (197).jpeg", "foto (198).jpeg", "foto (199).jpeg"
];


const thumbsContainer = document.getElementById("thumbs");
const mainImage = document.getElementById("mainImage");

// Função para trocar a foto principal
function mostrarImagem(src) {
  mainImage.src = `fotos/${src}`;
}

// Monta as miniaturas
imagens.forEach((img, index) => {
  const thumb = document.createElement("img");
  thumb.src = `fotos/${img}`;
  thumb.classList.add("img-fluid");
  thumb.addEventListener("click", () => mostrarImagem(img));
  thumbsContainer.appendChild(thumb);

  // Primeira imagem já vai para a principal
  if (index === 0) {
    mostrarImagem(img);
  }
});

