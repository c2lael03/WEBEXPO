package com.example.calories2

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.sp
import androidx.compose.ui.tooling.preview.Preview
import com.example.calories2.ui.theme.Calories2Theme
import java.util.Locale
import kotlin.math.pow

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Calories2Theme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    Bmi()
                }
            }
        }
    }
}

@Composable
fun Bmi() {
    var heightInput by remember { mutableStateOf("") }
    var weightInput by remember { mutableStateOf("") }

    val height = heightInput.replace(",", ".").toFloatOrNull() ?: 0f
    val weight = weightInput.toIntOrNull() ?: 0
    val bmi = if (height > 0 && weight > 0) weight / (height / 100).pow(2) else 0f

    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "BMI Calculator",
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold,
            color = Color.Blue
        )

        OutlinedTextField(
            value = heightInput,
            onValueChange = { heightInput = it.replace(",", ".") },
            label = { Text(text = "Height (cm)") },
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number)
        )

        OutlinedTextField(
            value = weightInput,
            onValueChange = { weightInput = it },
            label = { Text(text = "Weight (kg)") },
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number)
        )

        Text(
            text = String.format(Locale.getDefault(), "Your BMI: %.2f", bmi).replace(",", "."),
            fontSize = 20.sp,
            color = Color.Green
        )
    }
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    Calories2Theme {
        Bmi()
    }
}
