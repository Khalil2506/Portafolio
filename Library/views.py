from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.conf import settings
from django.http import FileResponse
from .models import Study
from .forms import StudyForm
import os
from django.contrib import messages
from django.core.mail import send_mail
from .forms import ContactForm

def portafolio(request):
    languages = Study.objects.all()
    alert_message = None
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            send_mail(
                f'Nuevo mensaje de {name}',
                f'Mensaje: {message}\n\nCorreo electrónico del remitente: {email}',
                email,
                ['khalilbautista25@gmail.com'],
                fail_silently=False,
            )
            messages.success(request, 'Your message has been sent successfully.')
            alert_message = 'Your message has been sent successfully.'
            form = ContactForm()
    else:
        form = ContactForm()
    return render(request,'paginas/portafolio.html',{'languages':languages,'form': form, 'alert_message': alert_message})
def languages(request,id):
    languages = Study.objects.get(id=id)
    form = StudyForm(request.POST or None,request.FILES or None,instance=languages)
    if form.is_valid() and request.POST:
        form.save()
        return redirect('edit')
    return render(request,'Inform/index.html',{'form':form})
def edit(request):
    languages = Study.objects.all()
    return render(request,'Inform/editar.html',{'languages':languages})
def add(request):
    form = StudyForm(request.POST or None,request.FILES or None)
    if form.is_valid():
        form.save()
        return redirect('edit')
    return render(request,'Inform/crear.html',{'form':form})
    
def delete(request, id):
    languages = Study.objects.get(id=id)
    languages.delete(using='default', keep_parents=False)
    return redirect('edit')
def show_cv(request):
    cv_path = os.path.join(settings.BASE_DIR, 'Library', 'static', 'pdfs', 'cv.pdf')
    with open(cv_path, 'rb') as pdf:
        response = HttpResponse(pdf.read(), content_type='application/pdf')
        response['Content-Disposition'] = 'inline;filename=CV.pdf'
        return response
    pdf.closed
def show_spp(request):
    cv_path = os.path.join(settings.BASE_DIR, 'Library', 'static', 'pdfs', 'spp.pdf')
    with open(cv_path, 'rb') as pdf:
        response = HttpResponse(pdf.read(), content_type='application/pdf')
        response['Content-Disposition'] = 'inline;filename=spp.pdf'
        return response
    pdf.closed    
def show_pdb(request):
    cv_path = os.path.join(settings.BASE_DIR, 'Library', 'static', 'pdfs', 'pdb.pdf')
    with open(cv_path, 'rb') as pdf:
        response = HttpResponse(pdf.read(), content_type='application/pdf')
        response['Content-Disposition'] = 'inline;filename=pdb.pdf'
        return response
    pdf.closed        

