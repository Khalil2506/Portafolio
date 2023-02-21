from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import Study
from .forms import StudyForm

def portafolio(request):
    return render(request,'paginas/portafolio.html')
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
