import java.time.LocalTime;
import java.time.Duration;

public class DiferencaHoras {
    public static void main(String[] args) {
        LocalTime horarioInicio = LocalTime.of(14, 30, 0);
        LocalTime horarioTermino = LocalTime.of(16, 45, 0);

        Duration duracao = Duration.between(horarioInicio, horarioTermino);

        System.out.println("Diferença de tempo: " + duracao.toHours() + " horas e " + duracao.toMinutesPart() + " minutos");
    }
}