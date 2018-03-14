#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
  #include <avr/power.h>
#endif

#define PIN 6

// Parameter 1 = number of pixels in strip
// Parameter 2 = Arduino pin number (most are valid)
// Parameter 3 = pixel type flags, add together as needed:
//   NEO_KHZ800  800 KHz bitstream (most NeoPixel products w/WS2812 LEDs)
//   NEO_KHZ400  400 KHz (classic 'v1' (not v2) FLORA pixels, WS2811 drivers)
//   NEO_GRB     Pixels are wired for GRB bitstream (most NeoPixel products)
//   NEO_RGB     Pixels are wired for RGB bitstream (v1 FLORA pixels, not v2)
//   NEO_RGBW    Pixels are wired for RGBW bitstream (NeoPixel RGBW products)
Adafruit_NeoPixel strip = Adafruit_NeoPixel(90, PIN, NEO_GRB + NEO_KHZ800);

int sensorPin = A0; // select the input pin for the potentiometer
int digPin = 7;
int kickValue = 0; // variable to store the value coming from the sensor
int snareValue = 0; // variable to store the value coming from the sensor
int tom1Value = 0; // variable to store the value coming from the sensor
int tom2Value = 0; // variable to store the value coming from the sensor
boolean val = 0;
 
void setup () 
{
  Serial.begin (9600);
  pinMode(digPin, INPUT);
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'
}
 
void loop () 
{
  kickValue = analogRead (sensorPin);
  snareValue = analogRead (sensorPin);
  tom1Value = analogRead (sensorPin);
  tom2Value = analogRead (sensorPin);
  val = digitalRead(digPin);
  Serial.print("Digital Value: ");
  Serial.println(val);
  Serial.print("Analog Value: ");
  Serial.println (kickValue, DEC);
  kickWipe(strip.Color(kickValue, 0, 0), 60);
  snareWipe(strip.Color(0, snareValue, 0), 60);
  tom1Wipe(strip.Color(0, 0, tom1Value), 60);
  tom2Wipe(strip.Color(tom2Value, tom2Value, tom2Value), 60);
}

// Fill the dots one after the other with a color
void kickWipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=0; i<strip.numPixels(); i+=4) {
    strip.setPixelColor(i, c);
    strip.show();
  }
}

// Fill the dots one after the other with a color
void snareWipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=1; i<strip.numPixels(); i+=4) {
    strip.setPixelColor(i, c);
    strip.show();
  }
}

// Fill the dots one after the other with a color
void tom1Wipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=2; i<strip.numPixels(); i+=4) {
    strip.setPixelColor(i, c);
    strip.show();
  }
}

// Fill the dots one after the other with a color
void tom2Wipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=3; i<strip.numPixels(); i+=4) {
    strip.setPixelColor(i, c);
    strip.show();
  }
}
