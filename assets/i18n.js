/* I18N — versão em inglês do site. O os.js carrega este arquivo só quando o idioma é inglês.
   Traduz textos e atributos da página (e o que aparecer depois, via MutationObserver).
   As chaves ficam sem emoji/símbolo no começo e sem pontuação no fim: "💾 Baixar PNG" usa a chave "Baixar PNG". */
(function () {
  const D = {
    // ---------- sistema / área de trabalho ----------
    'Iniciar': 'Start', 'Área de trabalho': 'Desktop', 'Tema': 'Theme', 'Temas': 'Themes', 'Trocar tema': 'Change theme', 'Programas Adobe': 'Adobe apps',
    'Papel de parede e proteção de tela': 'Wallpaper and screensaver', 'Papel de parede e proteção de tela…': 'Wallpaper and screensaver…', 'Chamar o Disquinho': 'Call Floppy',
    'Instalar como aplicativo': 'Install as an app', 'Idioma / Language': 'Language / Idioma', 'Idioma': 'Language', 'Meus arquivos': 'My files',
    'Minimizar': 'Minimize', 'Maximizar': 'Maximize', 'Fechar': 'Close', 'Atalhos da área de trabalho': 'Desktop shortcuts', 'Abre o site da Adobe': "Opens Adobe's website",
    'Arquivo': 'File', 'Editar': 'Edit', 'Exibir': 'View', 'Ajuda': 'Help', 'Formatar': 'Format', 'NOVO': 'NEW', 'Escolha a versão do Windows': 'Pick your Windows version',
    'Ferramentas gratuitas pra quem edita vídeo. Tudo roda no seu navegador: suas imagens não saem do computador': 'Free tools for video editors. Everything runs in your browser: your images never leave your computer',
    'Bem-vindo ao EdiTools!\n\nMova tudo: no computador, clique na barra de título de qualquer janela e arraste.\n\nRemovedor de fundo: tira o fundo de várias imagens de uma vez, com retoque no pincel.\n\nCriador de botões: monte o botão com o estilo que quiser e baixe em PNG transparente.\n\nSolte um arquivo em cima de um ícone pra abrir a ferramenta já com ele.\n\nTudo que você baixa fica em Meus arquivos, e de lá vai pra outra ferramenta com "Enviar para…".\n\nMenu Iniciar: todas as ferramentas, os programas da Adobe, papel de parede e idioma':
      'Welcome to EdiTools!\n\nMove things around: on a computer, click any window\'s title bar and drag.\n\nBackground remover: removes the background from many images at once, with brush touch-ups.\n\nButton maker: build a button in any style and download a transparent PNG.\n\nDrop a file on an icon to open that tool with it already loaded.\n\nEverything you download goes to My files, and from there to another tool with "Send to…".\n\nStart menu: all tools, Adobe apps, wallpaper and language',
    'dicas.txt - Bloco de Notas': 'tips.txt - Notepad', 'ajuda.txt - Bloco de Notas': 'help.txt - Notepad', 'lembrete.txt - Bloco de Notas': 'reminder.txt - Notepad', 'dicas_de_uso.txt - Bloco de Notas': 'how_to_use.txt - Notepad',
    'ajuda.txt': 'help.txt', 'leia-me.txt': 'readme.txt', 'como_instalar.txt': 'how_to_install.txt', 'como_tirar_o_print.txt': 'how_to_take_the_screenshot.txt', 'ferramentas.exe': 'tools.exe', 'temas.exe': 'themes.exe',
    'Propriedades de Vídeo': 'Display Properties', 'Papel de parede': 'Wallpaper', 'Proteção de tela': 'Screensaver', 'Aguardar': 'Wait', 'Visualizar': 'Preview', 'Cor sólida…': 'Solid color…', 'Minha imagem…': 'My image…',
    'Escolher imagem': 'Choose image', 'Preencher': 'Fill', 'Ajustar': 'Fit', 'Lado a lado': 'Tile', 'Texto do letreiro / logo': 'Marquee / logo text', 'Mostrar o Disquinho (ajudante de dicas)': 'Show Floppy (tips helper)',
    'Padrão do tema': 'Theme default', 'Verde-água clássico': 'Classic teal', 'Nuvens': 'Clouds', 'Pôr do sol vaporwave': 'Vaporwave sunset', 'Aurora': 'Aurora', 'Noite estrelada': 'Starry night', 'Xadrez': 'Checkers', 'Gramado': 'Grass hill', 'Preto': 'Black',
    'Nenhuma': 'None', 'Logo quicando': 'Bouncing logo', 'Campo estelar': 'Starfield', 'Linhas mágicas': 'Mystify', 'Letreiro': 'Marquee', 'Chuva de código': 'Code rain',
    'Próxima dica': 'Next tip', 'Esconder': 'Hide', 'Disquinho: clique pra ver uma dica': 'Floppy: click for a tip',
    'Baixado e guardado em Meus arquivos': 'Downloaded and saved in My files', 'Enviar para…': 'Send to…', 'Enviar para': 'Send to', 'Nenhuma ferramenta abre esse tipo de arquivo': 'No tool opens this kind of file',
    'Não abre esse arquivo': "Can't open this file", 'Copiado': 'Copied', 'Erro': 'Error', 'Aviso': 'Warning', 'Dica': 'Tip', 'Ops': 'Oops', 'Sem suporte': 'Not supported', 'Nada carregado': 'Nothing loaded', 'Sem áudio': 'No audio', 'Microfone': 'Microphone',
    'Erro do Sistema': 'System Error', 'Aviso do Sistema': 'System Warning', 'Erro na IA': 'AI error', 'Não deu': "Couldn't do it", 'Não deu pra copiar': "Couldn't copy",
    'Arraste as janelas pela barra de título pra organizar a tela': 'Drag windows by the title bar to arrange the screen',
    'Tudo que você baixa fica guardado em 📂 Meus arquivos. De lá dá pra mandar pra outra ferramenta': 'Everything you download is kept in 📂 My files. From there you can send it to another tool',
    'Depois de baixar, use "➡️ Enviar para…" pra abrir o resultado em outra ferramenta sem baixar de novo': 'After downloading, use "➡️ Send to…" to open the result in another tool without downloading again',
    'Na área de trabalho, solte um arquivo em cima de um ícone pra abrir a ferramenta já com ele': 'On the desktop, drop a file on an icon to open the tool with it',
    'Troque o tema no 🎨 da barra de tarefas: Windows 98, XP ou 7': 'Switch the theme with 🎨 on the taskbar: Windows 98, XP or 7',
    'Menu Iniciar › Papel de parede e proteção de tela pra deixar a área de trabalho com a sua cara': 'Start menu › Wallpaper and screensaver to make the desktop yours',
    'Dá pra instalar o site como aplicativo e usar até sem internet (Menu Iniciar › Instalar)': 'You can install the site as an app and use it even offline (Start menu › Install)',
    'Clique duas vezes… brincadeira, um clique já abre a ferramenta': 'Double-click… just kidding, one click opens the tool',
    'As ferramentas com a etiqueta NOVO acabaram de chegar': 'Tools tagged NEW just arrived',
    'Cole uma imagem com Ctrl+V que ela já entra na fila': 'Paste an image with Ctrl+V and it joins the queue',
    'No editor, o pincel "Restaurar" traz de volta partes que a IA apagou sem querer': 'In the editor, the "Restore" brush brings back parts the AI erased by mistake',
    'O modelo "Equilibrado" é um bom meio-termo entre velocidade e precisão': 'The "Balanced" model is a good mix of speed and accuracy',
    'Clique numa legenda da lista pra corrigir o texto ou o tempo': 'Click a caption in the list to fix its text or timing',
    'Exporte em WEBM transparente pra jogar a legenda por cima do vídeo no editor': 'Export a transparent WEBM to lay the captions over your video in the editor',
    'Escreva o roteiro como "A: mensagem" e "B: resposta". Cada linha vira uma mensagem': 'Write the script as "A: message" and "B: reply". Each line becomes a message',
    'Use o modo "Só as mensagens" com fundo transparente pra colocar a conversa por cima de outro vídeo': 'Use "Messages only" with a transparent background to put the chat over another video',
    'No Chrome: F12 › Ctrl+Shift+P › "Capture full size screenshot" tira o print da página inteira': 'In Chrome: F12 › Ctrl+Shift+P › "Capture full size screenshot" grabs the whole page',
    'Adicione paradas clicando no mapa da página à direita': 'Add stops by clicking the page map',
    'Linhas que começam com $ viram comandos. As outras são a saída': 'Lines starting with $ become commands. The rest is output',
    'Em "Animar digitação" o terminal vira vídeo, com os comandos sendo digitados': 'In "Animate" the terminal becomes a video with the commands being typed',
    'Use a aba "Ver no feed" pra conferir se o texto ainda dá pra ler pequeno': 'Use the "See in feed" tab to check the text is still readable when small',
    'Arraste as camadas direto na thumbnail. A alça no canto muda o tamanho': 'Drag layers right on the thumbnail. The corner handle resizes',
    'Funciona com vídeo também: o mockup é gravado enquanto o vídeo toca': 'Works with video too: the mockup is rendered frame by frame',
    'Fundo transparente + PNG = mockup pronto pra colocar em qualquer lugar': 'Transparent background + PNG = a mockup ready to drop anywhere',
    'Escolha um trecho curto (até 60 s) pra postar em Reels e Shorts': 'Pick a short clip (up to 60 s) for Reels and Shorts',
    'Coloque uma capa: ela aparece no centro do estilo circular': 'Add a cover: it shows in the middle of the circular style',
    'O efeito "Embaralhar" fica ótimo em títulos de tecnologia': 'The "Scramble" effect looks great on tech titles',
    'Atraso entre letras maior = efeito mais dramático': 'Bigger delay between letters = more dramatic effect',
    'Ligue "Travadinhas" pra barra parar em alguns pontos, igual carregamento de verdade': 'Turn on "Hiccups" so the bar stalls a few times, like a real loading bar',
    'Dá pra usar um botão feito no Criador de botões: exporte lá e use "Enviar para…"': 'You can use a button made in the Button maker: export it there and use "Send to…"',
    'Use fundo transparente e coloque o cronômetro por cima da live ou do vídeo': 'Use a transparent background and put the timer over your stream or video',
    'Os arquivos ficam só neste navegador. Limpar os dados do site apaga tudo': 'Files stay only in this browser. Clearing site data erases them',

    // ---------- nomes e descrições das ferramentas ----------
    'removedor_de_fundo.exe': 'background_remover.exe', 'tira o fundo de imagens com IA, direto no navegador': 'removes image backgrounds with AI, right in the browser',
    'legenda_automatica.exe': 'auto_captions.exe', 'legendas automáticas com IA, estilo TikTok': 'automatic AI captions, TikTok style',
    'criador_de_botoes.exe': 'button_maker.exe', 'monte um botão do seu jeito e baixe em PNG': 'build a button your way and download a PNG',
    'conversa_animada.exe': 'animated_chat.exe', 'vídeo de conversa de chat, mensagem por mensagem': 'chat conversation video, message by message',
    'gravador_de_scroll.exe': 'scroll_recorder.exe', 'vídeo de uma página inteira sendo rolada': 'video of a whole web page scrolling',
    'terminal.exe': 'terminal.exe', 'janela de terminal bonita em PNG, SVG ou vídeo': 'pretty terminal window as PNG, SVG or video',
    'thumbnail.exe': 'thumbnail.exe', 'monte thumbnails e veja como ficam no feed': 'build thumbnails and preview them in a feed',
    'mockups.exe': 'mockups.exe', 'prints e vídeos dentro de celular, notebook e navegador': 'screenshots and videos inside phones, laptops and browsers',
    'audiograma.exe': 'audiogram.exe', 'áudio vira vídeo com onda sonora animada': 'audio becomes a video with an animated waveform',
    'animacao_de_texto.exe': 'text_animation.exe', 'máquina de escrever, glitch, onda, quique e mais': 'typewriter, glitch, wave, bounce and more',
    'grafico_animado.exe': 'animated_chart.exe', 'colunas, linha, pizza e corrida de barras animadas': 'animated columns, lines, pies and bar races',
    'barra_de_progresso.exe': 'progress_bar.exe', 'barras de carregamento animadas': 'animated loading bars',
    'botao_inscreva_se.exe': 'subscribe_button.exe', 'botão de inscreva-se animado com cursor': 'animated subscribe button with cursor',
    'cronometro.exe': 'timer.exe', 'contagem regressiva e cronômetro em overlay': 'countdown and stopwatch overlay',
    'gerador_de_letras.exe': 'ransom_letters.exe', 'escreva com letras recortadas de revista': 'write with letters cut out of magazines',
    'dvdficar.exe': 'dvd_bounce.exe', 'sua logo quicando na tela de descanso do DVD': 'your logo bouncing like the DVD screensaver',
    'modulador_vhs.exe': 'vhs_modulator.exe', 'modulador_VHS.exe': 'VHS_modulator.exe', 'efeito de fita VHS em foto e vídeo': 'VHS tape effect on photos and videos',
    'texto_3d.exe': 'text_3d.exe', 'texto_3D.exe': 'text_3D.exe', 'textos em 3D com vários materiais': '3D text with many materials',
    'olho_de_peixe.exe': 'fisheye.exe', 'lente olho de peixe anos 90/2000': '90s/2000s fisheye lens',
    'camera_digital.exe': 'digital_camera.exe', 'câmera_digital_online.exe': 'online_digital_camera.exe', 'simula 8 câmeras digitais antigas': 'simulates 8 old digital cameras',
    'audio_analogico.exe': 'analog_audio.exe', 'audio_analógico.exe': 'analog_audio.exe', 'deixa seu áudio com cara de rádio, fita e VHS': 'makes your audio sound like radio, tape and VHS',
    'pixelador.exe': 'pixelator.exe', 'transforma imagens e vídeos em pixel art': 'turns images and videos into pixel art',
    'criador_de_popup.exe': 'popup_maker.exe', 'pop-ups estilo Windows antigo em PNG': 'old Windows-style pop-ups as PNG',
    'petpet.exe': 'petpet.exe', 'GIF de uma mãozinha fazendo carinho na sua imagem': 'GIF of a little hand petting your image',
    'contador_de_numeros.exe': 'number_counter.exe', 'vídeo de número subindo, com fundo transparente': 'counting-number video with a transparent background',
    'gradientes_animados.exe': 'animated_gradients.exe', 'gradientes que se mexem, exporta em vídeo': 'moving gradients, exported as video',
    'texturas_de_papel.exe': 'paper_textures.exe', 'texturas_de_papel_animadas.exe': 'animated_paper_textures.exe', 'texturas de papel animadas em stop motion': 'stop-motion animated paper textures',
    'tv_de_tubo.exe': 'crt_tv.exe', 'sua mídia passando numa TV de tubo': 'your media playing on a CRT TV',
    'scripts.exe': 'scripts.exe', 'scripts para After Effects': 'After Effects scripts',
    'meus_arquivos.exe': 'my_files.exe', 'tudo que você exportou fica guardado aqui': 'everything you exported is kept here',
    'links.exe': 'links.exe', 'links, conversor MP4 → MP3 e mais': 'links, MP4 → MP3 converter and more',
    'gerador_de_letras_recortadas.exe': 'ransom_letters_maker.exe', 'DVDficar_sua_logo.exe': 'DVD_your_logo.exe', 'meus_links.exe': 'my_links.exe', 'winamp_editools.exe': 'winamp_editools.exe',
    'conversor_mp4_mp3.exe': 'mp4_to_mp3.exe', 'conversor_mp4_to_mp3.exe': 'mp4_to_mp3.exe',

    // ---------- títulos das páginas ----------
    'Animação de texto': 'Text animation', 'Gráfico animado': 'Animated chart', 'Barra de progresso': 'Progress bar', 'Cronômetro': 'Timer', 'Botão de inscreva-se': 'Subscribe button', 'Terminal': 'Terminal',
    'Conversa animada': 'Animated chat', 'Gravador de scroll': 'Scroll recorder', 'Mockups': 'Mockups', 'Thumbnail': 'Thumbnail', 'Audiograma': 'Audiogram', 'Legenda automática': 'Auto captions',
    'Removedor de fundo': 'Background remover', 'Criador de botões': 'Button maker', 'Letras recortadas': 'Ransom letters', 'DVDficar': 'DVD bounce', 'Modulador VHS': 'VHS modulator',
    'Texto 3D': '3D text', 'Olho de peixe': 'Fisheye', 'Câmera digital': 'Digital camera', 'Áudio analógico': 'Analog audio', 'Pixelador': 'Pixelator', 'Criador de pop-up': 'Pop-up maker',
    'Petpet': 'Petpet', 'Contador de números': 'Number counter', 'Gradientes animados': 'Animated gradients', 'Texturas de papel': 'Paper textures', 'TV de tubo': 'CRT TV',
    'Scripts para After Effects': 'After Effects scripts', 'Links': 'Links',

    // ---------- comuns ----------
    'Home': 'Home', 'Personalizar': 'Customize', 'Personalizado': 'Custom', 'Modelos prontos': 'Presets', 'Modelos': 'Presets', 'Estilo': 'Style', 'Estilos': 'Styles', 'Estilos prontos': 'Ready-made styles', 'Visual': 'Look', 'Conteúdo': 'Content', 'Animar': 'Animate',
    'Exportar': 'Export', 'Exportação': 'Export', 'Gerar vídeo': 'Generate video', 'gerar vídeo': 'generate video', 'Repetir prévia': 'Replay preview', 'Prévia': 'Preview', 'prévia': 'preview', 'Avançado': 'Advanced', 'Ajustes': 'Settings',
    'MP4 (fundo sólido)': 'MP4 (solid background)', 'WEBM com transparência': 'WEBM with transparency', 'Sequência PNG (.zip, transparente)': 'PNG sequence (.zip, transparent)', 'Sequência PNG (.zip)': 'PNG sequence (.zip)',
    'Fundo transparente': 'Transparent background', 'fundo transparente': 'transparent background', 'Resolução': 'Resolution', '1080×1920 (vertical)': '1080×1920 (vertical)', '1080×1350 (feed)': '1080×1350 (feed)',
    'H.264, abre em qualquer lugar': 'H.264, plays anywhere', 'MP4 não guarda transparência: o fundo sai sólido. Use WEBM ou PNG': "MP4 can't store transparency: the background comes out solid. Use WEBM or PNG",
    'MP4 não guarda transparência: o fundo vai sair preto. Use WEBM ou PNG': "MP4 can't store transparency: the background will be black. Use WEBM or PNG",
    'WEBM VP9 com canal alfa: Premiere, After Effects e CapCut leem. Melhor no Chrome/Edge': 'WEBM VP9 with alpha: Premiere, After Effects and CapCut read it. Best in Chrome/Edge',
    'WEBM VP9 com canal alfa. Melhor no Chrome/Edge': 'WEBM VP9 with alpha. Best in Chrome/Edge',
    'Uma imagem por quadro, dentro de um .zip. Importe como sequência no editor': 'One image per frame inside a .zip. Import it as a sequence in your editor',
    'o download começa sozinho quando terminar': 'the download starts by itself when done', 'pronto! download iniciado': 'done! download started', 'compactando': 'zipping',
    'gravando em tempo real (não troque de aba)': "recording in real time (don't switch tabs)", 'codificando o áudio': 'encoding audio', 'pronto': 'done',
    'Não consegui gerar o vídeo nesse formato. Tente outro formato ou o Chrome/Edge': "Couldn't create the video in this format. Try another format or Chrome/Edge",
    'Fonte': 'Font', 'Peso': 'Weight', 'Normal': 'Normal', 'Negrito': 'Bold', 'Black': 'Black', 'Semi': 'Semibold', 'Tamanho': 'Size', 'Cor': 'Color', 'Cores': 'Colors', 'Fundo': 'Background', 'Gradiente': 'Gradient', 'gradiente': 'gradient',
    'Contorno': 'Outline', 'Cor do contorno': 'Outline color', 'Sombra': 'Shadow', 'Sombra / brilho': 'Shadow / glow', 'Brilho': 'Glow', 'Cor do brilho': 'Glow color', 'Alinhamento': 'Alignment', 'Centro': 'Center', 'Esquerda': 'Left', 'Direita': 'Right',
    'Tudo maiúsculo': 'All caps', 'Intensidade': 'Intensity', 'Velocidade': 'Speed', 'Duração (s)': 'Duration (s)', 'Duração': 'Duration', 'Segurar no fim (s)': 'Hold at the end (s)', 'Posição': 'Position', 'Em cima': 'Top', 'Embaixo': 'Bottom',
    'Embaixo à esquerda': 'Bottom left', 'Embaixo à direita': 'Bottom right', 'Largura': 'Width', 'Espessura': 'Thickness', 'Arredondamento': 'Roundness', 'Texto': 'Text', 'Título': 'Title', 'Subtítulo': 'Subtitle', 'Escuro': 'Dark', 'Claro': 'Light',
    'Escura': 'Dark', 'Clara': 'Light', 'Destaque': 'Accent', 'Caixa': 'Box', 'Tipo': 'Type', 'Moldura': 'Frame', 'Nenhum': 'None', 'nenhum': 'none', 'Automático': 'Automatic', 'Constante': 'Constant', 'Suave': 'Smooth',
    'Baixar PNG': 'Download PNG', 'Baixar': 'Download', 'Salvar': 'Save', 'Salvar PNG': 'Save PNG', 'Copiar': 'Copy', 'Apagar': 'Delete', 'Duplicar': 'Duplicate', 'Cancelar': 'Cancel', 'Sim': 'Yes', 'Não': 'No',
    'Parar': 'Stop', 'Pausar': 'Pause', 'Tocar': 'Play', 'Reproduzir': 'Play', 'Gravar': 'Record', 'Imagem': 'Image', 'Imagens': 'Images', 'Vídeos': 'Videos', 'Áudios': 'Audio', 'Outros': 'Other', 'Transparente': 'Transparent',
    'Ritmo': 'Pace', 'Formato': 'Format', 'Texto no fim': 'Text at the end', 'Texto em cima': 'Text on top', 'Exemplo': 'Example', 'Tela inteira': 'Full screen', 'Celular': 'Phone', 'Tablet': 'Tablet', 'Notebook': 'Laptop', 'Monitor': 'Monitor', 'Navegador': 'Browser',
    'Sem moldura': 'No frame', 'Cor de fora': 'Outside color', 'Hoje': 'Today', 'Você': 'You', 'online': 'online', 'Mensagem': 'Message', 'digitando…': 'typing…', 'digitando': 'typing', 'Estado': 'State',

    // ---------- animação de texto ----------
    'Atraso entre letras': 'Delay between letters', 'Duração de cada letra': 'Duration of each letter', 'Animar a saída também': 'Animate the exit too', 'Espaço entre letras': 'Letter spacing',
    'Sombra / brilho ': 'Shadow / glow', 'TEXTO ANIMADO': 'ANIMATED TEXT', 'Máquina de escrever': 'Typewriter', 'Quique': 'Bounce', 'Onda': 'Wave', 'Embaralhar': 'Scramble', 'Desfoque': 'Blur', 'Deslizar': 'Slide up',
    'Neon piscando': 'Flickering neon', 'Arco-íris': 'Rainbow', 'Explosão': 'Explode', 'Tremor': 'Shake', 'Virar': 'Flip', 'Surgir': 'Fade in',
    'Título de YouTube': 'YouTube title', 'pop amarelo com contorno': 'yellow pop with outline', 'Hacker': 'Hacker', 'embaralha e decifra': 'scrambles and decodes', 'letra por letra com cursor': 'letter by letter with a cursor',
    'liga piscando': 'flickers on', 'RGB separado e cortes': 'split RGB and slices', 'Onda fofa': 'Cute wave', 'letras balançando': 'wobbly letters', 'cai e quica': 'drops and bounces', 'surge do desfoque': 'comes out of the blur',
    'cores girando': 'cycling colors', 'letras voam até o lugar': 'letters fly into place', 'Cinema': 'Movie', 'VOCÊ NÃO VAI ACREDITAR': "YOU WON'T BELIEVE IT", 'ACESSO LIBERADO': 'ACCESS GRANTED', 'Era uma vez': 'Once upon a time', 'ABERTO': 'OPEN',
    'SINAL PERDIDO': 'NO SIGNAL', 'oiii gente': 'hiii guys', 'O FILME': 'THE MOVIE', 'FESTA': 'PARTY',
    'Escolha o efeito, escreva o texto e ajuste o tempo. Cada letra entra com um atraso em relação à anterior': 'Pick the effect, type the text and adjust the timing. Each letter enters slightly after the previous one',
    'Onda, glitch, neon, arco-íris e tremor': 'Wave, glitch, neon, rainbow and shake', 'continuam se mexendo enquanto o texto fica parado na tela': 'keep moving while the text holds on screen',
    'Pra colocar por cima do vídeo, exporte em': 'To put it over your video, export as', 'Pra colocar por cima do vídeo, exporte em WEBM transparente ou sequência PNG': 'To put it over your video, export a transparent WEBM or a PNG sequence',
    'WEBM transparente': 'transparent WEBM', 'ou': 'or', 'sequência PNG': 'PNG sequence',

    // ---------- barra de progresso ----------
    'Barra': 'Bar', 'Listrada': 'Striped', 'Blocos retrô': 'Retro blocks', 'Janela de cópia': 'Copy dialog', 'Anel': 'Ring', 'Pontinhos': 'Dots', 'Bateria': 'Battery', 'Linha fina': 'Thin line', 'Pixel 8-bit': '8-bit pixel',
    'De (%)': 'From (%)', 'Até (%)': 'To (%)', 'Rápido no começo': 'Fast at first', 'Lento no começo': 'Slow at first', 'Travadinhas': 'Hiccups', 'Carregando': 'Loading', 'Concluído': 'Done', 'Mostrar porcentagem': 'Show percentage',
    'Preenchimento': 'Fill', 'Segunda cor': 'Second color', 'Usar gradiente': 'Use gradient', 'Trilho': 'Track', 'Carregando jogo': 'Game loading', 'blocos verdes retrô': 'retro green blocks', 'LOADING': 'LOADING', 'PRESS START': 'PRESS START',
    'Copiando arquivos': 'Copying files', 'janela de sistema antiga': 'old system dialog', 'Cópia concluída': 'Copy complete', 'Download': 'Download', 'barra arredondada azul': 'rounded blue bar', 'Baixando': 'Downloading', 'Pronto': 'Ready',
    'círculo com porcentagem': 'circle with percentage', 'carregando a bateria': 'charging the battery', 'Carga completa': 'Fully charged', 'Em construção': 'Under construction', 'listras amarelas': 'yellow stripes', 'EM CONSTRUÇÃO': 'UNDER CONSTRUCTION', 'PRONTO': 'READY',
    '8-bit': '8-bit', 'quadradinhos de pixel': 'little pixel squares', 'NIVEL 1': 'LEVEL 1', 'GANHOU': 'YOU WIN', 'Linha no topo': 'Line on top', 'barrinha fina de vídeo': 'thin video progress line',
    'Escolha o estilo, de quanto até quanto a barra vai e a duração': 'Pick the style, where the bar starts and ends, and the duration',
    'fazem a barra parar e acelerar algumas vezes, igual carregamento de verdade': 'make the bar stall and speed up a few times, like a real loading bar',
    'Exporte com fundo transparente (WEBM ou PNG) pra usar como overlay': 'Export with a transparent background (WEBM or PNG) to use as an overlay',

    // ---------- gráfico animado ----------
    'Colunas': 'Columns', 'Barras deitadas': 'Horizontal bars', 'Linha': 'Line', 'Área': 'Area', 'Pizza': 'Pie', 'Rosca': 'Donut', 'Corrida': 'Race', 'Dados': 'Data',
    'Uma linha por item': 'One line per item', 'Nome = valor': 'Name = value', 'Vários valores separados por': 'Several values separated by', 'viram períodos (o gráfico anda de um pro outro). Uma linha começando com': 'become periods (the chart moves from one to the next). A line starting with',
    'dá nome aos períodos. Cor opcional no fim, tipo': 'names the periods. Optional color at the end, like', 'Meu gráfico': 'My chart', 'Subtítulo': 'Subtitle', 'Antes do número': 'Before the number', 'Depois do número': 'After the number', 'Casas decimais': 'Decimal places',
    'Números': 'Numbers', '1,2 mi (curto)': '1.2M (short)', 'Com sobra': 'Overshoot', 'Elástico': 'Elastic', 'Quicando': 'Bouncing', 'Ordem': 'Order', 'Como digitei': 'As typed', 'Maior primeiro': 'Largest first', 'Menor primeiro': 'Smallest first',
    'Um item de cada vez': 'One item at a time', 'Cores': 'Colors', 'Vibrante': 'Vivid', 'Pastel': 'Pastel', 'Neon': 'Neon', 'Tons de azul': 'Shades of blue', 'Pôr do sol': 'Sunset', 'Uma cor só': 'Single color', 'Cor principal': 'Main color',
    'Máx. de barras (corrida)': 'Max bars (race)', 'Linhas de grade': 'Grid lines', 'Mostrar valores': 'Show values', 'Legenda (pizza, rosca e linhas)': 'Legend (pie, donut and lines)', 'Linha curva': 'Curved line', 'Brilho neon': 'Neon glow', 'Total': 'Total',
    'Escreva os dados: Nome = valor': 'Type the data: Name = value', 'Vendas do semestre': 'Half-year sales', 'colunas, fundo claro': 'columns, light background', 'em milhares de reais': 'in thousands', 'Corrida das redes': 'Social media race', 'ranking que troca de lugar': 'ranking that swaps places',
    'Redes sociais mais usadas': 'Most used social networks', 'usuários por mês (milhões)': 'monthly users (millions)', 'Crescimento do canal': 'Channel growth', 'área neon': 'neon area', 'Inscritos no canal': 'Channel subscribers', 'Pesquisa': 'Survey', 'pizza com porcentagem': 'pie with percentages',
    'Pizza favorita': 'Favorite pizza', 'pesquisa com 500 pessoas': 'survey of 500 people', 'Tempo de tela': 'Screen time', 'rosca com total no meio': 'donut with the total in the middle', 'Meu dia no celular': 'My day on the phone', 'horas por dia': 'hours per day',
    'Ranking': 'Ranking', 'barras deitadas, maior primeiro': 'horizontal bars, largest first', 'Títulos de Copa do Mundo': 'World Cup titles', 'Duas linhas': 'Two lines', 'comparando dois itens': 'comparing two items', 'Visualizações': 'Views', 'mil por dia': 'thousand per day',
    'cores de PC antigo': 'old PC colors', 'STATUS DO HERÓI': 'HERO STATS',
    'Escolha o tipo de gráfico e escreva os dados, um item por linha': 'Pick the chart type and type the data, one item per line', 'Com vários valores': 'With several values',
    'cada número é um período: colunas, barras e pizza mudam de um pro outro, linha e área ganham uma linha por item e a': 'each number is a period: columns, bars and pie morph from one to the next, line and area get one line per item, and the',
    'vira aquele ranking que troca de posição': 'becomes that ranking where items swap places', 'Exporte com fundo transparente (WEBM ou PNG) pra colocar o gráfico por cima do seu vídeo': 'Export with a transparent background (WEBM or PNG) to lay the chart over your video',

    // ---------- cronômetro ----------
    'Regressiva': 'Countdown', 'Display digital': 'Digital display', 'Flip': 'Flip', 'Etiqueta': 'Label', 'Placar LED': 'LED scoreboard', 'Minutos': 'Minutes', 'Segundos': 'Seconds', 'Alerta nos últimos': 'Alert in the last',
    'Pulsar a cada segundo': 'Pulse every second', 'TEMPO': "TIME'S UP", 'Usar ao vivo (tela cheia)': 'Use live (full screen)', 'Usar ao vivo': 'Use live', 'Zerar': 'Reset', 'Sair': 'Exit', 'Continuar': 'Resume',
    'Lançamento': 'Launch', '10 → 0 com alerta': '10 → 0 with alert', 'AGORA': 'NOW', 'Bomba de filme': 'Movie bomb', 'display vermelho': 'red display', 'Flip clock': 'Flip clock', 'cartões virando': 'flipping cards',
    'Pausa do vídeo': 'Video break', 'anel com segundos': 'ring with seconds', 'VOLTAMOS': "WE'RE BACK", 'Já voltamos': 'Be right back', 'Live começa em': 'Stream starts in', 'A live começa em': 'The stream starts in', 'etiqueta com texto': 'label with text',
    'AO VIVO': 'LIVE', 'Placar': 'Scoreboard', 'cronômetro de jogo em LED': 'LED game clock', 'FIM DE JOGO': 'GAME OVER', 'Speedrun': 'Speedrun', 'centésimos de segundo': 'hundredths of a second', 'Caixa ': 'Box',
    'conta do tempo escolhido até zero': 'counts from the chosen time down to zero', 'conta de zero até o tempo escolhido': 'counts from zero up to the chosen time',
    'abre o cronômetro em tela cheia, contando de verdade: bom pra live, aula ou apresentação (capture a janela no OBS)': 'opens the timer full screen, counting for real: great for streams, classes or talks (capture the window in OBS)',

    // ---------- inscreva-se ----------
    'Canal': 'Channel', 'Mostrar foto e nome do canal': 'Show channel photo and name', 'Nome do canal': 'Channel name', 'Inscritos': 'Subscribers', 'Foto do canal': 'Channel photo', 'Tirar foto': 'Remove photo', 'Botões': 'Buttons',
    'Texto antes': 'Text before', 'Texto depois': 'Text after', 'Cor antes': 'Color before', 'depois': 'after', 'Clicar no sininho': 'Click the bell', 'Clicar no gostei': 'Click like', 'Usar meu botão (PNG)': 'Use my button (PNG)', 'Usar meu botão': 'Use my button',
    'Voltar ao botão padrão': 'Back to the default button', 'Dica: faça um botão no Criador de botões e use "Enviar para…" pra trazer ele pra cá': 'Tip: make a button in the Button maker and use "Send to…" to bring it here',
    'Estilo e animação': 'Style and animation', 'Vidro': 'Glass', 'Retrô (Windows)': 'Retro (Windows)', 'Sem cartão': 'No card', 'Cursor': 'Cursor', 'Seta': 'Arrow', 'Mãozinha': 'Hand', 'Sem cursor': 'No cursor', 'Sumir no final': 'Disappear at the end',
    'Verde (chroma key)': 'Green (chroma key)', 'Meu Canal': 'My Channel', '12,3 mil inscritos': '12.3K subscribers', 'Inscrever-se': 'Subscribe', 'Inscrito': 'Subscribed', 'INSCREVA-SE': 'SUBSCRIBE', 'INSCRITO ✓': 'SUBSCRIBED ✓', 'SE INSCREVA': 'SUBSCRIBE', 'INSCRITO': 'SUBSCRIBED',
    'Padrão escuro': 'Dark default', 'inscrever, sino e gostei': 'subscribe, bell and like', 'cartão branco': 'white card', 'transparente e moderno': 'transparent and modern', 'Retrô': 'Retro', 'botão do Windows 98': 'Windows 98 button',
    'Gamer': 'Gamer', 'pixel e neon': 'pixel and neon', 'Só o botão': 'Button only', 'sem cartão e sem canal': 'no card, no channel', 'subscribe + bell + like': 'subscribe + bell + like', 'suscribirse': 'subscribe (Spanish)',
    'O cursor entra, clica em': 'The cursor comes in, clicks', 'no sininho e no gostei. Desligue o que não quiser': 'the bell and like. Turn off what you don\'t want',
    'Já vem com': 'It comes with a', '(WEBM ou PNG). Se o seu editor não lê transparência, exporte em MP4 com fundo verde e use chroma key': "(WEBM or PNG). If your editor can't read transparency, export MP4 with a green background and use chroma key",
    'Quer o seu próprio botão? Clique em': 'Want your own button? Click', 'e escolha um PNG. O estado "inscrito" fica cinza automaticamente': 'and pick a PNG. The "subscribed" state turns gray automatically',


    // ---------- inscreva-se (estilo YouTube) ----------
    'Puxar do YouTube': 'Pull from YouTube', 'Link do canal': 'Channel link', 'Chave da API do YouTube': 'YouTube API key', 'Puxar foto, nome e inscritos': 'Pull photo, name and subscribers',
    'A chave fica salva só neste navegador. Sem ela, preencha os campos abaixo à mão': 'The key is saved only in this browser. Without it, fill in the fields below by hand',
    'Selo de verificado': 'Verified badge', 'Ativar o sininho (escolher "Todas")': 'Turn on the bell (pick "All")', 'Gostei (número)': 'Likes (number)', 'YouTube escuro': 'YouTube dark', 'YouTube claro': 'YouTube light',
    'Só os botões (sem cartão)': 'Buttons only (no card)', 'Idioma dos botões': 'Button language', 'Como pegar a chave da API': 'How to get the API key', 'chave_da_api.txt': 'api_key.txt', 'Buscando o canal': 'Looking up the channel',
    'O navegador não deixa um site ler a página do YouTube direto, então os dados vêm da': "Browsers don't let a site read YouTube's page directly, so the data comes from the", 'API oficial do YouTube': 'official YouTube API', ', que pede uma chave (é grátis)': ', which needs a key (free)', 'que pede uma chave (é grátis)': 'which needs a key (free)',
    'Entre em': 'Go to', 'e crie um projeto': 'and create a project', 'Em': 'In', 'APIs e serviços › Biblioteca': 'APIs & Services › Library', ', ative a': ', enable the', 'ative a': 'enable the', 'YouTube Data API v3': 'YouTube Data API v3',
    'Credenciais › Criar credenciais › Chave de API': 'Credentials › Create credentials › API key', ', copie a chave (começa com AIza)': ', copy the key (starts with AIza)', 'copie a chave (começa com AIza)': 'copy the key (starts with AIza)',
    'Cole aqui. Ela fica salva só no seu navegador e só é enviada pro próprio Google': "Paste it here. It's saved only in your browser and only sent to Google itself", 'Dica: em Credenciais, restrinja a chave à YouTube Data API v3': 'Tip: in Credentials, restrict the key to the YouTube Data API v3',
    'abre o menu do sininho e escolhe': 'opens the bell menu and picks', 'Todas': 'All', ', e depois clica no': ', then clicks', 'e depois clica no': 'then clicks', 'gostei': 'like',
    'link do seu canal': 'link to your channel', 'pra puxar a foto, o nome e os inscritos (precisa de uma chave grátis da API do YouTube)': 'to pull the photo, name and subscribers (needs a free YouTube API key)', 'Cole o': 'Paste the',
    'inscrever, sininho e gostei': 'subscribe, bell and like', 'Só inscrever + sininho': 'Subscribe + bell only', 'sem o gostei': 'without the like', 'Só os botões': 'Buttons only',
    'Não reconheci o link. Use algo como https://www.youtube.com/@seucanal': "I didn't recognize the link. Use something like https://www.youtube.com/@yourchannel", 'Cole a chave da API primeiro (veja "Como pegar a chave da API")': 'Paste the API key first (see "How to get the API key")',
    'Peguei o nome e os inscritos, mas a foto não carregou. Use "Foto do canal"': 'Got the name and subscribers, but the photo did not load. Use "Channel photo"', 'canal não encontrado': 'channel not found',
    'a chave da API é inválida': 'the API key is invalid', 'a cota diária da chave acabou': "the key's daily quota ran out", 'ative a YouTube Data API v3 no projeto da chave': "enable the YouTube Data API v3 in the key's project", '(o canal esconde os inscritos)': '(the channel hides its subscribers)',


    // ---------- fundo transparente / chat com IA ----------
    'Fundo transparente (grava em WEBM)': 'Transparent background (records WEBM)', 'Vídeo transparente (WEBM)': 'Transparent video (WEBM)', 'Fundo transparente (sem fundo)': 'Transparent background (none)',
    'Não consegui gerar o vídeo transparente. Tente o Chrome ou Edge': "Couldn't create the transparent video. Try Chrome or Edge",
    'Chat com IA': 'AI chat', 'Chat com IA (escuro)': 'AI chat (dark)', 'Chat com IA (claro)': 'AI chat (light)', 'resposta escrita aos poucos': 'answer typed out bit by bit', 'Assistente': 'Assistant',
    'Pensando…': 'Thinking…', 'Pensando': 'Thinking', 'Pergunte alguma coisa': 'Ask anything',

    // ---------- terminal ----------
    'Exportar PNG': 'Export PNG', 'Copiar imagem': 'Copy image', 'Título da janela': 'Window title', 'Comandos e saída': 'Commands and output', 'Prompt': 'Prompt', 'Antes do prompt': 'Before the prompt', 'ex: user@pc ~/app': 'e.g. user@pc ~/app',
    'Cursor piscando no fim': 'Blinking cursor at the end', 'Números de linha': 'Line numbers', 'Janela': 'Window', 'Igual ao tema': 'Match theme', 'Sem barra': 'No title bar', 'Fundo de trás': 'Backdrop', 'Tamanho da letra': 'Font size', 'Espaço em volta': 'Padding',
    'Largura mínima': 'Minimum width', 'Cantos': 'Corners', 'Qualidade do PNG': 'PNG quality', '2x (retina)': '2x (retina)', 'GitHub Escuro': 'GitHub Dark', 'GitHub Claro': 'GitHub Light', 'Solarized Escuro': 'Solarized Dark', 'Solarized Claro': 'Solarized Light',
    'Prompt do Windows': 'Windows Command Prompt', 'Vira vídeo: os comandos são digitados letra por letra e a saída aparece linha por linha': 'Becomes a video: commands are typed letter by letter and output appears line by line',
    'Velocidade de digitação': 'Typing speed', 'Atraso entre linhas de saída': 'Delay between output lines', 'Pausa depois do comando': 'Pause after a command', 'Ver animação': 'Play animation', 'Cor sólida': 'Solid color',
    'Linha com': 'Line with', 'no começo = comando': 'at the start = command', 'comentário. Cores': 'comment. Colors', '(green, red, yellow, blue, magenta, cyan, dim, bold). Linhas com ✓ ficam verdes e com ✗ ou "error" ficam vermelhas sozinhas': '(green, red, yellow, blue, magenta, cyan, dim, bold). Lines with ✓ turn green and lines with ✗ or "error" turn red automatically',
    'Escreva os comandos com': 'Write commands with', 'no começo da linha. O resto vira a saída do terminal': 'at the start of the line. The rest becomes terminal output',
    'sai em alta resolução (escolha 2x ou mais em Visual)': 'comes out in high resolution (pick 2x or more in Look)', 'fica nítido em qualquer tamanho': 'stays sharp at any size', 'cola direto no Discord, Notion, slides': 'pastes straight into Discord, Notion, slides',
    'Na aba': 'In the', 'o terminal vira vídeo com a digitação acontecendo': 'tab the terminal becomes a video with the typing happening',
    'A imagem está na área de transferência. É só colar (Ctrl+V)': "The image is on your clipboard. Just paste it (Ctrl+V)", 'Seu navegador bloqueou a cópia de imagem. Use Exportar PNG': 'Your browser blocked copying the image. Use Export PNG',
    'zsh — ~/projeto': 'zsh — ~/project',

    // ---------- conversa ----------
    'Conversa': 'Chat', 'Pessoas (A é você, fica à direita)': 'People (A is you, on the right)', 'Roteiro': 'Script', 'Uma mensagem por linha': 'One message per line', 'cria um separador': 'adds a divider',
    'manda a imagem 1. Mensagem só com emoji fica grande': 'sends image 1. Emoji-only messages show big', 'Adicionar imagem': 'Add image', 'Nome do chat': 'Chat name', 'Status': 'Status', 'Verde': 'Green', 'Roxo neon': 'Neon purple', 'Bate-papo 2000': '2000s chat room',
    'Enquadramento': 'Framing', 'Celular no meio': 'Phone in the middle', 'Só as mensagens': 'Messages only', 'Hora inicial': 'Start time', 'Tamanho do texto': 'Text size', 'Mostrar "digitando…"': 'Show "typing…"',
    'Suas mensagens são digitadas no campo de texto': 'Your messages are typed in the text field', 'Hora e ✓✓ de lida nas mensagens': 'Time and ✓✓ read receipts', 'Som de mensagem no vídeo': 'Message sound in the video',
    'Meme clássico': 'Classic meme', 'pergunta e plot twist': 'question and plot twist', 'Cliente e loja': 'Customer and store', 'atendimento rápido': 'quick support', 'Terror': 'Horror', 'mensagem que assusta': 'creepy message',
    'Grupo de amigos': 'Group of friends', '3 pessoas': '3 people', 'janela retrô': 'retro window', 'Mãe': 'Mom', 'Loja': 'Store', 'Desconhecido': 'Unknown', 'Rolê de sábado 🎤': 'Saturday hangout 🎤', 'Trocar foto': 'Change photo', 'Usar uma foto…': 'Use a photo…',
    'Escreva uma mensagem por linha começando com a letra da pessoa': "Write one message per line starting with the person's letter", 'A pessoa A é você (bolhas da direita)': 'Person A is you (bubbles on the right)',
    'Clique na foto de cada pessoa pra trocar por um emoji ou por uma imagem': "Click each person's photo to change it to an emoji or an image", 'WEBM transparente = conversa pronta pra colocar por cima de outro vídeo': 'transparent WEBM = a chat ready to lay over another video',
    'Os visuais são genéricos: não copiam nenhum aplicativo de verdade': "The looks are generic: they don't copy any real app", 'diz:': 'says:', 'está digitando…': 'is typing…',

    // ---------- scroll ----------
    'Como tirar o print da página inteira': 'How to take a full-page screenshot', 'Abrir print': 'Open screenshot', 'Página': 'Page', 'Endereço (aparece na barra do navegador)': 'Address (shows in the browser bar)', 'cole o link da página': 'paste the page link',
    'Clique pra adicionar uma parada': 'Click to add a stop', 'Clique no mapa da página pra adicionar paradas': 'Click the page map to add stops', 'Rolagem': 'Scrolling', 'Parado no começo (s)': 'Still at the start (s)', 'Parado no fim (s)': 'Still at the end (s)',
    'Movimento': 'Motion', 'Suave (acelera e freia)': 'Smooth (eases in and out)', 'Rodinha do mouse (aos trancos)': 'Mouse wheel (in steps)', 'Voltar pro topo no final': 'Scroll back to the top at the end', 'Mostrar barra de rolagem': 'Show scrollbar',
    'Tamanho na tela': 'Size on screen', 'Solte aqui o print da página inteira': 'Drop the full-page screenshot here', 'ou clique pra escolher (PNG, JPG ou WEBP)': 'or click to choose (PNG, JPG or WEBP)',
    'Ainda não tem o print? Veja "Como tirar o print" no topo': 'No screenshot yet? See "How to take a full-page screenshot" at the top', 'Ver com a página de exemplo': 'Try it with the sample page', 'parar': 'stop for',
    'O navegador não deixa um site gravar outro site': "Browsers don't let one site record another site", 'então o jeito é tirar um print da página inteira e trazer pra cá': 'so the way to do it is to take a full-page screenshot and bring it here',
    'abra a página, aperte': 'open the page, press', 'digite': 'type', 'e escolha': 'and choose', 'Página inteira': 'Full page', 'clique com o botão direito na página ›': 'right-click the page ›', 'Fazer captura de tela': 'Take Screenshot', 'Salvar página inteira': 'Save full page',
    'print com rolagem (Android: "Capturar mais"; iPhone no Safari: "Página inteira")': 'scrolling screenshot (Android: "Capture more"; iPhone in Safari: "Full Page")',
    'Antes do print, role a página até o fim uma vez pra carregar todas as imagens. Feche avisos de cookies': 'Before the screenshot, scroll to the bottom once so every image loads. Close cookie banners', 'Celular': 'Phone',

    // ---------- mockups ----------
    'Abrir imagem ou vídeo': 'Open image or video', 'Aparelho': 'Device', 'Imagem na tela': 'Image on screen', 'Ajustar inteira': 'Fit whole image', 'Deitado (horizontal)': 'Sideways (landscape)', 'Endereço / legenda': 'Address / caption',
    'Girar': 'Rotate', 'Mover ↔': 'Move ↔', 'Mover ↕': 'Move ↕', 'Reflexo no vidro': 'Glass reflection', 'Fundo e texto': 'Background and text', 'Desfoque da própria imagem': 'Blur of the image itself', 'Cor do texto': 'Text color',
    'Tamanho da imagem final': 'Final image size', 'Polaroid': 'Polaroid', 'TV antiga': 'Old TV', 'Relógio': 'Watch', 'Prata': 'Silver', 'Dourado': 'Gold', 'Branco': 'White', 'Azul': 'Blue', 'verão 2026 ☀️': 'summer 2026 ☀️',
    'Solte uma imagem ou vídeo aqui': 'Drop an image or video here', 'ou clique pra escolher. Também dá pra colar com Ctrl+V': 'or click to choose. You can also paste with Ctrl+V',
    'Abra um print ou um vídeo e escolha o aparelho. A imagem preenche a tela do aparelho sozinha': "Open a screenshot or video and pick a device. The image fills the device's screen automatically",
    'PNG = mockup pronto pra usar em qualquer arte': 'PNG = a mockup ready for any design', 'Com vídeo, aparece a opção de': 'With a video, you get the option to', 'o mockup é montado quadro a quadro, com o áudio original': 'the mockup is rendered frame by frame, with the original audio',

    // ---------- thumbnail ----------
    'Baixar PNG ': 'Download PNG', 'JPG (até 2 MB)': 'JPG (up to 2 MB)', 'Camadas': 'Layers', 'Ver no feed': 'See in feed', 'Emoji': 'Emoji', 'Círculo': 'Circle', 'Trazer pra frente': 'Bring forward', 'Mandar pra trás': 'Send backward',
    'Propriedades': 'Properties', 'Título do vídeo': 'Video title', 'Duração ': 'Duration', 'Tema escuro': 'Dark theme', 'Mostrar área do tempo do vídeo': 'Show video length badge area', 'Grade de terços': 'Rule of thirds grid',
    'Arraste pra mover · alça no canto = tamanho · Delete apaga': 'Drag to move · corner handle = size · Delete removes', 'Testei TODAS as ferramentas e olha no que deu': 'I tested EVERY tool and look what happened',
    'Confira se dá pra ler o texto na miniatura pequena e se nada importante fica embaixo do tempo do vídeo (canto inferior direito)': "Check the text still reads on the small thumbnail and nothing important hides under the video length (bottom right)",
    'Os modelos trocam as camadas. As imagens viram espaços cinza: clique e use "Trocar imagem"': 'Presets replace the layers. Images become gray placeholders: click one and use "Change image"',
    'Imagem de fundo': 'Background image', 'Desfoque da imagem': 'Image blur', 'Escurecer': 'Darken', 'Trocar imagem': 'Change image', 'Usar como fundo': 'Use as background', 'Contorno (figurinha)': 'Outline (sticker)',
    'Espelhar': 'Mirror', 'Caixa atrás do texto': 'Box behind text', 'Cor da caixa': 'Box color', 'Espaço entre linhas': 'Line spacing', 'Curva': 'Curve', 'Altura': 'Height', 'Borda branca': 'White border', 'Borda': 'Border', 'Cor da borda': 'Border color',
    'Reação': 'Reaction', 'pessoa à direita, texto grande': 'person on the right, big text', 'Antes x Depois': 'Before vs After', 'tela dividida': 'split screen', 'Top lista': 'Top list', 'número gigante': 'giant number', 'Tutorial': 'Tutorial',
    'print + círculo + seta': 'screenshot + circle + arrow', 'Podcast': 'Podcast', 'dois convidados e título': 'two guests and a title', 'Vlog': 'Vlog', 'foto de fundo e texto embaixo': 'background photo and text below',
    'TEXTO AQUI': 'TEXT HERE', 'NÃO\nACREDITO': "NO\nWAY", 'ANTES': 'BEFORE', 'DEPOIS': 'AFTER', 'COISAS QUE\nNINGUÉM TE CONTA': 'THINGS NOBODY\nTELLS YOU', 'FÁCIL': 'EASY', '"ISSO MUDOU TUDO"': '"THIS CHANGED EVERYTHING"', 'UM DIA EM\nLISBOA': 'A DAY IN\nLISBON',
    'Página inicial': 'Home page', 'Ao lado do vídeo': 'Next to the video', 'No celular': 'On mobile', 'Outro vídeo qualquer': 'Some other video', 'Vídeo do concorrente com título longo': "A competitor's video with a long title", 'Mais um vídeo': 'Another video',
    'Vídeo recomendado': 'Recommended video', 'Tutorial de alguma coisa': 'A tutorial about something', 'Outro canal · 340 mil visualizações': 'Another channel · 340K views', 'Fundo': 'Background',
    'Adicione imagens, textos, emojis, setas e círculos. Clique numa camada pra editar e arraste direto na thumbnail': 'Add images, text, emojis, arrows and circles. Click a layer to edit it and drag it right on the thumbnail',
    'Recortou alguém no': 'Cut someone out in the', 'Use "Enviar para… › thumbnail" e a pessoa já entra como camada. Ligue o': 'Use "Send to… › thumbnail" and the person comes in as a layer. Turn on the', 'contorno branco': 'white outline', 'pra ficar com cara de figurinha': 'for a sticker look',
    'mostra a thumbnail do tamanho que as pessoas veem, ao lado de outras': 'shows the thumbnail at the size people see it, next to others', 'O YouTube aceita até 2 MB: o botão': 'YouTube accepts up to 2 MB: the', 'ajusta a qualidade sozinho pra caber': 'button adjusts the quality to fit',
    'trocar imagem': 'change image',

    // ---------- audiograma ----------
    'Abrir áudio': 'Open audio', 'nenhum áudio carregado': 'no audio loaded', 'Trecho': 'Clip', 'Começa em (s)': 'Starts at (s)', 'Reels e Shorts: até 60 s funciona bem': 'Reels and Shorts: up to 60 s works well', 'Barras': 'Bars', 'Espelhado': 'Mirrored',
    'Circular': 'Circular', 'Pontos': 'Dots', 'Linha do tempo': 'Timeline', 'Textos e capa': 'Text and cover', 'Capa': 'Cover', 'Tirar capa': 'Remove cover', 'Capa desfocada no fundo': 'Blurred cover in the background', 'Barra de tempo': 'Time bar', 'Barra + tempo': 'Bar + time',
    'Sensibilidade': 'Sensitivity', 'Quantidade de barras': 'Number of bars', 'Solte um áudio aqui': 'Drop an audio file here', 'MP3, WAV, M4A, OGG… ou um vídeo (usa o som dele)': 'MP3, WAV, M4A, OGG… or a video (uses its sound)', 'Episódio 42': 'Episode 42', 'Meu Podcast': 'My Podcast',
    'Abra o áudio, escolha o trecho e o estilo da onda. O vídeo sai com o som junto': 'Open the audio, pick the clip and the wave style. The video comes out with the sound', 'A capa aparece no meio no estilo': 'The cover shows in the middle in the', 'e em cima nos outros': 'style and on top in the others',
    'O vídeo é feito quadro a quadro e a onda é calculada do próprio arquivo, então sai igual à prévia': 'The video is made frame by frame and the wave is computed from the file itself, so it matches the preview', 'Abra um áudio primeiro': 'Open an audio file first',

    // ---------- legenda ----------
    'Abrir vídeo ou áudio': 'Open video or audio', 'Importar SRT': 'Import SRT', 'Transcrever': 'Transcribe', 'Idioma falado': 'Spoken language', 'Português': 'Portuguese', 'Inglês': 'English', 'Espanhol': 'Spanish', 'Francês': 'French', 'Italiano': 'Italian', 'Alemão': 'German', 'Japonês': 'Japanese',
    'Detectar sozinho': 'Detect automatically', 'Modelo da IA': 'AI model', 'Rápido (menor)': 'Fast (smallest)', 'Equilibrado': 'Balanced', 'Preciso (maior)': 'Accurate (largest)', 'Gerar legendas': 'Generate captions',
    'abra um vídeo ou áudio pra começar': 'open a video or audio file to start', 'Roda no seu computador: o áudio não vai pra servidor nenhum. Na primeira vez o modelo é baixado (de uns 40 MB no Rápido até 500 MB no Preciso) e depois fica guardado no navegador': 'Runs on your computer: the audio never goes to a server. The model downloads the first time (from about 40 MB for Fast up to 500 MB for Accurate) and then stays in your browser',
    'Palavras por legenda': 'Words per caption', 'Linhas no máximo': 'Max lines', 'As legendas aparecem aqui. Clique numa pra ir até ela e edite o texto à vontade': 'Captions show up here. Click one to jump to it and edit the text freely', 'Legenda aqui': 'Caption here',
    'Mover tudo (s)': 'Shift all (s)', 'Número negativo adianta': 'Negative numbers move earlier', 'Animação': 'Animation', 'Pop na palavra falada': 'Pop on the spoken word', 'Legenda pulando': 'Bouncing caption', 'Karaokê (preenche)': 'Karaoke (fills)', 'Palavra por palavra': 'Word by word',
    'Aparecer suave': 'Soft fade', 'Sem animação': 'No animation', 'Maiúsculas': 'Case', 'TUDO MAIÚSCULO': 'ALL CAPS', 'Como foi falado': 'As spoken', 'tudo minúsculo': 'all lowercase', 'Altura na tela': 'Height on screen', 'Largura máxima': 'Max width',
    'Palavra falada': 'Spoken word', 'Destacar a palavra falada': 'Highlight the spoken word', 'Fundo da palavra': 'Word background', 'Caixinha atrás da palavra falada': 'Little box behind the spoken word', 'Caixa atrás': 'Box behind', 'Opacidade da caixa': 'Box opacity',
    'Baixar .SRT': 'Download .SRT', 'O que vai no vídeo': "What goes in the video", 'Vídeo com a legenda gravada': 'Video with burned-in captions', 'Só a legenda (pra pôr por cima no editor)': 'Captions only (to overlay in your editor)',
    'Só a legenda: use WEBM ou PNG pra sair transparente. Em MP4 o fundo sai verde (chroma key)': 'Captions only: use WEBM or PNG for transparency. In MP4 the background is green (chroma key)', 'O vídeo é montado quadro a quadro, com o som original': 'The video is rendered frame by frame, with the original sound',
    'Solte um vídeo ou áudio aqui': 'Drop a video or audio file here', 'Destaque amarelo': 'Yellow highlight', 'a palavra falada fica amarela': 'the spoken word turns yellow', 'Uma palavra': 'One word', 'gigante, uma por vez': 'huge, one at a time', 'Caixinha na palavra': 'Box on the word',
    'fundo colorido na palavra falada': 'colored background on the spoken word', 'Karaokê': 'Karaoke', 'preenche enquanto fala': 'fills as it is spoken', 'Clássico': 'Classic', 'branco com contorno, embaixo': 'white with outline, at the bottom', 'Caixa preta': 'Black box', 'estilo legenda de TV': 'TV subtitle style',
    'Neon': 'Neon', 'brilho rosa': 'pink glow', 'Minimal': 'Minimal', 'pequena e discreta': 'small and subtle', 'pixel com verde': 'pixel with green', 'Cartoon': 'Cartoon', 'Bangers colorida': 'colorful Bangers',
    'Abra o vídeo e clique em': 'Open the video and click', 'A IA (Whisper) escuta o áudio e marca o tempo de cada palavra': 'The AI (Whisper) listens to the audio and times each word',
    'Corrija o texto na lista. Se mudar o número de palavras, o tempo é redistribuído dentro da legenda': 'Fix the text in the list. If the number of words changes, timing is spread across the caption', 'Em': 'In', 'você muda tudo; em': 'you change everything; in', 'tem visuais prontos': 'there are ready-made looks',
    'Só a legenda': 'Captions only', 'em WEBM ou PNG sai com fundo transparente, pra colocar por cima do vídeo no Premiere, After, CapCut': 'as WEBM or PNG comes out transparent, to lay over the video in Premiere, After Effects, CapCut',
    'monta o vídeo quadro a quadro com o som original. Vídeos longos demoram alguns minutos': 'renders the video frame by frame with the original sound. Long videos take a few minutes',
    'Abra um vídeo ou áudio primeiro': 'Open a video or audio file first', 'Gere ou importe as legendas primeiro': 'Generate or import captions first', 'Nenhuma legenda ainda': 'No captions yet', 'lendo o áudio': 'reading the audio', 'preparando o áudio': 'preparing the audio',
    'esse arquivo não tem áudio que eu consiga ler': "this file has no audio I can read", 'erro ao iniciar a IA': 'error starting the AI', 'Não consegui transcrever. Tente o modelo "Rápido" ou recarregue a página': 'Couldn\'t transcribe. Try the "Fast" model or reload the page', 'Início': 'Start', 'Fim': 'End', 'Posição ': 'Position',
    'nova legenda': 'new caption', 'Foto': 'Photo', 'Segundos ': 'Seconds',

    // ---------- meus arquivos ----------
    'Todos os arquivos': 'All files', 'Guardar um arquivo': 'Keep a file', 'Limpar tudo': 'Clear all', 'Filtrar': 'Filter', 'Tudo que você baixa nas ferramentas fica guardado aqui,': 'Everything you download in the tools is kept here,', 'Tudo que você baixa nas ferramentas fica guardado aqui': 'Everything you download in the tools is kept here',
    'só neste navegador': 'only in this browser', 'Use': 'Use', 'pra abrir um arquivo direto em outra ferramenta': 'to open a file directly in another tool', 'Nenhum arquivo ainda': 'No files yet', 'Nada desse tipo por aqui': 'Nothing of this kind here',
    'Exporte algo em qualquer ferramenta, ou arraste um arquivo pra cá': 'Export something in any tool, or drag a file here', 'Baixar de novo': 'Download again', 'Enviar para outra ferramenta': 'Send to another tool', 'Enviar': 'Send',
    'Apagar todos os arquivos guardados neste navegador? Isso não dá pra desfazer': 'Delete every file kept in this browser? This cannot be undone', 'Apagar tudo': 'Delete all',

    // ---------- ferramentas antigas ----------
    'Arraste imagens aqui': 'Drag images here', 'Solte várias imagens de uma vez: elas entram numa fila': 'Drop many images at once: they join a queue', 'Baixar todas (.zip)': 'Download all (.zip)', 'Limpar lista': 'Clear list', 'Retocar': 'Touch up', 'Concluir': 'Done', 'Pincel': 'Brush',
    'Apagar (E)': 'Erase (E)', 'Restaurar (R)': 'Restore (R)', 'Restaurar': 'Restore', 'Desfazer (Ctrl+Z)': 'Undo (Ctrl+Z)', 'Desfazer': 'Undo', 'Ajustar à tela (0)': 'Fit to screen (0)', 'Voltar pro recorte da IA': 'Back to the AI cutout', 'Voltar pro original da IA': 'Back to the AI original',
    'Roda do mouse: zoom · Espaço ou botão do meio + arrastar: mover · [ ] tamanho do pincel': 'Mouse wheel: zoom · Space or middle button + drag: pan · [ ] brush size', 'IA pronta': 'AI ready', 'Falha ao carregar a IA. Verifique a internet e recarregue': 'Failed to load the AI. Check your connection and reload',
    'A IA (RMBG-1.4) roda no seu navegador. Na primeira vez ela é baixada (~45 MB) e fica em cache': 'The AI (RMBG-1.4) runs in your browser. It downloads once (~45 MB) and stays cached', 'Formato não suportado': 'Unsupported format', 'Erro ao processar': 'Processing error',
    'Comparação': 'Comparison', 'Ver original (segure)': 'See original (hold)', 'resultado': 'result', 'retocar recorte': 'touch up cutout', 'pra corrigir o recorte com o pincel': 'to fix the cutout with the brush', 'remove o que sobrou': 'removes leftovers', 'traz de volta partes que a IA apagou': 'brings back parts the AI erased',
    'Texto do botão': 'Button text', 'Ícone': 'Icon', 'Emoji / símbolo': 'Emoji / symbol', 'Tamanho do ícone': 'Icon size', 'Forma': 'Shape', 'Pílula': 'Pill', 'Formato pílula (todo redondo)': 'Pill shape (fully round)', 'Borda e 3D': 'Border and 3D', 'Espessura da borda': 'Border thickness',
    'Profundidade 3D': '3D depth', 'Cor da lateral 3D': '3D side color', 'Cor da sombra': 'Shadow color', 'Desfoque da sombra': 'Shadow blur', 'Brilho (gloss)': 'Gloss', 'Brilho / neon': 'Glow / neon', 'Cor do neon (glow)': 'Neon color (glow)', 'Força do neon': 'Neon strength',
    'Mouse em cima': 'Hover', 'Pressionado': 'Pressed', 'pressionado': 'pressed', '3 estados (.zip)': '3 states (.zip)', 'Passe o mouse e clique na prévia pra ver o botão': 'Hover and click the preview to see the button', 'Passe o mouse e clique pra ver os estados': 'Hover and click to see the states',
    'Prévia em fundo escuro': 'Preview on a dark background', 'Importar fonte (.TTF / .OTF)': 'Import font (.TTF / .OTF)', 'Importar fonte (.ttf / .otf)': 'Import font (.ttf / .otf)', 'Sortear cores': 'Random colors', 'Itálico': 'Italic', 'Espaçamento letras': 'Letter spacing', 'Espaço lateral': 'Horizontal padding',
    'Espaço vertical': 'Vertical padding', 'Altura mínima': 'Minimum height', 'Cor base': 'Base color', 'Cor 1': 'Color 1', 'Cor 2': 'Color 2', 'Gradiente linear': 'Linear gradient', 'Gradiente radial': 'Radial gradient', 'Ângulo do gradiente': 'Gradient angle', 'Ângulo da luz (sombra)': 'Light angle (shadow)',
    'Cor da sombra do texto': 'Text shadow color', 'Como criar o seu botão': 'How to make your button', 'ajuda - criador de botões': 'help - button maker', 'O PNG sai com fundo transparente, no dobro da resolução da prévia': 'The PNG comes out transparent at twice the preview resolution',
    'baixa normal, hover e pressionado de uma vez, pronto pra animar': 'downloads normal, hover and pressed at once, ready to animate', 'Botões personalizados (separados por vírgula)': 'Custom buttons (comma-separated)', 'Aceitar,Recusar,Talvez': 'Accept,Decline,Maybe', 'Sim,Não': 'Yes,No',
    'Relevo clássico (Windows 98)': 'Classic bevel (Windows 98)', 'Plástico brilhante': 'Glossy plastic', 'Brutalista': 'Brutalist', 'Web 2.0': 'Web 2.0', 'Flat': 'Flat', 'Chanfro': 'Bevel', 'Download grátis': 'Free download', 'FAÇA UPLOAD': 'UPLOAD', 'Upload': 'Upload', 'Começar': 'Start', 'PLAY ▶': 'PLAY ▶',
    'Duplo clique no nome de um controle volta ele pro padrão': "Double-click a control's name to reset it", 'Resetar': 'Reset', 'Resetar configs': 'Reset settings', 'Reset individual': 'Individual reset',
    'Gerar': 'Generate', 'Sortear recortes de novo': 'Reshuffle cutouts', 'Animação (stop motion)': 'Animation (stop motion)', 'Stop Motion': 'Stop Motion', 'Stop Motion (só treme)': 'Stop Motion (shake only)', 'Pisca-pisca': 'Flicker', 'Pisca-pisca (só troca)': 'Flicker (swap only)',
    'Caos': 'Chaos', 'Caos (troca + treme)': 'Chaos (swap + shake)', 'Trocas por segundo': 'Swaps per second', 'Papel colorido (fundo)': 'Colored paper (background)', 'Bagunça (rotação)': 'Messiness (rotation)', 'Fundo verde': 'Green background', 'Fundo verde (chroma key)': 'Green background (chroma key)',
    'Vídeo (fundo verde)': 'Video (green background)', 'Foto (PNG)': 'Photo (PNG)', 'Sem fundo': 'No background', 'Nenhum texto detectado! Digite alguma coisa antes de gerar': 'No text found! Type something before generating', 'clique e arraste qualquer letra pra ajustar a posição antes de exportar': 'click and drag any letter to adjust its position before exporting',
    'fica parado, mas troca os recortes': 'stays still but swaps cutouts', 'só treme, mantendo a mesma letra': 'only shakes, keeping the same letter', 'troca os recortes e treme ao mesmo tempo': 'swaps cutouts and shakes at the same time', 'Bem-vindo ao gerador retrô': 'Welcome to the retro generator',
    'escreva aqui': 'type here', 'Carregar sua logo (PNG)': 'Load your logo (PNG)', 'Upload logo': 'Upload logo', 'Logo': 'Logo', 'Logo personalizada': 'Custom logo', 'Cor dinâmica': 'Dynamic color', 'Cor dinâmica (muda a cada batida)': 'Dynamic color (changes on every hit)', 'Contar batidas no canto 👀': 'Count corner hits 👀',
    'Rastro': 'Trail', 'Efeito rastro': 'Trail effect', 'Carregue sua logo e ela vai quicar pela tela igual descanso de DVD': 'Load your logo and it will bounce around like the DVD screensaver', 'pinta a logo de uma cor nova a cada batida (funciona melhor em logo de uma cor só)': 'paints the logo a new color on every hit (works best with single-color logos)',
    'ajuste o tamanho na barra ou suba sua própria logo': 'adjust the size with the slider or upload your own logo', 'Duração da gravação (fotos)': 'Recording length (photos)', 'Duração (para fotos)': 'Duration (for photos)',
    'Abrir foto ou vídeo': 'Open photo or video', 'Abrir foto/vídeo': 'Open photo/video', 'Abrir mídia': 'Open media', 'Carregar mídia': 'Load media', 'Arquivo de mídia': 'Media file', 'Mídia': 'Media', 'Abra uma foto ou vídeo': 'Open a photo or video', 'clique, arraste ou cole uma foto ou vídeo': 'click, drag or paste a photo or video', 'clique, arraste ou cole aqui': 'click, drag or paste here',
    'Gravar vídeo': 'Record video', 'Gravar (REC)': 'Record (REC)', 'Parar gravação': 'Stop recording', 'Iniciar gravação': 'Start recording', 'Gravação': 'Recording', 'Salvar imagem': 'Save image', 'Renderizar & salvar': 'Render & save', 'Renderizar & salvar PNG': 'Render & save PNG', 'Renderizar (.PNG)': 'Render (.PNG)',
    'Áudio: ON': 'Audio: ON', 'Áudio: OFF': 'Audio: OFF', 'Carregue uma foto ou vídeo primeiro': 'Load a photo or video first', 'Seu navegador não grava vídeo. Tente o Chrome ou Edge': "Your browser can't record video. Try Chrome or Edge", 'Seu navegador não grava vídeo. Use Chrome ou Edge': "Your browser can't record video. Use Chrome or Edge",
    'A gravação acontece em tempo real: deixe a aba aberta até terminar': 'Recording happens in real time: keep the tab open until it finishes', 'o efeito roda em tempo real e você pode gravar o resultado': 'the effect runs in real time and you can record the result', 'Configurações de efeito': 'Effect settings',
    'Textura VHS': 'VHS texture', 'Fita VHS + ruído': 'VHS tape + noise', 'Ruído magnético': 'Magnetic noise', 'Barra de tracking': 'Tracking bar', 'Sangramento de cor (chroma)': 'Color bleed (chroma)', 'Distorção glitch': 'Glitch distortion', 'Força do glitch (RGB)': 'Glitch strength (RGB)',
    'Aberração cromática': 'Chromatic aberration', 'Letreiro da câmera (OSD)': 'Camera overlay (OSD)', 'Mostrar letreiro': 'Show overlay', 'Data': 'Date', 'Data aleatória nostálgica': 'Random nostalgic date', 'O botão 🎲 sorteia uma data nostálgica': 'The 🎲 button picks a nostalgic date', 'Vinheta': 'Vignette', 'Força da vinheta': 'Vignette strength', 'Suavidade da vinheta': 'Vignette softness',
    'Scanlines': 'Scanlines', 'Densidade de scanlines': 'Scanline density', 'Saturação': 'Saturation', 'Contraste': 'Contrast', 'Chuvisco': 'Static', 'Cintilação': 'Flicker', 'Curvatura': 'Curvature', 'Máscara RGB (fósforo)': 'RGB mask (phosphor)', 'Brilho do fósforo (glow)': 'Phosphor glow', 'Trocar canal': 'Change channel',
    'Desligar': 'Turn off', 'Ligar': 'Turn on', 'Coloque algo pra passar na TV': 'Put something on the TV', 'TV de tubo (CRT)': 'CRT TV', 'deixa aquele borrão de monitor antigo': 'adds that old-monitor blur', 'Tubo': 'Tube',
    'Força fisheye': 'Fisheye strength', 'Forçar borda circular (peephole)': 'Force circular edge (peephole)', 'Zoom na foto': 'Photo zoom', 'Lente & aparelho': 'Lens & device', 'Lente e enquadramento': 'Lens and framing', 'Modo ajuste': 'Adjust mode', 'Modo ajuste (arraste a imagem na prévia, ou use as setas)': 'Adjust mode (drag the image in the preview, or use the arrow keys)',
    'clique na foto e arraste pra posicionar a imagem atrás da lente': 'click and drag the photo to position it behind the lens', 'fora do círculo vira verde pra recortar no editor': 'outside the circle turns green so you can key it in your editor', 'Desfoque na borda': 'Edge blur', 'Distância do desfoque': 'Blur distance',
    'Bater câmera': 'Shake camera', 'Câmera': 'Camera', 'Resolução real': 'Real resolution', 'Resolução real da câmera': "Camera's real resolution", 'salva no tamanho que a câmera de verdade tirava (VGA, 1.3 MP…)': 'saves at the size the real camera took (VGA, 1.3 MP…)', 'Carimbo digital (timestamp)': 'Digital date stamp (timestamp)', 'Use fotos bem iluminadas: o app "estraga" a imagem de propósito': 'Use well-lit photos: the app "ruins" the image on purpose',
    'Digital clássica': 'Classic digital', 'Amadora 2000s': '2000s amateur', 'Flash estourado (brancos fortes)': 'Blown-out flash (strong whites)', 'Modo noturno (lavada / alto ISO)': 'Night mode (washed out / high ISO)', 'Celular VGA 2006 (pixelada / magenta)': '2006 VGA phone (pixelated / magenta)',
    'Câmera de plástico (aberração / vinheta)': 'Plastic camera (aberration / vignette)', 'P&B digital (contraste duro)': 'Digital B&W (hard contrast)', 'Sépia (fita antiga)': 'Sepia (old tape)', 'Fita desbotada (azulada)': 'Faded tape (bluish)', 'Matriz / Visão noturna (verde)': 'Matrix / night vision (green)', 'Original (limpo)': 'Original (clean)',
    'Paleta': 'Palette', 'Cores originais': 'Original colors', 'Níveis por cor (sem paleta)': 'Levels per color (no palette)', 'Pontilhado (dithering)': 'Dithering', '1-bit (preto e branco)': '1-bit (black and white)', 'Game Boy (4 verdes)': 'Game Boy (4 greens)', 'CGA (4 cores)': 'CGA (4 colors)', 'Console 8-bit (16 cores)': '8-bit console (16 colors)',
    'o tamanho dos blocos. Quanto maior, mais pixelado': 'the block size. The bigger, the more pixelated', 'limita as cores pra dar cara de videogame antigo. Combine com o pontilhado': 'limits colors for an old video game look. Combine with dithering', 'Bem-vindo ao Pixelador': 'Welcome to the Pixelator', 'Escala': 'Scale',
    'Tipo de pop-up': 'Pop-up type', 'Alerta clássico (com ícone)': 'Classic alert (with icon)', 'Mensagem simples (sem ícone)': 'Simple message (no icon)', 'Prompt (com campo de texto)': 'Prompt (with text field)', 'gera caixas com campo de texto': 'makes boxes with a text field', 'Estilo (sistema)': 'Style (system)', 'Aero (7)': 'Aero (7)',
    'OK / Cancelar': 'OK / Cancel', 'Sim / Não': 'Yes / No', 'Anular / Repetir / Ignorar': 'Abort / Retry / Ignore', 'Pergunta': 'Question', 'Texto do prompt': 'Prompt text', 'digite aqui': 'type here', 'Sombra da janela': 'Window shadow', 'Tamanho da janela': 'Window size', 'Dimensões': 'Dimensions',
    'Salve o GIF pra compartilhar. O link da prévia só existe no seu navegador': 'Save the GIF to share it. The preview link only exists in your browser', 'Gerar GIF': 'Generate GIF', 'Tamanho do GIF': 'GIF size', 'Squish (amassar)': 'Squish', 'Suba uma imagem (de preferência sem fundo: use o removedor de fundo antes!)': 'Upload an image (ideally without a background: use the background remover first!)',
    'ou cole o link de uma imagem': 'or paste an image link', 'Link pode não funcionar: alguns sites bloqueiam imagens usadas fora deles': 'Links might not work: some sites block their images elsewhere', 'Não consegui carregar essa imagem. Se for um link, o site pode estar bloqueando: baixe e suba o arquivo': "Couldn't load that image. If it's a link, the site may be blocking it: download and upload the file", 'Use uma imagem (PNG de preferência)': 'Use an image (PNG preferably)',
    'No celular, se o download não começar, segure a imagem e escolha "Baixar imagem"': 'On mobile, if the download doesn\'t start, long-press the image and choose "Download image"', 'Baixar imagem': 'Download image', 'Seu navegador não deixou copiar a imagem. Use o Baixar PNG': "Your browser didn't allow copying the image. Use Download PNG",
    'Número inicial': 'Start number', 'Número final': 'End number', 'Prefixo': 'Prefix', 'Sufixo': 'Suffix', 'ex: R$': 'e.g. $', 'ex: %': 'e.g. %', 'Separador de milhar': 'Thousands separator', 'Vírgula (10,000)': 'Comma (10,000)', 'Ponto (10.000)': 'Period (10.000)', 'Espaço (10 000)': 'Space (10 000)', 'Casas decimais': 'Decimal places',
    'Aceleração': 'Easing', 'Desacelera no fim (natural)': 'Slows down at the end (natural)', 'Suave no início e no fim': 'Smooth at start and end', 'Explosiva': 'Explosive', '"Pulo" quando chega no final': '"Pop" when it reaches the end', 'Números com largura fixa (não tremem)': 'Fixed-width digits (no jitter)',
    'Inscritos ': 'Subscribers', 'Dinheiro': 'Money', 'Porcentagem': 'Percentage', 'Visualizações': 'Views', 'Placar arcade': 'Arcade score', 'pontuação em pixel': 'pixel score', 'Contagem regressiva': 'Countdown', 'Ano': 'Year', 'cyberpunk com brilho': 'glowing cyberpunk',
    'Defina início, fim e duração. O número para no final e fica parado pelo tempo de "Segurar no fim"': 'Set start, end and duration. The number stops at the end and holds for "Hold at the end"', 'é o mais compatível. Pra jogar por cima do seu vídeo sem fundo, use': 'is the most compatible. To lay it over your video without a background, use',
    '(Premiere, After e CapCut leem) ou a': '(Premiere, After Effects and CapCut read it) or the', 'que funciona em qualquer editor': 'which works in any editor', 'O vídeo é gerado quadro a quadro, então pode trocar de aba enquanto ele gera': 'The video is generated frame by frame, so you can switch tabs while it renders',
    'Linear girando': 'Rotating linear', 'Radial pulsando': 'Pulsing radial', 'Cônico (roda de cor)': 'Conic (color wheel)', 'Malha (mesh) fluida': 'Fluid mesh', 'Lava / plasma': 'Lava / plasma', 'Ondas': 'Waves', 'Aurora boreal': 'Northern lights', 'Velocidade (voltas por loop)': 'Speed (cycles per loop)', 'Granulado (grain)': 'Grain',
    'O vídeo é um loop perfeito: o último quadro emenda com o primeiro': 'The video is a perfect loop: the last frame joins the first', 'O vídeo fecha um loop: dá pra repetir sem emenda aparecer': 'The video loops: you can repeat it seamlessly', 'MP4 (loop)': 'MP4 (loop)', 'Duração do vídeo': 'Video length',
    'Papel': 'Paper', 'Tom do papel': 'Paper tone', 'Sulfite / papel comum': 'Plain printer paper', 'Kraft (pardo)': 'Kraft (brown)', 'Jornal velho': 'Old newspaper', 'Pergaminho queimado': 'Burnt parchment', 'Papelão': 'Cardboard', 'Caderno pautado': 'Lined notebook', 'Quadriculado': 'Grid paper', 'Aquarela': 'Watercolor paper',
    'Amassado': 'Crumpled', 'Manchas': 'Stains', 'Fibras e grão': 'Fibers and grain', 'Sujeira procedural': 'Procedural dirt', 'Variações diferentes': 'Different variations', 'Mesclagem': 'Blend mode', 'Multiplicar': 'Multiply', 'Multiplicação': 'Multiply', 'Multiplicação (escurecer)': 'Multiply (darken)', 'Tela': 'Screen', 'Tela (clarear)': 'Screen (lighten)', 'Sobrepor': 'Overlay',
    'Overlay cinza': 'Gray overlay', 'Overlay cinza (use em Multiplicar / Sobrepor)': 'Gray overlay (use with Multiply / Overlay)', '"Tela" clareia (riscos, vazamentos de luz); "Multiplicação" escurece': '"Screen" lightens (scratches, light leaks); "Multiply" darkens', 'coloque por cima do seu vídeo e use o modo de mesclagem': 'put it over your video and use the blend mode',
    'A textura troca entre algumas variações, como papel de verdade filmado quadro a quadro': 'The texture switches between a few variations, like real paper shot frame by frame', 'Riscos na lente': 'Lens scratches', 'Poeira': 'Dust', 'Vazamento de luz quente': 'Warm light leak', 'Vazamento de luz frio': 'Cool light leak', 'Tremida da luz': 'Light flicker',
    'Estilo & material': 'Style & material', 'Fosco (básico)': 'Matte (basic)', 'Cromado / metálico': 'Chrome / metallic', 'Holográfico iridescente': 'Iridescent holographic', 'Toon shading (+ contorno)': 'Toon shading (+ outline)', 'Wireframe hacker': 'Hacker wireframe', 'Plástico cinza': 'Gray plastic', 'Ouro': 'Gold', 'Disco': 'Disco', 'Extrusão': 'Extrusion',
    'Girar sozinho': 'Auto-rotate', 'Resetar câmera (Z)': 'Reset camera (Z)', 'Interativo (mouse)': 'Interactive (mouse)', 'arrastar move': 'drag moves', 'e arraste: gira o texto': 'and drag: rotates the text', 'move a câmera de lado': 'pans the camera', 'Roda do mouse dá zoom,': 'Mouse wheel zooms,', 'reseta a câmera': 'resets the camera',
    'Iniciar ': 'Start', 'Entrada': 'Input', 'Perfil': 'Profile', 'Rádio AM antigo': 'Old AM radio', 'Fita cassete': 'Cassette tape', 'Lo-fi / vinil': 'Lo-fi / vinyl', 'Telefone anos 90': '90s telephone', 'Rádio policial (walkie-talkie)': 'Police radio (walkie-talkie)', 'Megafone / P.A': 'Megaphone / P.A.', 'Alto-falante de supermercado': 'Supermarket speaker', 'Jogo 3D': '3D game',
    'Carregue ou grave um áudio primeiro': 'Load or record audio first', 'Não consegui acessar o microfone. Verifique a permissão do navegador': "Couldn't access the microphone. Check the browser permission", 'Falha ao gerar o MP3': 'Failed to create the MP3', 'Baixar MP3': 'Download MP3', 'Extrair MP3 de vídeo': 'Extract MP3 from video', 'Extrair áudio de vídeo (MP4 → MP3)': 'Extract audio from video (MP4 → MP3)',
    'Nenhum áudio carregado': 'No audio loaded', 'Abrir áudio/vídeo': 'Open audio/video', 'carregue um arquivo ou grave sua voz. Teste os perfis e a intensidade e clique em Reproduzir. Quando gostar, baixe o MP3': 'load a file or record your voice. Try the profiles and intensity, then click Play. When you like it, download the MP3',
    'se o seu áudio está num vídeo, extraia o MP3 primeiro (ou abra o vídeo direto aqui, também funciona)': 'if your audio is in a video, extract the MP3 first (or open the video right here, that works too)', '1. Entrada de áudio': '1. Audio input', '2. Efeitos e texturas': '2. Effects and textures', '3. Osciloscópio': '3. Oscilloscope', 'Entrada de áudio': 'Audio input', 'Efeitos e texturas': 'Effects and textures', 'Osciloscópio': 'Oscilloscope',
    'Usar no áudio analógico': 'Use in analog audio', 'Converter para MP3': 'Convert to MP3', 'Qualidade': 'Quality', '128 kbps (padrão)': '128 kbps (default)', '192 kbps (boa)': '192 kbps (good)', '320 kbps (alta)': '320 kbps (high)', 'Selecione o vídeo (MP4, WEBM, MOV)': 'Select the video (MP4, WEBM, MOV)', 'Selecionar vídeo (MP4, WEBM, MOV)': 'Select video (MP4, WEBM, MOV)',
    'Pronto para converter. Aguardando arquivo': 'Ready to convert. Waiting for a file', 'Pronto. Aguardando arquivo': 'Ready. Waiting for a file', 'Lendo áudio do vídeo': 'Reading audio from the video', 'Codificando MP3': 'Encoding MP3', 'Fica salvo só no seu navegador': 'Saved only in your browser',
    'Tocando agora: nada · clique em 📂 pra escolher suas músicas': 'Now playing: nothing · click 📂 to pick your music', 'Abrir músicas': 'Open music', 'Volume': 'Volume', 'Site (ferramentas)': 'Site (tools)', 'Bem-vindo aos links! 👾 Arraste as janelas pela barra de título pra organizar a tela': 'Welcome to the links! 👾 Drag the windows by their title bar to arrange the screen',
    'Pra trocar os links, edite a lista': 'To change the links, edit the list', 'no começo do script deste arquivo (links.html)': 'at the top of the script in this file (links.html)', 'Comando': 'Command',
    '9 scripts gratuitos para After Effects (CC 2018 ou mais novo). Clique pra baixar o .jsx': '9 free scripts for After Effects (CC 2018 or newer). Click to download the .jsx', 'Baixar todos (.zip)': 'Download all (.zip)', 'Como instalar': 'How to install', 'Baixe o .zip (ou o script que quiser)': 'Download the .zip (or the script you want)',
    'No After Effects': 'In After Effects', 'e escolha o .jsx': 'and choose the .jsx', 'Pra deixar fixo no menu, copie pra pasta': 'To keep it in the menu, copy it to the folder', 'vira um painel: copie a pasta inteira pra': 'becomes a panel: copy the whole folder to', 'e abra em': 'and open it in', 'Ative': 'Turn on', '(precisa pro Exportar PNG)': '(needed for Export PNG)',
    'Quebra um texto em letras separadas, cada uma num recorte de revista com cor, fonte e rotação aleatórias. Tremida stop motion opcional': 'Splits text into separate letters, each in a magazine cutout with random color, font and rotation. Optional stop-motion shake',
    'Pinta a cor de cada camada pelo tipo (texto, forma, sólido, ajuste, null, vídeo, imagem, áudio, pré-comp). Bom pra timelines grandes': 'Colors each layer by type (text, shape, solid, adjustment, null, video, image, audio, precomp). Great for big timelines', 'Safe zone': 'Safe zone',
    'Cria uma camada guia com as áreas seguras de TikTok, Reels e Shorts. Ela não aparece no render': "Creates a guide layer with TikTok, Reels and Shorts safe areas. It doesn't show in the render", 'Script manager': 'Script manager', 'Painel encaixável com um botão pra cada script da pasta. Tudo num clique': 'Dockable panel with a button for each script in the folder. One click away',
    'Logo DVD': 'DVD logo', 'Faz a camada quicar pelas bordas da comp e trocar de cor a cada batida, igual descanso de tela do DVD': 'Makes the layer bounce off the comp edges and change color on each hit, like the DVD screensaver', 'Organizador de projeto': 'Project organizer',
    'Separa os itens soltos do painel Project em pastas: Comps, Vídeos, Áudios, Imagens, Sólidos e Outros': 'Sorts loose items in the Project panel into folders: Comps, Videos, Audio, Images, Solids and Other', 'Lê um arquivo de legenda .srt e cria uma camada de texto pra cada fala, já no tempo certo': 'Reads an .srt subtitle file and creates a text layer for each line, already timed',
    'Exportar PNG ': 'Export PNG', 'Salva o frame atual como PNG com transparência, sem passar pela fila de render': 'Saves the current frame as a transparent PNG, without the render queue', 'Expressões em massa': 'Bulk expressions', 'Aplica (ou remove) a mesma expressão em várias propriedades de uma vez. Já vem com wiggle, loop, inertia e mais': 'Applies (or removes) the same expression on many properties at once. Comes with wiggle, loop, inertia and more',
    'Ajuda & instruções': 'Help & instructions', 'ajuda & dicas': 'help & tips', 'Dicas': 'Tips', 'Dicas de uso - Ajuda': 'Usage tips - Help', 'Guia de controles': 'Controls guide', 'Controles': 'Controls', 'Atalhos': 'Shortcuts', 'Como usar': 'How to use', 'Como ter o melhor resultado': 'How to get the best result', 'Entendi': 'Got it', 'Ajuda - câmera digital': 'Help - digital camera',
    'Efeitos & câmera': 'Effects & camera', 'Efeitos básicos': 'Basic effects', 'Efeitos no texto': 'Text effects', 'Defeitos': 'Defects', 'Defeitos de hardware (glitches)': 'Hardware defects (glitches)', 'Luz e cor': 'Light and color', 'Filtro de cor': 'Color filter', 'Cores e texturas': 'Colors and textures', 'Textura': 'Texture', 'Texturas': 'Textures',
    'Tipografia': 'Typography', 'Texto & layout': 'Text & layout', 'Texto do topo': 'Top text', 'Layout': 'Layout', 'Alinhar': 'Align', 'Espaçamento linhas': 'Line spacing', 'Opacidade': 'Opacity', 'Opacidade do fundo': 'Background opacity', 'Suavidade': 'Softness', 'Modo': 'Mode', 'Frame': 'Frame', 'Extra': 'Extra', 'Médio': 'Medium',
    'Rápido': 'Fast', 'Aleatório': 'Random', 'Random': 'Random', 'Ativar': 'Enable', 'Xadrez (transparente)': 'Checkerboard (transparent)', 'Fundo da prévia': 'Preview background', 'Preta': 'Black', 'Preto e branco': 'Black and white', 'Faixas coloridas': 'Color bars', 'Mostrar grade': 'Show grid', 'Mostrar canal': 'Show channel',
    'Horizontal (1920×1080)': 'Horizontal (1920×1080)', 'Vertical (1080×1920)': 'Vertical (1080×1920)', 'Quadrado (1080×1080)': 'Square (1080×1080)', 'Interface limpa': 'Clean interface', 'Usar imagem': 'Use image', 'Tirar imagem': 'Remove image', 'Nenhuma imagem ainda': 'No image yet', 'Nenhuma imagem carregada': 'No image loaded',
    'Clique na miniatura ou em': 'Click the thumbnail or', 'Comece por um': 'Start with a', 'estilo pronto': 'ready-made style', 'e ajuste o que quiser nas abas': 'and tweak anything in the tabs', 'escolher arquivo': 'choose file', 'ou solte / cole aqui': 'or drop / paste here', 'ou clique pra escolher ·': 'or click to choose ·', 'pra colar': 'to paste',
    'Use PNG com fundo transparente. Também dá pra arrastar ou colar (Ctrl+V)': 'Use a PNG with a transparent background. You can also drag or paste (Ctrl+V)', 'acumula falhas. Um clique é um glitch pequeno; vários, o caos total': 'stacks glitches. One click is a small glitch; many, total chaos', 'cada letra muda num momento diferente, fica mais orgânico': 'each letter changes at a different moment, more organic',
    'Desync': 'Desync', 'Desync (letras fora de sincronia)': 'Desync (letters out of sync)', 'Direção do glitch': 'Glitch direction', 'Glitch RGB': 'RGB glitch', 'Intensidade (blocos)': 'Intensity (blocks)', 'Halation (sangramento vermelho)': 'Halation (red bleed)', 'Estouro de luz (bloom)': 'Bloom', 'Chroma subsampling (4:2:0)': 'Chroma subsampling (4:2:0)', 'Dropouts (riscos brancos)': 'Dropouts (white streaks)',
    'Ruído procedural': 'Procedural noise', 'Bokeh': 'Bokeh', 'Luzes neon (cyberpunk)': 'Neon lights (cyberpunk)', 'Madeira anos 80': '80s wood', 'Flash frontal': 'Front flash', 'Pixelado (PS1)': 'Pixelated (PS1)', 'Barra rolando': 'Rolling bar', 'segure "Ver original" pra ver o antes e depois': 'hold "See original" to compare before and after',
    'se for usar em vídeo, pra não ficar borrado': 'if you\'ll use it in video, so it isn\'t blurry', 'o PNG sai em alta resolução e com fundo transparente': 'the PNG comes out high resolution with a transparent background', 'gera na hora': 'generates instantly', 'Botão de inscreva-se': 'Subscribe button', 'Camada 1 (principal)': 'Layer 1 (main)', 'Camada 2 (extra)': 'Layer 2 (extra)',
    'Escolha a versão do Windows ': 'Pick your Windows version', 'Status: sistema pronto. · processamento local': 'Status: system ready. · local processing', 'alterne entre XP, 98 e o vidro do 7 Aero': 'switch between XP, 98 and the 7 Aero glass', 'Mostrar grade ': 'Show grid', 'quebra a linha': 'breaks the line', 'desfaz': 'undoes', 'mudam o pincel,': 'change the brush,',
    'arraste a imagem pra posicionar. As setas do teclado movem de pixel em pixel': 'drag the image to position it. Arrow keys move pixel by pixel', 'duplo clique no nome de qualquer controle': 'double-click the name of any control', 'Clique esquerdo': 'Left click', 'Clique direito ou do meio': 'Right or middle click', 'Espaço': 'Space', 'Enter': 'Enter', 'Shift': 'Shift', 'Ctrl': 'Ctrl',
    'Microsoft(R) Windows DOS\n(C) Copyright Microsoft Corp 1990-2001.\n\nDigite HELP pra ver os comandos': 'Microsoft(R) Windows DOS\n(C) Copyright Microsoft Corp 1990-2001.\n\nType HELP to see the commands',
    'Botões personalizados': 'Custom buttons', 'Original --': 'Original --', 'Nenhuma --': 'None --', 'Sem áudio ': 'No audio', 'Ajuda ': 'Help', 'Concluído!': 'Done!', 'Salvar ': 'Save', 'Upload ': 'Upload', 'Fazer upload': 'Upload',
  };

  // Frases com números ou nomes no meio
  const RULES = [
    [/^(.+) · EdiTools$/, (m) => `${t(m[1])} · EdiTools`],
    [/^quadro (\d+) de (\d+)$/, 'frame $1 of $2'],
    [/^codificando quadro (\d+) de (\d+)$/, 'encoding frame $1 of $2'],
    [/^(\d+) arquivo\(s\) · (.+) usados$/, '$1 file(s) · $2 used'],
    [/^Baixando IA… (.+)$/, 'Downloading AI… $1'],
    [/^baixando a IA… (.+)$/, 'downloading the AI… $1'],
    [/^transcrevendo… (\d+) s \((placa de vídeo|processador)\)$/, (m) => `transcribing… ${m[1]} s (${m[2] === 'processador' ? 'CPU' : 'GPU'})`],
    [/^pronto! (\d+) palavras em (\d+) legendas$/, 'done! $1 words in $2 captions'],
    [/^(\d+) legendas importadas$/, '$1 captions imported'],
    [/^(.+) · ([\d:]+) · pronto pra transcrever$/, '$1 · $2 · ready to transcribe'],
    [/^erro: (.*)$/, 'error: $1'],
    [/^lendo (.+)…$/, 'reading $1…'],
    [/^Carregando (.+)…$/, 'Loading $1…'],
    [/^Tocando agora: (.+)$/, 'Now playing: $1'],
    [/^(.+) não abre esse tipo de arquivo\. Tente outra ferramenta\.$/, (m) => `${t(m[1])} can't open this kind of file. Try another tool.`],
    [/^(\d+) imagem\(ns\) · use \[img(\d+)\]$/, '$1 image(s) · use [img$2]'],
    [/^Botão (\S+) · arquivo (\S+)$/, 'Button $1 · file $2'],
    [/^(\d+×\d+) · (\d+) quadros · (.+)$/, '$1 · $2 frames · $3'],
    [/^Propriedades · (.+)$/, (m) => `Properties · ${t(m[1])}`],
    [/^↳ (.+)$/, (m) => `↳ ${t(m[1])}`],
    [/^(.+) · 1,2 mi de visualizações · há 2 dias$/, '$1 · 1.2M views · 2 days ago'],
    [/^Concluído! (.+)$/, 'Done! $1'],
    [/^Não deu: (.+)$/, (m) => `Couldn't do it: ${t(m[1])}`],
    [/^gravando… (.+)$/, 'recording… $1'],
    [/^gerando… (.+)$/, 'rendering… $1'],
    [/^salvo! (.+)$/, 'saved! $1'],
    [/^Status: ● GRAVANDO · (.+)$/, 'Status: ● RECORDING · $1'],
    [/^Status: rodando · (.+) · processamento local$/, 'Status: running · $1 · local processing'],
    [/^Abrindo (.+)…$/, 'Opening $1…'],
    [/^(\d+) min$/, '$1 min'],
    [/^Não consegui gerar o vídeo: (.+)$/, "Couldn't create the video: $1"],
  ];

  const PRE = /^[^\p{L}"(¿¡]*/u, SUF = /[\s:…\.!?]*$/;
  function t(s) {
    if (!s || !/\p{L}/u.test(s)) return s;
    const lead = s.match(/^\s*/)[0], trail = s.match(/\s*$/)[0], core = s.trim();
    if (D[core] != null) return lead + D[core] + trail;
    const pre = core.match(PRE)[0], rest = core.slice(pre.length), suf = rest.match(SUF)[0], mid = rest.slice(0, rest.length - suf.length);
    if (mid && D[mid] != null) return lead + pre + D[mid] + suf + trail;
    for (const [re, rep] of RULES) {
      const m = rest.match(re);
      if (m) return lead + pre + (typeof rep === 'function' ? rep(m) : rest.replace(re, rep)) + trail;
    }
    return s;
  }

  const ATTRS = ['title', 'placeholder', 'aria-label', 'data-title', 'alt'];
  const SKIP = /^(SCRIPT|STYLE|TEXTAREA|CODE)$/;
  function node(n) {
    if (n.nodeType === 3) {
      const p = n.parentElement;
      if (!p || SKIP.test(p.tagName) || p.closest('[contenteditable], .notranslate')) return;
      const v = t(n.nodeValue);
      if (v !== n.nodeValue) n.nodeValue = v;
    } else if (n.nodeType === 1) {
      if (SKIP.test(n.tagName)) return;
      for (const a of ATTRS) { const v = n.getAttribute(a); if (v) { const tv = t(v); if (tv !== v) n.setAttribute(a, tv); } }
      const w = document.createTreeWalker(n, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
      let c;
      while ((c = w.nextNode())) {
        if (c.nodeType === 1) { for (const a of ATTRS) { const v = c.getAttribute(a); if (v) { const tv = t(v); if (tv !== v) c.setAttribute(a, tv); } } }
        else node(c);
      }
    }
  }
  function apply(root) { node(root); }
  function start() {
    document.title = t(document.title);
    // valores padrão de campos de texto (só os que vieram da página, não o que a pessoa digita)
    document.querySelectorAll('input[type=text]').forEach((i) => { const v = t(i.value); if (v !== i.value) { i.value = v; i.defaultValue = v; } });
    apply(document.body);
    new MutationObserver((ms) => {
      for (const m of ms) {
        if (m.type === 'characterData') node(m.target);
        else if (m.type === 'attributes') { const v = m.target.getAttribute(m.attributeName); if (v) { const tv = t(v); if (tv !== v) m.target.setAttribute(m.attributeName, tv); } }
        else m.addedNodes.forEach(node);
      }
    }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }

  window.I18N = { t, apply, start, D };
})();
