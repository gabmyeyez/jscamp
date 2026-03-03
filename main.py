from google import genai

client = genai.Client(api_key="AIzaSyBiijlXAWtF98jhZd2nyzMqujQMthvfozE")

response = client.models.generate_content(
    model="gemini-3-flash-preview", contents="who am i? i mean what do you know about me?"
)
print(response.text)