from transformers import pipeline

pipe = pipeline("image-classification", model="Nahrawy/AIorNot")
print(pipe("C:\\Users\\Colin\\Documents\\Coding\\ai_content_detection_extension\\flask_server\\test.jpg"))