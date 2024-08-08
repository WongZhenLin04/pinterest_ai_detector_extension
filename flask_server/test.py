from transformers import pipeline

pipe = pipeline("image-classification", model="Nahrawy/AIorNot")

## Insert your file path here
print(pipe())