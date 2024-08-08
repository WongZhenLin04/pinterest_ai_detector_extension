## About Project

**Note that this is just an experimental build** it's like the equivalent to a science fair project.

The main function of the extension is to allow users to make a more educated guess on if the artwork opened on a Pinterest page is AI generated or not. The intent of making the extension is to prevent artists who use pinterest posts as reference material to be misguided while studying.

The extension relies on a self hosted AI model for results, given that the current state of AI content detection is not entirely accurate in its current iteration ([see more here](https://arxiv.org/html/2404.14581v1)) the results shown should not be interpreted as the end all be all.

### Development moving forward

A more specialised model for anime style drawings is sorely needed as the model currently captures all styles of digital art. Therefore moving forward curating a dataset and training a model for such art style will be the main focus. Currently looking at clssification models within the YOLO family.

## Prerequisites

- Python with Pip configured
    - The server mainly relies on python packages to work and as such python is needed to be [installed](https://www.python.org/downloads/release/python-3110/) if it isn't already.
    - `pip` is also needed for installing packages, during installation **select the option to include `pip` in PATH**.
    - In the case where python is installed but not pip follow this [guide](https://builtin.com/software-engineering-perspectives/pip-command-not-found).
- Flask
    - Use `pip install Flask` in command prompt.
- Huggingface transformers
    - Use `pip install transformers` in command prompt.

## Setup (Flask server)

1.  Download source code from the Github page and extract it to your desired directory.
2.  In command prompt, navigate to the extracted folder using the `cd` command.
3.  Use the command `flask --app flask_server\main run` to run a locally hosted server **(Note that the model will use processing power from your own device)**
4.  If everything is setup correctly, the terminal will say "Running on ..."

## Setup (Chrome extension)

1.  Go to `chrome://extensions/`, or `arc://extensions/` if you're using arc.
2.  On the top right of the page, click on the "Developer mode" option.
3.  Click on "Load unpacked" extension
4.  Navigate to your source code directory and select the "extension folder"

## Usage

**Make sure to have the flask app setup already as stated from the previous step**

In any pin page, e.g. `https://www.pinterest.com/pin/*` where `*` is a wild card, press the buttons `Alt + x`

### Example Screenshot

![Screenshot 2024-08-08 094816](https://github.com/user-attachments/assets/2c4e30c3-bb70-4ba9-b205-7b2078a6b019)

## Current Bugs and Quirks

1.  Sometimes extension won't activate even though shortcut was used, if this happens refresh the page and try again
2.  Size of bar sometimes does not follow the size of the post, resize windows screen to fix this

## Using other models (requires knowing what output of model looks like)
You can test what an output looks like for a Tranformer model in the `test.py` file with the test image.

When label names are known for Human and AI scores, the label names can be edited in `extension\scripts\const.js`

If method of extraction is needed to be edited to accomadate for new format of output, it can be edited in  `Utilities.js` for method `getScoreByLabel(inputString, label)`.

**Note: Any changes made in the extension folder requires the extension to be reloaded on the browser**
