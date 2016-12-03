from PIL import Image

def override_pixed(pixels, overlayName):
  overlay = Image.open("img/" + overlayName + ".png")
  overlay = overlay.convert("RGBA")
  width, height = overlay.size

  overlayPix = overlay.load()
  for x in range(width):
    for y in range(height):
      px = overlayPix[x, y]
      if px[3] != 0:
        pixels[x, y] = px

def create_image(num):
  binary = list(reversed([(num >> i) % 2 for i in range(8)]))

  if binary[0] == 1:
    bgImgName = "img/Base Smiley Blue.png"
  else:
    bgImgName = "img/Base Smiley Yellow.png"

  background = Image.open(bgImgName)
  background = background.convert("RGBA")
  background = background.copy();
  bgPixels = background.load();

  if binary[1] == 1:
    override_pixed(bgPixels, "Eyebrow")

  if binary[2] == 1:
    override_pixed(bgPixels, "Sunglasses")

  if binary[3] == 1:
    override_pixed(bgPixels, "Moustache")

  if binary[4] == 1:
    override_pixed(bgPixels, "Beard")

  if binary[5] == 1:
    override_pixed(bgPixels, "Hat")

  if binary[6] == 1:
    override_pixed(bgPixels, "Tongue")

  if binary[7] == 1:
    override_pixed(bgPixels, "Piercing")

  filename = "".join([str(x) for x in binary]) + ".png"
  background.save("./output/" + filename, "PNG");


# Renk, Kaş, Gözlük, Bıyık, Sakal, Şapka, Dil, Piercing
#Color, Eyebrows, Glasses, Moustache, Beard, Hat, Tongue, Piercing
for num in range(256):
  create_image(num)
