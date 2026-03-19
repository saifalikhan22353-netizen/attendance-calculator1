document.getElementById('attendanceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const attended = parseInt(document.getElementById('attended').value);
    const total = parseInt(document.getElementById('total').value);
    
    // Validate inputs
    if (isNaN(attended) || isNaN(total) || attended < 0 || total <= 0 || attended > total) {
        alert('Please enter valid numbers. Attended classes cannot be more than total classes.');
        return;
    }
    
    // Calculate percentage
    const percentage = (attended / total) * 100;
    
    // Display result
    document.getElementById('percentage').textContent = percentage.toFixed(2) + '%';
    
    // Show message based on percentage
    const messageElement = document.getElementById('message');
    if (percentage >= 90) {
        messageElement.textContent = 'Excellent attendance! Keep it up!';
        messageElement.className = 'good';
    } else if (percentage >= 75) {
        messageElement.textContent = 'Good attendance. Try to improve further!';
        messageElement.className = 'warning';
    } else {
        messageElement.textContent = 'Attendance needs improvement. Attend more classes!';
        messageElement.className = 'poor';
    }
    
    // Show result section
    document.getElementById('result').classList.remove('hidden');
});
