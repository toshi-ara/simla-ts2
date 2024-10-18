# Simulator for local anesthetic agents
## Summary
- This program is a computer-based simulator
   that reproduces the local anesthetic training items
   used in student training at Matsumoto Dental University.
- You can install it on your PC or tablet
   because this is created as a Progressive Web App (PWA).


## How to install and run
1. Access [this page](https://toshi-ara.github.io/simla-ts/sim_local_anesthetics.html).
1. For Windows PC (opens in Edge or Chrome) and Android,
    a notification will be displayed to install it.
    (no need to install).
    - Once installed, you can use the application
      even when you are not connected to the Internet.
    - For iPhone or iPad, select "Add to Home Screen" from the menu.


## About training procedures
### Procedures for animal experiments on which the simulator is based
1. Shave the hair on the back of the guinea pig
1. Inject 0.1 mL of the following drugs intradermally,
   and each injection site papule is enclosed in a circle
   marked by a magic marker.
    - Saline
    - Pro: Procaine hydrochloride (1%)
    - Lid: Lidocaine hydrochloride (1%)
    - Mep: Mepivacaine hydrochloride (1%)
    - Bup: Bupivacaine hydrochloride (1%)
    - Lid + Adr: Lidocaine hydrochloride (1%) with adrenaline (1/100,000)
1. Stimulate 6 times at each papule with needle,
    with the number of the skin contractions counted,
    defining this number as the score (minimum is 0, and maximum is 6).
    - Stimulate at 5 min interval up to 120 min
1. When a score of 6 is obtained three times in a row,
    finish the stimulation and define that time as the duration.
    - No need to stimulate after completion
1. Compare the sum of score values and duration of action for each drug.

### How to use the simulator
1. Press **Start** button to start measurement
1. When you click inside the circle,
    "Response" or "No response" will be displayed
    at the bottom left of the screen.
   If there is a response,
    the circle will temporarily turn red.
1. You can change the speed (times) of time passing with the slider.
    - Values can be changed both while running and stopped.
1. Press the **Pause** button to stop time passing,
    and press the **Restart** button to resume time passing
1. You can run the experiment from the beginning with new parameter values
    by pressing the **New Exp.** button.
    - This means conducting experiments using different animals.
1. Press the **Quit** button and then exit the program.
    - Please perform this operation to delete the parameter information
      because this remains in the browser,

### Notes on this simulator
- This simulator is modeled based on actual training results,
   but it may not necessarily yield the same results as animal experiments.
    - Because drug parameter values are set with random numbers,
      the duration of drug action may differ from the original drug order.
        - I think this frequency has decreased
          because v1.0.0 has changed to using random numbers
           that follow a multivariate normal distribution
    - Because the presence or absence of a response
      when stimulated is determined by random numbers,
      the number of responses repeats up and down
       and does not necessarily increase over time.


## Reference
A paper on the model formula and parameter values used in this simulator.

- Toshiaki Ara and Hiroyuki Kitamura:
  Development of a Predictive Statistical Pharmacological Model
   for Local Anesthetic Agent Effects
   with Bayesian Hierarchical Model Parameter Estimation.
  Medicines 2023, 10(11), 61
  (https://doi.org/10.3390/medicines10110061)


## How to build the environment (for teachers)
- Since it is released under the MIT License,
  it can be used and modified for both commercial and non-commercial purposes.
- Build the environment using one of the following methods.
    1. Access the page published on GitHub
        - https://toshi-ara.github.io/simla-ts/sim_local_anesthetics.html
        - This is the easiest,
          and I think it would be a good idea to post this link
          on a page that is easy for students to access
          (such as a classroom-specific page).
    1. Installing on student computers
        - When you click the `Code` button on this page,
          `Download ZIP` will be displayed,
          so click it. A file named `simla-ts-main.zip` will be saved.
        - After unzipping the file,
           copy the contents of the `docs` folder to your computer
           (Please change the folder name as appropriate).
        - Double-click `sim_local_anesthetics.html` in the folder
           to start the browser and use the simulator.
    1. Install on your own web server (**Please consult an expert**)
        - Place the contents of the above `docs` folder
           in the appropriate location on the web server
           (Please change the folder name as appropriate).
        - You can use the simulator by visiting `sim_local_anesthetics.html`


## When changing the source code (for developers only)
### How to display license
- If you want to modify program, please edit the `LICENSE` file.
  Please add the copyright holder after `Copyright (c) 2022 ARA Toshiaki`
   and include this `LICENSE` file in the source code.

### How to build the code
- Requires npm (JavaScript package management system)
- Run the following command with npm installed

```bash
git clone https://github.com/toshi-ara/simla-ts.git
# git clone git@github.com:toshi-ara/simla-ts.git  # when ssh is used
cd simla-ts

npm install
npm run build
```

### Use code from another repository
It is also possible to use
[code from another repository](https://github.com/toshi-ara/simla) on GitHub.
- There is no need for npm in this case (works only in the browser).


## ChangeLog
### (2024-10-18)
- Update

### v1.2.1 (2024-7-15)
- Disable pinch-in in canvas area

### v1.2.0 (2024-1-26)
- Update the correlation coefficients among drug parameter values

### v1.1.2 (2024-1-4)
- Change the timer text color to red when there is a response

### v1.1.1 (2024-1-4)
- Fix failure to start after installing as a PWA application

### v1.1.0 (2024-1-4)
- use "multivariate-normal" package to generate random numbers
  that follow a multivariate normal distribution
    - drop R script

### (2023-12-30)
- update contents in README.md (this page)
    - added environment construction and reference items
- change to English (original contents in Japanese are moved to README-ja.md)

### v1.0.1 (2023-12-30)
- change directory location of source code
    - changed to publish below docs
- change the public URL accordingly
    - https://toshi-ara.github.io/simla-ts/sim_local_anesthetics.html

### v1.0.0 (2023-12-29)
- change the method to set drug parameter values in simulation
    - use the random numbers that follow a multivariate normal distribution
      (the correlation coefficient between each drug is 0.8)

## About this program
- Author: Matsumoto Dental University, Department of Pharmacology, Toshiaki Ara
- Year:2022
- License: MIT License
