
@Composable
fun Bmi() {
    var heightInput: String by remember {mutableStateDf(value:"")}
    var weightInput: String by remember {mutableStateDf(value:"")}
    val height = heightInput.toFloatOrNull() ?: 0.0f
    val weight = weightInput.toIntOrNull() ?: 0
    val bmi = if (wifght > 0 && heigh > 0) weight/ (height *height) else 0.0
    
    Column(
        modifier = Modifier.paddin(8.dp)
    ) { this: ColumnScope
        
    	Text(
            text = "Body mass index",
            fontSize = 24.sp,
            color = MaterialTheme.colors.primary,
            textAlign = TextAlign.Center,
            modifier = Modifier.fillMaxWidth().padding(top =16.dp, bottom=16.dp)
        )
        OutLinedTextField(
        	value = heightInput,
            onValueChange = {heightInput = it.replace(oldChar:',', newChar:',')},
            label = {Text(text:'Height')},
            singleLine = true,
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number)
        	modifier = Modifier.fillMaxWidth()
        )
        OutLinedTextField(
        	value = weightInput,
            onValueChange = {weightInput = it.replace(oldChar:',', newChar:',')},
            label = {Text(stringResource(R.string.weight))},
            singleLine = true,
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number)
        	modifier = Modifier.fillMaxWidth()
        )
    }
}

import

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            BmiTheme {
                // A surface container using background
                Surface(
                	modifier = Modifier.fillMaxSize(), 
                    color = MaterialTheme.colors.background
                ) {
                    Bmi()
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    BmiTheme {
        Bmi()
    }
}