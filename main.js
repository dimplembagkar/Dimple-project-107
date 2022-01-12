function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    Classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/i7s8yJDW4/model.json', modelReady);

}

function modelReady()
{
    Classifier.classify(gotResults);
}