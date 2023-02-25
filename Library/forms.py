from django import forms
from .models import Study
class StudyForm(forms.ModelForm):
    class Meta:
        model = Study
        fields = '__all__'
class ContactForm(forms.Form):
    name = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    message = forms.CharField(widget=forms.Textarea, required=True)        
        